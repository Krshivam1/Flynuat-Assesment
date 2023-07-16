const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const socketIO = require('socket.io');

const db = require('./db');
const User = require('./models/user');


const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
db.connect();

// Configure passport local strategy
passport.use(new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email }).populate('books');
            if (!user) {
                return done(null, false, { message: 'Invalid email' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return done(null, false, { message: 'Invalid password' });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }
));

// Middleware for token verification
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        req.user = decoded;
        next();
    });
}


// Aggregate Lookup example
app.get('/users-with-books', async (req, res, next) => {
    try {
        const usersWithBooks = await User.aggregate([
            {
                $lookup: {
                    from: 'books',
                    localField: '_id',
                    foreignField: 'user',
                    as: 'books',
                },
            },
        ]);

        return res.json(usersWithBooks);
    } catch (error) {
        return next(error);
    }
});

// Register a new user
app.post('/register', async (req, res, next) => {
    try {
        const { email, password, books } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, password: hashedPassword, books });
        await newUser.save();

        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return next(error);
    }
});

// Login route
app.post('/login', (req, res) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('local', { session: false }, (err, user) => {
            if (err || !user) {
                return reject(err || { message: 'Invalid email or password' });
            }

            req.login(user, { session: false }, (err) => {
                if (err) {
                    return reject(err);
                }

                const { _id, email } = user;
                const token = jwt.sign({ _id, email }, 'secretKey');

                return resolve({ token });
            });
        })(req, res);
    })
        .then((result) => res.json(result))
        .catch((error) => res.status(401).json({ message: error.message }));
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Protected route' });
});

// Socket.io setup
const server = app.listen(3000, () => {
    console.log('Server started on port 3000');
});

const io = socketIO(server);


io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('message', 'Welcome!');

    socket.on('chatMessage', (message) => {
        console.log('Received message:', message);
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});
