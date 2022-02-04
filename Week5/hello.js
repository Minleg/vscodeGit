console.log('Hello World!')

let color = 'blue'
var size = 'medium' //not recommended
const language = 'JavaScript' //constant value. doesn't change
//language = 'C#' error

let quantity = 5 //numnber variable
let distance = 4.5 // number variable

let text = 'Hello World'
let message = "Hello Programmers"

console.log('There are ' + quantity + ' programmers') // concatenation between string and number variables work fine

let todayTemp = 75
console.log("Today's temperature is " + todayTemp + "F")

let TempC = (todayTemp - 32) * 5 / 9
console.log('Today\'s temperature is ' + TempC.toFixed(2) + 'C')