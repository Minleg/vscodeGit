let text = 'The classes are itec 1150, itec 1250, itec 2560'

let replaced = text.replace('itec', 'ITEC')
console.log(replaced)

let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&') //$& refers to the string that gets matched which are the four digit combinations.
console.log(replaceRegex)

let multiLineText = `Hello
How are you?
Where are you from?
What are you doing now?`
console.log(multiLineText)