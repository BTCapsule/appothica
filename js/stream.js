const container = document.querySelector(".container")

export const streamApps = [
 


  { name: "Roku Channel", disc: "Live TV", image: "images/streamIcons/roku.png", url: "https://therokuchannel.roku.com", tag1: "live tv", tag2: "television", tag3: "stream", tag4: "watch"},



  { name: "XUMO", disc: "Live TV", image: "images/streamIcons/xumoIcon.png", url: "https://www.xumo.tv/discover", tag1: "live tv", tag2: "television", tag3: "stream", tag4: "watch"},

	
	 
	
	
	
	  { name: "Plex", disc: "Live TV", image: "images/streamIcons/plexIcon.png", url: "https://www.dpbolvw.net/click-100451708-13279074?url=https%3A%2F%2Fapp.plex.tv%2Fdesktop%2F", tag1: "live tv", tag2: "television", tag3: "stream", tag4: "watch"},
	
 
 { name: "TikTok", disc: "Social Media", image: "images/streamIcons/tikTokIcon.png", url: "https://www.tiktok.com", tag1: "videos", tag2: "stream", tag3: "watch", tag4: "funny"},
 
  { name: "Banned.video", disc: "Streaming", image: "images/streamIcons/banned.png", url: 'https://banned.video', tag1: "alternative", tag2: "news", tag3: "conspiracy", tag4: "alex jones" },
 
 
 
  { name: "Twitch", disc: "Streaming", image: "images/streamIcons/twitchIcon.png", url: 'https://m.twitch.tv/?desktop-redirect=true', tag1: "games", tag2: "entertainment", tag3: "videos", tag4: "stream" },
 
	 { name: "Comedy Central", disc: "Streaming", image: "images/streamIcons/comedyCentralIcon.png", url: 'https://www.cc.com', tag1: "watch", tag2: "movies", tag3: "videos", tag4: "stream" },
	
	

	
{ name: " Shudder", disc: "Streaming", image: "images/streamIcons/shudder.png", url: "https://www.shudder.com", tag1: "live tv", tag2: "movies", tag3: "stream", tag4: "watch"  },


{ name: "Vimeo", disc: "Streaming", image: "images/streamIcons/vimeoIcon.png", url: "https://vimeo.com/join", tag1: "videos", tag2: "stream", tag3: "watch", tag4: "indie"},



	
	 
 { name: "Nickelodeon", disc: "Streaming", image: "images/streamIcons/nickIcon.png", url: 'https://www.nick.com', tag1: "kids", tag2: "watch", tag3: "shows", tag4: "stream"},
 
 
  { name: "PBS", disc: "Stream", image: "images/streamIcons/pbsIcon.png", url: "https://www.pbs.org", tag1: "live tv", tag2: "documentaries", tag3: "stream", tag4: "watch"},
 
 
  { name: "Nick Jr", disc: "Streaming", image: "images/streamIcons/nickJrIcon.png", url: 'http://www.nickjr.com', tag1: "kids", tag2: "watch", tag3: "shows", tag4: "stream"},
 
	
	 	{ name: "ESPN+", disc: "Live Sports", image: "images/streamIcons/espnPlus.png", url: "https://plus.espn.com/?om-navmethod=top%20nav", tag1: "live tv", tag2: "sports", tag3: "stream", tag4: "watch"  },
		
		
		
		 { name: "VICE", disc: "Streaming", image: "images/streamIcons/viceIcon.png", url: 'https://www.vice.com/en', tag1: "news", tag2: "documentaries", tag3: "videos", tag4: "stream" },
	
	
{ name: "CuriosityStream", disc: "Documentaries", image: "images/streamIcons/curiosityStream.png", url: "https://curiositystream.com", tag1: "documentaries", tag2: "movies", tag3: "stream", tag4: "watch" },







  

 { name: "BET", disc: "Streaming", image: "images/streamIcons/bet.png", url: "https://www.bet.com", tag1: "live tv", tag2: "movies", tag3: "stream", tag4: "watch" },

 { name: "Ted Talks", disc: "Reference", image: "images/streamIcons/tedTalksIcon.png", url: "https://www.ted.com/talks", tag1: "videos", tag2: "stream", tag3: "watch", tag4: "learn"},
	
	  { name: "DAZN", disc: "Live Sports", image: "images/streamIcons/dazn.png", url: "https://www.dazn.com", tag1: "live sports", tag2: "movies", tag3: "stream", tag4: "watch" },
	
	 { name: "FITE", disc: "Live Sports", image: "images/streamIcons/fiteIcon.png", url: "https://www.anrdoezrs.net/click-100451708-14564819", tag1: "live sports", tag2: "movies", tag3: "stream", tag4: "watch" },
	
	
	
	
	
	
	]
	
	
	
	const showApps = () => {
  let output = ""
  streamApps.forEach(
    ({ name, disc, image, url }) =>
      (output += `
              <div class="card">
               <a href=${url} > <img class="card--avatar" src=${image} ></a>
                  	
					  <h1 class="card--title"><a href=${url} >${name}</a></h1>
						
							<h2 class="card--disc"><a href=${url} >${disc}</a></h2>
						
                <a class="card--link" href="${url}">ADD</a>
             
								</div>
             
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
	
 
	{ name: "Stream", image: "images/playGreen.png", url: '#Stream' },
	

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









