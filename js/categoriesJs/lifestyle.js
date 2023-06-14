const container = document.querySelector(".container")

export let lifestyleApps = [


{ name: "Angi", disc: "Service Referrals", image: "images/lifestyleIcons/angiIcon-min.png", url: 'https://www.angi.com', tag1: "referral", tag2: "fix", tag3: "schedule", tag4: "repair"  },

{ name: "Booksy", disc: "Service Bookings", image: "images/lifestyleIcons/booksyIcon-min.png", url: 'https://www.booksy.com', tag1: "referral", tag2: "salon", tag3: "schedule", tag4: "repair"  },


{ name: "Duolingo", disc: "Learn a Language", image: "images/lifestyleIcons/duolingoIcon-min.png", url: 'https://www.duolingo.com', tag1: "learn", tag2: "language", tag3: "dialect", tag4: "lingual"  },



{ name: "Homesnap", disc: "Real Estate", image: "images/lifestyleIcons/homesnapIcon-min.png", url: 'https://www.homesnap.com', tag1: "home", tag2: "house", tag3: "apartment", tag4: "buy sell"  },




{ name: "Joppy", disc: "Careers", image: "images/lifestyleIcons/joppyIcon.png", url: 'https://app.joppy.me', tag1: "jobs", tag2: "careers", tag3: "recruit", tag4: "developers"  },







{ name: "MyChart", disc: "Health", image: "images/lifestyleIcons/myChartIcon-min.png", url: 'https://www.mychart.com', tag1: "health", tag2: "doctors", tag3: "schedule", tag4: "reports"  },

{ name: "Pixabay", disc: "Wallpapers", image: "images/lifestyleIcons/pixabayIcon-min.png", url: 'https://pixabay.com', tag1: "wallpapers", tag2: "pictures", tag3: "homescreen", tag4: "background"  },


{ name: "Ticketmaster", disc: "Events", image: "images/lifestyleIcons/ticketmasterIcon.png", url: 'https://www.ticketmaster.com', tag1: "tickets", tag2: "concerts", tag3: "sports", tag4: "shows"  },

{ name: "Trulia", disc: "Real Estate", image: "images/lifestyleIcons/truliaIcon-min.png", url: 'https://www.trulia.com', tag1: "home", tag2: "house", tag3: "apartment", tag4: "buy sell"  },

{ name: "Wallpeppers", disc: "Wallpapers", image: "images/lifestyleIcons/wallpeppersIcon-min.png", url: 'https://wallpeppers.web.app', tag1: "wallpapers", tag2: "pictures", tag3: "homescreen", tag4: "background"  },

{ name: "Zillow", disc: "Real Estate", image: "images/lifestyleIcons/zillowIcon-min.png", url: 'https://www.zillow.com', tag1: "home", tag2: "house", tag3: "apartment", tag4: "buy sell"  },


	
	]
	
	
	
	const showApps = () => {
  let output = ""
  lifestyleApps.forEach(
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









