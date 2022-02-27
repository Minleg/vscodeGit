let cats = ['Hello Kitty', 'Maru', 'Garfield', 'Soymilk', 'Miles', 'Meridith']

let firstletters = cats.map( cat => cat[0] )
console.log(firstletters)

let endletters = cats.map((cat) => {
    return cat[cat.length - 1]
})

// let endletters = cats.map(cat => cat[cat.length-1])
console.log(endletters)

let startsWithM = cats.map( cat => {
    return (cat[0] === 'm' || cat[0] == 'M')
})
console.log(startsWithM)

// // Exercise: can you use map to create a new array of boolean values; 
// //    whether a cat's name is longer than 6 letters or not.
let catNameLengthGreaterThanSix = cats.map(cat => cat.length > 6)
console.log(catNameLengthGreaterThanSix)

let quizScores = [90, 100, 79, 81, 100, 40, 92, 64]

let aGrades = quizScores.filter( score => score >=90)
console.log(aGrades)

let letterGrades = quizScores.map( score => {
    if (score >= 90) {return 'A'}
    if (score >=80 && score < 90) {return 'B'}
    if (score >= 70 && score < 80) {return 'C'}
    if (score >= 60 && score < 70) {return 'D'}
    return 'F' 
})

console.log(letterGrades)

let scoreAndLetterGrades = quizScores.map( score => {
    if (score >= 90) { return {score: score, grade: 'A'} }
    if (score >= 80) { return {score: score, grade: 'B'} }
    if (score >= 70) { return {score: score, grade: 'C'} }
    if (score >= 60) { return {score: score, grade: 'D'} }
    return {score: score, grade: 'F'}
})

console.log(scoreAndLetterGrades)

let aScoreGrade = scoreAndLetterGrades.filter(scoreinfo => scoreinfo.grade ==='A')
console.log(aScoreGrade)


// // Note: shortcut assignment operator for objects.
let cat = 'Meridith'
let owner = 'Taylor Swift'
let catAndOwner = { cat, owner }  // Variable names become the keys 
console.log(catAndOwner) // { cat: 'Meridith', owner: 'Taylor Swift' }

// // Using that here,
let scoreAndLetterGrades2 = quizScores.map( score => {
    let grade
    if (score >= 90) {  grade = 'A' } 
    else if (score >= 80) { grade = 'B' }
    else if (score >= 70) { grade = 'C' }
    else if (score >= 60) { grade = 'D' }
    else { grade = 'F' }
    return {score, grade }
})

console.log(scoreAndLetterGrades2)

let dogs = ['Einstein', 'Marley', 'Fly', 'Max', 'Scooby', 'Zero']
let pets = [ ...dogs, ...cats, 'Kitty']
console.log(pets)

let shortCatNames = cats.filter( cat => cat.length < 6)
console.log(shortCatNames)

let nameStartingWithG = cats.filter( cat => cat[0] === 'g' || cat[0] === 'G')
console.log(nameStartingWithG)

function startsWithG(name){
    return name.toUpperCase().startsWith('G')
}

let nameStartingWithG2 = cats.filter(cat => startsWithG(cat))
console.log(nameStartingWithG2)

let nameStartingWithG3 = cats.filter(cat => startsWithG(cat))
console.log(nameStartingWithG3)

let students = [ 
    {name: 'andy', starId: 'aaaa', present: true},
    {name: 'brian', starId: 'bbbb', present: false},
    {name: 'catherine', starId: 'cccc', present: true}, 
    {name: 'clara', starId: 'ccc2', present: false},
    {name: 'duncan', starId: 'dddd', present: true},
    {name: 'steve', starId: 'ssss', present: false}, 

]

let presentStudents = students.filter(student => student.present)
console.log('Who is here now?',presentStudents)

let pastStudents = students.filter( student => !student.present)
console.log('Past Students: ',pastStudents)

// // Filter - remove students meeting a condition
let everyoneButClara = students.filter( student => student.name != 'clara')
console.log(everyoneButClara)   // bye!

let presentStudentName = students
    .filter(student => student.present)
    .map(student => student.name)

console.log(presentStudentName)

// with loop
let presentStudentName2 = []
students.forEach(function(student){
    if(student.present){
        presentStudentName2.push(student.name)
    }
})

console.log('present students : ',presentStudentName2)

// Exercise: can you create an array of starIDs of students who are NOT present?
let pastStudentStarID = students
    .filter(student => !student.present)
    .map(student => student.starId)

//console.log('students:',students)
console.log('past student ID',pastStudentStarID)

// // Spread operator works with arrays and objects too. 
// // So if there's another class,
let moreStudents = [ 
    {name: 'justin', starId: 'jjj', present: true},
    {name: 'mary', starId: 'mmm', present: false},     
]

let everyone = [ ...students, ...moreStudents ]
console.log(everyone)

let student = {name: 'daniel', starId: 'ddd', present: true}

let studentPlusEmail = { ...student, email: 'daniel@school.edu'}
console.log(studentPlusEmail)

// Modify 
let studentChangedStarId = { ...student, starId: 'eee'}   // make sure any attributes you change are at the end
console.log(studentChangedStarId)

// Another example object
let studentClassReg = { '1150': true, '2560': false}
// Combine two or more objects using spread operator 
let studentAndReg = { ...student, ...studentClassReg}
console.log(studentAndReg)

// // Similar functions: find returns the first match 
let steve = students.find( student => student.name === 'steve')
let beyonce = students.find( student => student.name === 'beyonce')
console.log('steve', steve)  // { name: 'steve', starId: 'sss', present: false }
console.log('beyonce', beyonce)  // undefined

// // every returns true if all of the items match a condition. Is everyone here? 
let isEveryoneHere = students.every( student => student.present )
console.log('Is everyone here? ' + isEveryoneHere)

let everyoneHere = students
    .map ( student => { return {...student,present : true}})

console.log(everyoneHere)

let isEveryoneHere2 = everyoneHere.every(student => student.present)
console.log('Is everyone here? ' + isEveryoneHere2)

let starIDlength = students.every( student => student.starId.length >= 3 )
console.log('Every star ID long enough?', starIDlength)