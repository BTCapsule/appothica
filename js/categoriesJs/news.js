const container = document.querySelector(".container")

export let newsApps = [


{ name: "The Atlantic", disc: "News", image: "images/newsIcons/theAtlanticIcon-min.png", url: 'https://www.theatlantic.com', tag1: "news", tag2: "politics", tag3: "current events", tag4: "social"  },



{ name: "Associated Press", disc: "News", image: "images/newsIcons/apNewsIcon-min.png", url: 'https://apnews.com', tag1: "news", tag2: "politics", tag3: "current events", tag4: "social"  },

{ name: "CNET", disc: "News", image: "images/newsIcons/cnetIcon-min.png", url: 'https://cnet.com', tag1: "news", tag2: "technology", tag3: "current events", tag4: "computers"  },

{ name: "Flipboard", disc: "News", image: "images/newsIcons/flipboardIcon-min.png", url: 'https://flipboard.com', tag1: "news", tag2: "politics", tag3: "current events", tag4: "social"  },

{ name: "Daily Wire", disc: "News", image: "images/newsIcons/dailyWire.png", url: 'https://www.dailywire.com', tag1: "news", tag2: "politics", tag3: "current events", tag4: "conservative"  },

 { name: "Fortune", disc: "News", image: "images/newsIcons/fortune.png", url: 'https://fortune.com', tag1: "news", tag2: "technology", tag3: "current events", tag4: "money"  },
 




{ name: "Fox News", disc: "News", image: "images/newsIcons/foxNewsIcon-min.png", url: 'https://foxnews.com', tag1: "news", tag2: "politics", tag3: "current events", tag4: "conservative"  },

{ name: "Game Informer", disc: "News", image: "images/newsIcons/gameInformerIcon-min.png", url: 'https://www.gameinformer.com', tag1: "news", tag2: "video games", tag3: "current events", tag4: "console"  },

{ name: "Google News", disc: "News", image: "images/newsIcons/googleNewsIcon-min.png", url: 'https://news.google.com/topstories', tag1: "news", tag2: "politics", tag3: "current events", tag4: "social" }, 

{ name: "Hail Mary Jane", disc: "News", image: "images/newsIcons/hailMaryJaneIcon-min.png", url: 'https://www.hailmaryjane.com', tag1: "news", tag2: "marijuana", tag3: "cannabis", tag4: "cbd thc" },

{ name: "The Hill", disc: "News", image: "images/newsIcons/theHillIcon-min.png", url: 'https://www.thehill.com', tag1: "news", tag2: "politics", tag3: "current events", tag4: "social"  },

 { name: "iPhone Hacks", disc: "News", image: "images/newsIcons/iphoneHacks.png", url: 'https://www.iphonehacks.com', tag1: "news", tag2: "technology", tag3: "smartphone", tag4: "tablets"  },
 


{ name: "Infowars", disc: "Alternative News", image: "images/newsIcons/infowars.png", url: 'https://www.infowars.com', tag1: "news", tag2: "conspiracy", tag3: "alwx jones", tag4: "illuminati" },

{ name: "Leafly", disc: "News", image: "images/newsIcons/leaflyIcon-min.png", url: 'https://www.leafly.com', tag1: "news", tag2: "marijuana", tag3: "cannabis", tag4: "cbd thc" },

{ name: "MPP", disc: "News", image: "images/newsIcons/mppIcon-min.png", url: 'https://www.mpp.org', tag1: "news", tag2: "marijuana", tag3: "cannabis", tag4: "cbd thc" },

{ name: "News360", disc: "News", image: "images/newsIcons/news360.png", url: 'https://news360.com/', tag1: "news", tag2: "entertainment", tag3: "current events", tag4: "social"  },

 { name: "The Next Web", disc: "News", image: "images/newsIcons/theNextWeb.png", url: 'https://thenextweb.com', tag1: "news", tag2: "technology", tag3: "current events", tag4: "computers"  },
 


{ name: "Perez Hilton", disc: "News", image: "images/newsIcons/perezHiltonIcon.png", url: 'https://perezhilton.com', tag1: "news", tag2: "entertainment", tag3: "current events", tag4: "celebrities"  },


 { name: "Post Millennial", disc: "News", image: "images/newsIcons/postMillennial.png", url: 'https://thepostmillennial.com', tag1: "news", tag2: "conservative", tag3: "current events", tag4: "alternative"  },

{ name: "Rolling Stone", disc: "News", image: "images/newsIcons/rollingStoneIcon-min.png", url: 'https://www.rollingstone.com', tag1: "news", tag2: "entertainment", tag3: "current events", tag4: "social"  },

 { name: "Ted Talks", disc: "News", image: "images/newsIcons/tedTalks.png", url: 'https://www.ted.com/talks', tag1: "news", tag2: "technology", tag3: "current events", tag4: "computers"  },






 


{ name: "TMZ", disc: "News", image: "images/newsIcons/tmzIcon-min.png", url: 'https://www.tmz.com', tag1: "news", tag2: "entertainment", tag3: "current events", tag4: "social"  },

 	{ name: "Weather</br>Channel", disc: "News", image: "images/newsIcons/weatherChannelIcon-min.png", url: 'https://weather.com', tag1: "news", tag2: "sunny", tag3: "snow", tag4: "temp"  },
	
	
{ name: "WireCutter", disc: "News", image: "images/newsIcons/wirecutterIcon.png", url: 'https://www.nytimes.com/wirecutter/', tag1: "news", tag2: "reviews", tag3: "products", tag4: "recommendations"  },
	
	
{ name: "WIRED", disc: "News", image: "images/newsIcons/wired.png", url: 'https://www.wired.com', tag1: "news", tag2: "technology", tag3: "current events", tag4: "computers"  },


	]
	
	
	
	const showApps = () => {
  let output = ""
  newsApps.forEach(
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









