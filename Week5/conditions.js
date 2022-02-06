// condition to take Android programming
let takenCSharp = false
let takenJava = true

if(takenCSharp || takenJava){ // OR condition. atleast one or both the conditions must be true
    console.log('You have taken the prerequisite to take Android programming language')
} else {
    console.log('You have not taken the prerequisite to take Anroid programming language')
}

//Three requirements to become a senator
// must be 30 years or older
// must be a US citizen for 9 or more years
// you must live in the state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'

function isValidSenator(age, usCitizenTime, stateOfResidence, stateWantToRepresent) {
    if(age >= 30 && usCitizenTime >= 9 && stateOfResidence == stateWantToRepresent)
    {
        return true
    }
    else{
        return false
    }
}

if (isValidSenator(age, usCitizenTime,stateOfResidence,stateWantToRepresent)){
    console.log('You can become a Senator')
} else {
    console.log(`You are not qualified to become a Senator in the state of ${stateWantToRepresent}`)
}

// falsy values - undefined, null, empty lists [], empty objects {}, 0 , false
if ('' == 0){
    console.log('the same !')
} else {
    console.log('not the same!')
}