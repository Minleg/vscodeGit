let url = 'https://api.spacexdata.com/v4/launches/latest'

let infoPara = document.querySelector('#info')
let utubeLink = document.createElement('a')

fetch(url).then( response => response.json())
    .then(collectData => {
        console.log(collectData)
        utubeLink.href = collectData.links.webcast
        utubeLink.innerHTML = 'Link'
        //console.log(collectData.links.webcast)
        infoPara.appendChild(utubeLink)
        
    })
    .catch(err => alert('error connecting',err))