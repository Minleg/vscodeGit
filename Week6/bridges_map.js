let USACoordinates = [40.96, -96.2]  // Array of latitude and longitude 
let zoomLevel = 4 // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map 
let map = L.map('bridge-map').setView(USACoordinates, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

let bridges = [
    {
        name:'Verrazano-Narrows Bridge',
        location:['40.6066','-74.0447'],
        city: 'New York',
        state: 'NY',
        span: '1298.4'

    },
    {
        name:'Golden Gate Bridge',
        location:['37.8199','-122.4783'],
        city:'San Francisco and Marin',
        state:'CA',
        span:'1280.2'
    },
    {
        name:'Mackinac Bridge',
        location:['45.8174','-84.7278'],
        city:'Mackinaw and St Ignace',
        state:'MI',
        span:'1158.0'
    },
    {
        name:'George Washington Bridge',
        location:['40.8517','-73.9527'],
        city:'New York and New Jersey',
        state:'NY,NJ',
        span:'1067.0'
    },
    {
        name:'Tacoma Narrows Bridge',
        location:['47.2690','-122.5517'],
        city:'Tacoma and Kitsap',
        state:'WA',
        span:'853.44'
    }
]

let LeafIcon = L.Icon.extend({ // defines an icon class
  options: {
    //'shadowUrl: 'img/golden-gate-bridge.png',
    iconSize:     [28, 75], //sets icon size 
    //shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    //shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
   }
});

// creates two icons 
let longestBridgeIcon = new LeafIcon({iconUrl:'img/canals.png'})
let bridgeIcon = new LeafIcon({iconUrl:'img/golden-gate-bridge.png'})

let spanList = []
let bridgeList = []
bridges.forEach( bridge => {
    // to do pop up, and optional bridge icon
    let markerText = `${bridge.name}<br> Span : ${bridge.span}`
    
    spanList.push(bridge.span) // pushes each span data to spanList array
    bridgeList.push(bridge.name) // pushes the name of each bridge in bridgeList array

    for(let x = 0; x <= spanList.length; x++){ // loops through the span 
        let maxSpan = spanList[0] // sets the max to first value in the array
          if (spanList[x] > maxSpan){ // compares the each value in array
                maxSpan = spanList[x] // updates maxSpan to store the highest span
            }

    if(bridge.span === maxSpan){ // if the bridge span matches the highest span
        iconImage = longestBridgeIcon //sets a bridgeIcon
    }else{
        iconImage = bridgeIcon // else a different Icon
    }
    }
     
    let marker = L.marker(bridge.location,{icon: iconImage}) //iconImage here changest value when it's highest span value
    .bindPopup(markerText)
    .addTo(map)
})

let canvas = document.querySelector('#canvas')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: bridgeList, //bridgeList contains the name of all the bridge
        datasets: [ {
            label: 'Longest bridge',
            data: spanList, // spanList contains the span of all the bridge in the same order as bridge in bridgelist
            backgroundColor: ['red','blue','yellowgreen','green','yellow']
        }]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

