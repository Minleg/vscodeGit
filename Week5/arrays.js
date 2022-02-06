let animals = ['lion', 'tiger', 'cheetah']
console.log(animals)
console.log(animals[1])
//console.log(animals[1000])

animals[3] = 'giraffe'
console.log(animals)
console.log(animals[5])

animals.push('elephant') // to add item to the end of an array
console.log(animals)

let lastAnimal = animals.pop() // to delete the last element of the array
console.log(lastAnimal)
console.log(animals)

animals.unshift('deer') // to add item at the begining of the array
console.log(animals)

let firstAnimal = animals.shift() // removes the first item in the array
console.log(firstAnimal)
console.log(animals)

animals.reverse() // reverses the order of the array
console.log(animals)

animals.sort()
console.log(animals)

let numberOfAnimals = animals.length // length of an array
console.log(numberOfAnimals)

console.log(animals.indexOf('lion')) // finds the index of an item in the array, it returns -1 if the item doesn't exist in the array

if (animals.indexOf('walrus') == -1){
    console.log('walrus is not found in the array')
}

if (animals.includes('cheetah')){ // returns true or false depending on whether the item exists in the array or not
    console.log('Cheetah exists in the array')
}

console.log(animals.join()) // joins the items in the array in a single string with comma seperating each element by default
console.log(animals.join(' * ')) // we can also specify the separating element 

animals.forEach( function (animal){
    console.log(animal.toUpperCase())

})

//printing the length of each animal
animals.forEach( function (animal){
    console.log(`Length of ${animal} is ${animal.length}`)
})

animals.push('alligator')
console.log(animals)

let lengthArray = []
animals.forEach(function(animal){
    lengthArray.push(animal.length)
})

console.log(lengthArray)