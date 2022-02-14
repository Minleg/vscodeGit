//alert('is this working?') checking if the js file is connected to the html file 

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let input = document.querySelector('#image-text')
input.disabled = true // you can not type anything in input field at first before the image gets loaded

let image = new Image()
image.src = 'nature.jpeg'

image.addEventListener('load',function(){ // when the imaged is loaded and ready, we draw the Image on the canvas
    context.drawImage(image,0,0)
    input.disabled =  false
})

// we have to write on the image as we type on the input field
input.addEventListener('input',function(){
    let text = this.value // this refers to whatever created the event
    context.fillStyle = 'magenta'
    context.font = '35px Courier'
    context.drawImage(image,0,0)
    context.fillText(text, 30,100)
})