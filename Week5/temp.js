// Example weather current conditions from Open Weather Map API
// https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02

let weather = {
    "message": "accurate",
    "cod": "200",
    "count": 1,
    "list": [
        {
            "id": 2643743,
            "name": "London",
            "coord": {
                "lat": 51.5085,
                "lon": -0.1258
            },
            "main": {
                "temp": 7,            // Current temperature
                "pressure": 1012,
                "humidity": 81,
                "temp_min": 5,
                "temp_max": 8
            },
            "dt": 1485791400,
            "wind": {
                "speed": 4.6,     // I want this info - wind speed
                "deg": 90
            },
            "sys": {
                "country": "GB"
            },
            "rain": null,
            "snow": null,
            "clouds": {
                "all": 90
            },
            "weather": [
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",   // description
                    "icon": "50d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",  // description
                    "icon": "09d"
                }
            ]
        }
    ]
}

// Extract current temperature, step-by-step
let weatherList = weather.list
//console.log(weatherList)

let weatherInfo = weatherList[0]
//console.log(weatherInfo)

let main = weatherInfo.main
//console.log(main)

let currentTemp = main.temp
//console.log(currentTemp)    // and there's the temp!

// Or, combine all these steps into one 
// test this type of code and make sure you don't miss a step.
let temp = weather.list[0].main.temp
console.log('The current temperature is ' + temp)

// step by step to get wind speed
let wind = weatherInfo.wind
//console.log(wind)
let windSpeed = wind.speed 
console.log('The current windspeed is ' + windSpeed)

let weatherDescriptionArray = weatherInfo.weather
//console.log(weatherDescriptionArray)
let descriptionArray = [] // empty array to store the descriptions

weatherDescriptionArray.forEach(function(weatherDescription){ 
    descriptionArray.push(weatherDescription.description) // adding each description from both the objects to the array defined above

})

let descriptionString = descriptionArray.join(', ')
console.log('The weather is ' + descriptionString)

let longitude = weatherInfo.coord.lon
let latitude = weather.list[0].coord.lat
console.log('Longitude :  ' + longitude)
console.log('Latitude : ' + latitude)


