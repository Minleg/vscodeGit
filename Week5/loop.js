var furniture = {
    table : 'red',
    chair : 'blue',
    couch : 'green'
}

//Looping over all of the properties
for ( var f in furniture){
    console.log(f)
    console.log(furniture[f])
}