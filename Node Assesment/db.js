

// Connect to MongoDB

const mongoose = require('mongoose');
function connect() {
    mongoose
        .connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('MongoDB connection error:', error);
        });


}

module.exports = {
    connect,
}; 