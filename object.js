let x;
const person={
    name: 'Anuj',
    age: 30,
    isAdmin: true,
    address:{
        street: "123 main road",
        city: "Delhi",
        state: "Haryana",
    },
    hobbies: ['music','Table Tanis'],
};
x=person['age'];
x=person.address.city;
x=person.hobbies[0]
console.log(x);
