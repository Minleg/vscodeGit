// coordinates and zoom level
let metroAreaCenterCoordinates = [44.96, -93.2] // latitude(north or south) and longitude (east or west)
let zoomLevel = 9 // 1 = whole world, 20 = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel) // L is a variable in leaflet.js which has a method map() which takes an argument for the id of div element to draw the map at.
// here we don't put the # with the class id

//Add the title layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] }, 
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] }, 
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] }, 
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] }, 
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

campuses.forEach(function(collegeCampus){
    let markerText = `<b>${collegeCampus.name}</b><br><a href = "${collegeCampus.website}">Website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})




//let mctcCoordinates = [44.9724,-93.2844]
//let mctcMarker = L.marker(mctcCoordinates)
   // .bindPopup('Minneapolis College<br><a href="https://minneapolis.edu">Website</a>')
    //.addTo(map)

//let stPaulCoordinates = [44.9483,-93.1099]
//let stPaulMarker = L.marker(stPaulCoordinates)
    //.bindPopup('Saint Paul College<br><a href="https://saintpaul.edu">Website</a>')
    //.addTo(map)

//let normandaleCoordinates = [44.8297,-93.3312]
//let normandaleMarker = L.marker(normandaleCoordinates)
   // .bindPopup('Normandale College<br><a href="https://normandale.edu">Website</a>')
    //.addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
    color: 'green',
    radius: 30000, // in metres
    fillOpacity: 0.1 // how opaque it should be , 1 being completely opaque and 0 being see through
})
.bindPopup('Twin Cities Metro Area')
.addTo(map)
