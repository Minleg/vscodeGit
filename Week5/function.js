function shout(text){
    let shouty_text = text.toUpperCase() + '!!!'
    return shouty_text
}

console.log(shout('hello world'))

let message = shout('hello web programmmers')
console.log(message)

function f_to_c(f, decimalPlaces){
    let celsius = (f - 32) * 5 / 9
    if(decimalPlaces){ // undefined values are considered to be false
        // undefined is a falsy value
        return celsius.toFixed(decimalPlaces)
    }else{
        return celsius
    }
    
}

let TodayTemp = 75
tempCelsius = f_to_c(TodayTemp)
tempCelsius2 = f_to_c(TodayTemp,4)
console.log(tempCelsius)
console.log(tempCelsius2)