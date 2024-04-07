// Arrays - variables that holds multiple values indexing 0 based

// using new keyword (constructor)

const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8)
console.log(numbers)


const fruits = ['apple', 'orange', 'pear', 'orange', true, 10, 9] //multiple data types accepted

fruits[3] = "kiwi"

// methods 

fruits.push("kiwi") //add this to last 
fruits.unshift("kiwi") //add this to first
console.log(fruits)