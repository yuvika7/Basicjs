// if/else
const x = 11;
if (x == 10) {
    console.log("x is 10")
}
const y = 10;
if (y === '10') {
    console.log("x is 10")
}
else {
    console.log("x is not 10")
}
const z = 10;
if (z === 10) {
    console.log("x is 10")
}


if (x > 10 || y > 5) {
    console.log("true")
}
else {
    console.log("false")
}
if (x > 10 && y > 5) {
    console.log("true")
}
else {
    console.log("false")
}

// ternary operator

const a = x > 10 ? "red" : "blue"
console.log(a)

// switch

switch (a) {
    case "red":
        console.log("red")
        break;
    case "yellow":
        console.log("yellow")
        break;
    case "blue":
        console.log("blue")
        break;
}