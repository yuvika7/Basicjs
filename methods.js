// forEach , map , filter

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
        isCompleted: false

    }
];

todos.forEach(function (todo) {
    console.log(todo.text)
})

const text = todos.map(function (todo) {
    return todo.text
})

console.log(text) //returns in the form of array

const todoText = todos.filter(function (todo) {
    return todo.isCompleted === false

})
console.log(todoText)