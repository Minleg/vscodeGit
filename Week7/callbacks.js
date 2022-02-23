let animals = ['Giraffe','Elephant','Yak']

animals.forEach(function(animal,index){
    console.log(animal,index)
})

animals.forEach( (animal,index) => {
    console.log(index,animal)
} )

animals.forEach( (animal,index) => console.log(animal,index+5)) // if its just one line of code inside the callback function, it works without the {} braces as well.

animals.forEach(animal => console.log(animal))  // if there is only one argument, we can omit some () as well.