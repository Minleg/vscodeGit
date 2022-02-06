function isValidGPA(gpa){
    if (gpa >= 0 && gpa <=4){
        return true
    } else {
        return false
    }
}

console.log(isValidGPA(-3))
console.log(isValidGPA(4.1))
console.log(isValidGPA(2.5))
console.log(isValidGPA(4))

function cityState(city, state){
    //return city + ', ' + state.toUpperCase() // this works as well
    return `${city},${state.toUpperCase()}` // template string
}

console.log(cityState('Minneapolis','mn'))
let address = cityState('Seatle','wa')
console.log(address)