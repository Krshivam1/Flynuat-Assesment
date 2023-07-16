//3rd question

let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);

// Output:
// { greeting: 'Bye' }
// { greeting: 'Bye' }
// Explaination ==>

// here, obj1 and obj2, both are referencing to the same object (same memory location)
// hence when we update the value of any of the objects, it directly updates the object in the memory which it points to
// So both the objects will reflect the same changes 
