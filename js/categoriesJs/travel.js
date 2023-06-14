const container = document.querySelector(".container")

export let travelApps = [


{ name: "Airbnb", disc: "Travel", image: "images/travelIcons/airBnb.png", url: "https://www.airbnb.com", tag1: "lodge", tag2: "house", tag3: "apartments", tag4: "hotel"  },




{ name: "Airfare Watchdog", disc: "Travel", image: "images/travelIcons/airfareWatchdogIcon.png", url: "https://www.airfarewatchdog.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },

{ name: "American Airlines", disc: "Travel", image: "images/travelIcons/americanAirlinesIcon.png", url: "https://www.aa.com/homePage.do", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },



{ name: "CheapOair", disc: "Travel", image: "images/travelIcons/cheapoAirIcon.png", url: "https://m.cheapoair.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },


{ name: "Cheap Tickets", disc: "Travel", image: "images/travelIcons/cheapTicketsIcon.png", url: "https://www.cheaptickets.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },

{ name: "Expedia", disc: "Travel", image: "images/travelIcons/expediaIcon.png", url: "https://www.expedia.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },

	
{ name: "Google Flights", disc: "Travel", image: "images/travelIcons/googleFlightsIcon.png", url: "https://www.google.com/flights", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },


{ name: "Kayak", disc: "Travel", image: "images/travelIcons/kayakIcon.png", url: "https://www.kayak.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },

{ name: "Momondo", disc: "Travel", image: "images/travelIcons/momondoIcon.png", url: "https://www.cheapflights.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },


{ name: "Orbitz", disc: "Travel", image: "images/travelIcons/orbitzIcon.png", url: "https://www.orbitz.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },


{ name: "Rome2Rio", disc: "Travel", image: "images/travelIcons/rome2RioIcon.png", url: "https://www.rome2rio.com", tag1: "flights", tag2: "advice", tag3: "vacation", tag4: "trips"  },

{ name: "Sandals", disc: "Travel", image: "images/travelIcons/sandalsIcon.png", url: "https://www.sandals.com", tag1: "resorts", tag2: "beach", tag3: "vacation", tag4: "trips"  },


{ name: "Travelocity", disc: "Travel", image: "images/travelIcons/travelocityIcon.png", url: "https://www.travelocity.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },

{ name: "Treebo", disc: "Travel", image: "images/travelIcons/treeboIcon.png", url: "https://www.treebo.com", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },


{ name: "TripIt", disc: "Travel", image: "images/travelIcons/rome2RioIcon.png", url: "https://www.tripit.com/web", tag1: "flights", tag2: "advice", tag3: "vacation", tag4: "trips"  },


{ name: "Trivago", disc: "Travel", image: "images/travelIcons/trivagoIcon.png", url: "https://www.trivago.com", tag1: "resorts", tag2: "rentals", tag3: "hotels", tag4: "trips"  },


{ name: "Vrbo", disc: "Travel", image: "images/travelIcons/vrboIcon.png", url: "https://www.vrbo.com", tag1: "resorts", tag2: "rentals", tag3: "hotels", tag4: "trips"  },

{ name: "Wego", disc: "Travel", image: "images/travelIcons/wegoIcon.png", url: "https://www.wego.co.in", tag1: "flights", tag2: "rentals", tag3: "hotels", tag4: "trips"  },







	]
	
	
	
	const showApps = () => {
  let output = ""
  travelApps.forEach(
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









