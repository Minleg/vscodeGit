/*
{
"number": 1,
"name": "Tonight",
"startTime": "2022-02-23T18:00:00-06:00",
"endTime": "2022-02-24T06:00:00-06:00",
"isDaytime": false,
"temperature": -4,
"temperatureUnit": "F",
"temperatureTrend": null,
"windSpeed": "0 to 5 mph",
"windDirection": "NNW",
"icon": "https://api.weather.gov/icons/land/night/cold?size=medium",
"shortForecast": "Mostly Cloudy",
"detailedForecast": "Mostly cloudy, with a low around -4. Wind chill values as low as -12. North northwest wind 0 to 5 mph."
},
*/ 

const forecastTable = document.querySelector('#weather-forecast')

fetch("https://api.weather.gov/gridpoints/MPX/116,72/forecast")
.then( response => response.json())
.then (weatherData => {
    console.log(weatherData)
    showForecastInTable(weatherData)
})

function showForecastInTable(weatherData){


    //console.log(weatherData)
    let properties = weatherData.properties
    //console.log(properties)

    let forecastPeriods = properties.periods 
    //console.log(forecastPeriods

    forecastPeriods.forEach ( forecast => {

        let tableRow = document.createElement('tr')

        let tableDataCellDay = document.createElement('td')
        let tabelDataCellTemp = document.createElement('td')
        let tableDataCellIcon = document.createElement('td')
        let weatherIconImg = document.createElement('img')
        let tableDataCellForecast = document.createElement('td')
        let dataForecast = document.createElement('p')

        //console.log(forecast)
        // let name = forecast['name'] - same 
        let name = forecast.name
        let temperature = forecast.temperature
        let temperatureUnit = forecast.temperatureUnit
        let iconUrl = forecast.icon 
        let detailedForcast = forecast.detailedForecast

        tableDataCellDay.innerHTML = name
        tabelDataCellTemp.innerHTML = `${temperature}\u00B0${temperatureUnit}`
        tableRow.appendChild(tableDataCellDay)
        tableRow.appendChild(tabelDataCellTemp)

        //icon
        weatherIconImg.src = iconUrl
        tableDataCellIcon.appendChild(weatherIconImg)
        tableRow.appendChild(tableDataCellIcon)

        //Detailed forecast
        dataForecast.innerHTML = detailedForcast
        tableDataCellForecast.appendChild(dataForecast)
        tableRow.appendChild(tableDataCellForecast)
        forecastTable.appendChild(tableRow)
    })
}