const container = document.querySelector(".container")

const apps = [


 { name: "TikTok", disc: "Social Media", image: "images/streamIcons/tikTokIcon.png", url: "https://www.tiktok.com" },
 
 
 { name: "Target", disc: "Shopping", image: "images/otherIcons/target.png", url: "https://www.target.com" },

 
 { name: "MyChart", disc: "Health", image: "images/otherIcons/myChart.png", url: 'https://www.mychart.com' },
 
 
 { name: "ImgFlip", disc: "Meme Generator", image: "images/otherIcons/imgFlip.png", url: 'https://imgflip.com' },
 
 
 

  { name: "Disney+", disc: "Streaming", image: "images/streamIcons/disneyPlusIcon.png", url: 'https://www.disneyplus.com' },
 
	
	{ name: "Starbucks", disc: "Coffee", image: "images/otherIcons/starbucks.png", url: 'https://www.starbucks.com' },
	
	
	{ name: "Airbnb", disc: "Travel", image: "images/otherIcons/airBnb.png", url: "https://www.airbnb.com" },
	
	
 
	{ name: " Philo", disc: "Live TV", image: "images/streamIcons/philoIcon.png", url: "https://www.philo.com" },
	
	{ name: "Weather</br> Channel", disc: "News", image: "images/otherIcons/weatherChannel.png", url: 'https://weather.com' },
	
	
	
	{ name: "American Eagle", disc: "Shopping", image: "images/otherIcons/americanEagleIcon.png", url: "https://www.ae.com"  },
	
	

  { name: "Netflix", disc: "Streaming", image: "images/streamIcons/netflixIcon.png", url: 'https://www.netflix.com' },

  { name: "Discovery+", disc: "Streaming", image: "images/streamIcons/discoveryPlus.png", url: "https://www.discoveryplus.com" },

  { name: "CuriosityStream", disc: "Streaming", image: "images/streamIcons/curiosityStream.png", url: "https://curiositystream.com" },

  { name: "DAZN", disc: "Live Sports", image: "images/streamIcons/dazn.png", url: "https://www.dazn.com" },

  { name: "BET", disc: "Entertainment", image: "images/streamIcons/bet.png", url: "https://www.bet.com" },

  { name: "ESPN+", disc: "Live Sports", image: "images/streamIcons/espnPlus.png", url: "https://plus.espn.com/" },
	
	]
	
	
	
	const showApps = () => {
  let output = ""
  apps.forEach(
    ({ name, disc, image, url }) =>
      (output += `
               <div class="card">
               <a href=${url} > <img class="card--avatar" src=${image} ></a>
                  	
					  <h1 class="card--title"><a href=${url} >${name}</a></h1>
						
						<h2 class="card--disc"><a href=${url} >${disc}</a></h2>
						
                <a class="card--link" href="${url}">ADD</a>
             
								</div>
							
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showApps)






const navBar = document.querySelector(".navBar")




const navButtons = [
  { name: "Apps ", image: "images/appsWhite.png", url: "index.html" },
	
 
	{ name: "Games", image: "images/joystickWhite.png", url: 'games.html' },
	
 
	{ name: "Stream", image: "images/playWhite.png", url: 'stream.html' },
	

  { name: "Search", image: "images/searchWhite.png", url: "search.html" },
	
	
]


const showNav = () => {
  let output = ""
  navButtons.forEach(
    ({ name, image, url }) =>
      (output += `
			       
              
               <a href=${url}> <img class="navcard--avatar" src=${image} ></a>
                  	
					  
							 
								</div>
							
              `)
  )
  navBar.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showNav)















if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}









