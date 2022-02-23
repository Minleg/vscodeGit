let url = "https://api.wheretheiss.at/v1/satellites/25544"

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let timeIssLocationFetched = document.querySelector('#time')

let update = 10000
let maxFailedAttempts = 3

let map = L.map('iss-map').setView([0,0],1) // lat,long 0 zoomlevel 1 to set the view to whole world
let issMarker
let icon = L.icon({
    iconUrl : 'iss.png',
    iconSize : [50,50], 
    iconAnchor : [25,25]  //position relative to the location
})

//Add the title layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

iss(maxFailedAttempts) // call function one time to start
//setInterval(iss,update) // 10 seconds - set interval has chances of probable overlapping between calls to server and making calls again before receiving the response from the server for the first call

function iss(attempts){

    if (attempts <= 0){
        alert('We ran out of attempts to contact ISS server after several tries.')
        return 
    }
//fetch returns a promise 
    fetch(url).then( (res) => { //if fetch was successful and promise was fullfilled, then is called
        //res.json() also returns a promise, therefore it allows us to attach another then block
        return res.json() // process response into json, because response contains many other information besides the json
        // json() converts the raw response into JSON objects which we can use to fetch useful data
        // anything that returned from the first then() block, it is supplied to any subsequent then blocks.
    }).then( (issData) => { // issData contains all the data returned from the response from the first then block
        console.log(issData) //TODO - display on webpage
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        // create a marker if it doesn't exist
        // move the marker if it exists

        if(!issMarker){
            //create a marker
            issMarker = L.marker([lat,long], {icon : icon}).addTo(map)
        } else {
            issMarker.setLatLng([lat,long])
        }

        let now = new Date()
        timeIssLocationFetched.innerHTML = `At ${now} the ISS is under the following coordinates`

    }).catch( (err) => { // if fetch wasn't successful, then catch is called, it is also called when res.json() fails. so its generic handler
        attempts -- //attempts = attempts - 1, everytime an error occurs , number of available attempts to contact the server is reduced by one
        console.log('ERROR!',err)
    }).finally( () => {
        setTimeout(iss,update,attempts) // we need to provide any arguments to iss function after the number of seconds for timeout
    })
}