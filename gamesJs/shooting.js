const container = document.querySelector(".container")

const apps = [


{ name: "Subway Clash Remastered", 
disc: "Subway Clash Remastered web app is a battle royal third-person shooter. Awesome 3D graphics and multiplayer make this one of our favorite games!", 
image: "images/gameIcons/subwayClashRemastered.png", 
url: "https://games.appothica.com/gamesList/subwayClashRemastered.html", 
tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },





{ name: "Sniper Code One", 
disc: "Sniper Code One web app is a puzzle sniper game with stickman characters. Take out your targets and complete each mission", 
image: "images/gameIcons/theSniperCode.png", 
url: "https://games.appothica.com/gamesList/theSniperCode.html", 
tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },




{ name: "Warfare Area", 
disc: "First-Person Shooter", 
image: "images/gameIcons/warfareArea.png", 
url: "https://games.appothica.com/gamesList/warfareArea.html", 
tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	


	

{ name: "Surviv.io", 
	disc: "Battle Royale", 
	image: "images/gameIcons/survivIcon.png", 
	url: "https://surviv.io", 
	tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },



	
{ name: "Alpha Guns", 
	disc: "Action", 
	image: "images/gameIcons/alphaGuns.png", 
	url: "https://games.appothica.com/gamesList/alphaGuns.html", 
	tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

	
	]
	
	
	
	const showApps = () => {
  let output = ""
  apps.forEach(
    ({ name, disc, image, url }) =>
      (output += `
               <div class="gameCard">
               <a href=${url} > <img class="game--card--avatar" src=${image} ></a>
                	
					  <h1 class="game--card--title"><a href=${url} >${name}</a></h1>
						
						<h2 class="game--card--disc"><a href=${url} >${disc}</a></h2>
						
                <a class="game--card--link" href="${url}">ADD</a>
             
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
			       
                  <div class="navCard">
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






