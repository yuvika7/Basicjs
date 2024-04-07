// Object - key valuealue pairs 

const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    hobbies: ['Reading', 'Coding'],
    address: {
        city: "boston",
        state: "New York",
    }
}
console.log(person.firstName + ' ' + person.lastName)
console.log(person.hobbies[1])

// variables
const { firstName, lastName, address: { city } } = person;
console.log(city)

// we can also add properties 

person.email = "johnsmith@gmail.com"

console.log(person)

// ways to make object

const todos = [
    {
        id: 1,
        text: "Reading",
        isCompleted: true

    },
    {
        id: 2,
        text: "Dental checkup",
        isCompleted: true

    },
    {
        id: 3,
        text: "meeting with boss",
        isCompleted: true

    }
]

console.log(todos)

//  to change into json

const json = JSON.stringify(todos)
console.log(json)
