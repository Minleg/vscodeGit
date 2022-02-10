/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('Lab. Please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
  "timestamp": 1515784140,
  "iss_position":
    {
      "latitude": "49.2167",
      "longitude": "100.5363"
    },
  "message": "success"
}

// TODO Extract the latitude value, and log it to the console.
let latitudeValue = iss_location.iss_position.latitude
console.log(latitudeValue)
// TODO Extract the longitude value, and log it to the console.
let longitudeValue = iss_location.iss_position.longitude
console.log(`longitude = ${longitudeValue}`)




/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
rates.CHF = 1.1787
console.log(rates)
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate 
let yourAmountInEuros = 100
for( let rate in rates){
    let value = rates[rate] * yourAmountInEuros
    console.log(`The ${yourAmountInEuros} Euros equals ${value.toFixed(2)} ${rate}`)
}
//      the equivalent value in Australian Dollars (AUD)
console.log(`${yourAmountInEuros} Euros is ${(yourAmountInEuros*rates["AUD"]).toFixed(2)} Australian Dollars `)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.
let currencyArray = [] // to store all keys
let valueArray = [] // to store all the values
for (let rate in rates){ //loops 
    let value = rates[rate]
    currencyArray.push(rate) // stores all the key in currencyArray in original sequence
    valueArray.push(value) // stores all the value in valueArray in original sequence
}
let max = 0
for(let i = 0; i < valueArray.length;i++){
    
    if(valueArray[i] > max){
        max = valueArray[i] // updates and stores the highest value in max
    }
    
}
console.log(`The ${currencyArray[valueArray.indexOf(max)]} has highest exchange rate at ${max}`) // index of the max value in valueArray would correspond to the same index of it's key in currencyArray

//console.log(valueArray.indexOf(max))
//console.log(currencyArray)
//console.log(valueArray)


/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
  { name: "Bill Clinton", cat: "Socks" },
  { name: "Gary Oldman", cat: "Soymilk" },
  { name: "Katy Perry", cat: "Kitty Purry" },
  { name: "Snoop Dogg", cat: "Miles Davis" }
]

// TODO print Gary Oldman's cat's name
console.log(`The ${cats_and_owners[1].name}'s cat's name is ${cats_and_owners[1].cat}`)
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
cats_and_owners.push({name: "Taylor Swift", cat: "Meredith"})
//console.log(cats_and_owners)
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
cats_and_owners.forEach(function(catOwner){
    console.log(`${catOwner.name} : ${catOwner.cat}`)
})




/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

let nobel_prize_winners_2017 = {
  "prizes":[
    {
      "year":"2017",
      "category":"physics",
      "laureates":[
        {
          "id":"941",
          "firstname":"Rainer",
          "surname":"Weiss",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"2"
        },
        {
          "id":"942",
          "firstname":"Barry C.",
          "surname":"Barish",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        },
        {
          "id":"943",
          "firstname":"Kip S.",
          "surname":"Thorne",
          "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
          "share":"4"
        }
      ]
    },
    {
      "year":"2017",
      "category":"chemistry",
      "laureates":[
        {
          "id":"944",
          "firstname":"Jacques",
          "surname":"Dubochet",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"945",
          "firstname":"Joachim",
          "surname":"Frank",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        },
        {
          "id":"946",
          "firstname":"Richard",
          "surname":"Henderson",
          "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"medicine",
      "laureates":[
        {
          "id":"938",
          "firstname":"Jeffrey C.",
          "surname":"Hall",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"939",
          "firstname":"Michael",
          "surname":"Rosbash",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        },
        {
          "id":"940",
          "firstname":"Michael W.",
          "surname":"Young",
          "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
          "share":"3"
        }
      ]
    },
    {
      "year":"2017",
      "category":"literature",
      "laureates":[
        {
          "id":"947",
          "firstname":"Kazuo",
          "surname":"Ishiguro",
          "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
          "share":"1"
        }
      ]
    },
    {
      "year":"2017",
      "category":"peace",
      "laureates":[
        {
          "id":"948",
          "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
          "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
          "share":"1",
          "surname":""
        }
      ]
    },
    {
      "year":"2017",
      "category":"economics",
      "laureates":[
        {
          "id":"949",
          "firstname":"Richard H.",
          "surname":"Thaler",
          "motivation":"\"for his contributions to behavioural economics\"",
          "share":"1"
        }
      ]
    }
  ]
}
// TODO print the full name of the Literature Nobel laureate.
nobel_prize_winners_2017.prizes.forEach(function(nobelWinners){
    if(nobelWinners.category == 'literature'){
        nobelWinners.laureates.forEach(function(laureate){
            console.log(`The full name of the Literature Nobel laureate is ${laureate.firstname} ${laureate.surname}`)
        })
    }
})

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
nobel_prize_winners_2017.prizes.forEach(function(nobelWinners){
    if(nobelWinners.category == 'physics'){
        console.log('The ids of each of the Physics Nobel laureates are: ')
        nobelWinners.laureates.forEach(function(laureate){
            console.log(laureate.id)
        })
    }
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
console.log('The prize categories are:')
nobel_prize_winners_2017.prizes.forEach(function(nobelWinners){
    console.log(nobelWinners.category)
})
// TODO write code to print the total number of prize categories
let categoryArray = [] //array to store all the categories
nobel_prize_winners_2017.prizes.forEach(function(nobelWinners){
    categoryArray.push(nobelWinners.category) // pushes each category to the categoryArray
})
console.log(`The total number of prize categories is ${categoryArray.length}`) // total number is the length of the categoryArray
// TODO write code to count the total number of laureates from 2017. 
let laureateArray = [] // to store the id of all the laureates, assuming id is unique to all
nobel_prize_winners_2017.prizes.forEach(function(nobelWinners){
   nobelWinners.laureates.forEach(function(laureate){
       laureateArray.push(laureate.id) // pushes each id to the laurateArray
   })
})
console.log(`The total number of laureates from 2017 is ${laureateArray.length}`) //total number of laureates is the length of the laureateArray
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.





