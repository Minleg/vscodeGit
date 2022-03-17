let transitProvidersList = document.querySelector('#transit-providers')
let transitDirection = document.querySelector('#transit-direction')
//let providerListItem = document.createElement('li')
let descriptionList = document.querySelector('#description')
let routeButton = document.querySelector('#click-me')
let urlProvider = 'https://svc.metrotransit.org/NexTrip/Routes?format=json'
//   https://svc.metrotransit.org/NexTrip/Routes?format=json

let map = L.map('bus-map').setView([46.392410,-94.636230],9)
let icon = L.icon({
    iconUrl : 'bus.png',
    iconSize : [50,50], 
    iconAnchor : [25,25]  //position relative to the location
})

let busMarker

//Add the title layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


fetch(urlProvider)
    .then(response => response.json())
    .then(responseData => {
        console.log(responseData)
        responseData.forEach(responses => {
            let providerListItem = document.createElement('option')
            //console.log(responseData)
            provider = responses.Route
            providerListItem.innerHTML = provider
            transitProvidersList.appendChild(providerListItem)
        })  
            
    } )
    .catch(err => alert('Error',err))



routeButton.addEventListener('click',function(){
    descriptionList.innerHTML = '' 
    let route = transitProvidersList.options[transitProvidersList.selectedIndex].value
    let direction = transitDirection.options[transitDirection.selectedIndex].value
    //console.log(route)
    //console.log(direction)
    let newUrl = `https://svc.metrotransit.org/NexTrip/Stops/${route}/${direction}?format=json`
    fetch(newUrl)
        .then(response => response.json())
        .then(responseData => {
            responseData.forEach(responses => {
                let routeList = document.createElement('li')
                routeValue = responses.Text
                routeList.innerHTML = routeValue
                descriptionList.appendChild(routeList)
            })    
        })

    let mapUrl = `https://svc.metrotransit.org/NexTrip/VehicleLocations/${route}?format=json`


    fetch(mapUrl)
        .then(response => response.json())
        .then(responseData => {
            console.log(responseData)
            let lat = responseData.VehicleLatitude
            let long = responseData.VehicleLongitude
            console.log(lat,long)

            if(!busMarker){
                //create a marker
                busMarker = L.marker([lat,long], {icon : icon}).addTo(map)
            } else {
                busMarker.setLatLng([lat,long])
            }
        })
        
        
        
})




