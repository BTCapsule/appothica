const container = document.querySelector(".container")

export let musicApps = [




  { name: "Anghami", disc: "Music Streaming", image: "images/musicIcons/anghami-min.png", url: 'https://www.anghami.com', tag1: "music", tag2: "radio", tag3: "stream", tag4: "playlist"  },
	

 { name: "Audiomack", disc: "Music Streaming", image: "images/musicIcons/audiomack-min.png", url: 'https://audiomack.com', tag1: "music", tag2: "radio", tag3: "stream", tag4: "playlist"  },
 
 
  { name: "Audiomass", disc: "Music Streaming", image: "images/musicIcons/audioMass.png", url: 'https://audiomass.co', tag1: "vocal", tag2: "recorder", tag3: "voice", tag4: "effects"  },
 
 { name: "BandLab", disc: "Music Sharing", image: "images/musicIcons/bandLabIcon-min.png", url: 'https://www.bandlab.com', tag1: "music", tag2: "share", tag3: "community", tag4: "instruments"  },
 
 
 
	{ name: "iHeartRADIO", disc: "Music Streaming", image: "images/musicIcons/iHeart-min.png", url: 'https://www.iheart.com', tag1: "music", tag2: "radio", tag3: "stream", tag4: "playlist"  },
	
	
	 { name: "iMusician", disc: "Music Services", image: "images/musicIcons/iMusicianIcon-min.png", url: 'https://imusician.pro/en/', tag1: "music", tag2: "track recorder", tag3: "daw", tag4: "instruments"  },
	
	
	{ name: "LiveXLive", disc: "Music Streaming", image: "images/musicIcons/liveX-min.png", url: 'https://www.livexlive.com', tag1: "music", tag2: "radio", tag3: "stream", tag4: "playlist"  },
 
	
	
	 { name: "Musician Friend", disc: "Music", image: "images/shoppingIcons/musicianFriendIcon.png", url: "https://www.musiciansfriend.com", tag1: "music", tag2: "instruments", tag3: "guitar", tag4: "shop"  },
	
	
	
 	
		{ name: "MusicKit", disc: "Music Streaming", image: "images/musicIcons/musicKit-min.png", url: 'https://musickit.jull.dev/tuner', tag1: "music", tag2: "tuner", tag3: "metrodome", tag4: "guitar"  },
		
			{ name: "Note Flight", disc: "Music Sheets", image: "images/musicIcons/noteFlightIcon.png", url: 'https://www.noteflight.com', tag1: "music", tag2: "piano", tag3: "sheet music", tag4: "guitar"  },
			
			{ name: "Rave DJ", disc: "Music", image: "images/musicIcons/rave.png", url: "https://rave.dj", tag1: "edit", tag2: "mashup", tag3: "songs", tag4: "dj"},
		
			
		{ name: "1Tuner", disc: "Music Streaming", image: "images/musicIcons/oneTuner-min.png", url: 'https://www.1tuner.com', tag1: "music", tag2: "radio", tag3: "stream", tag4: "playlist"  },
		
		
		{ name: "Soundslice", disc: "Music Sheets", image: "images/musicIcons/soundslice-min.png", url: 'https://www.soundslice.com', tag1: "music", tag2: "piano", tag3: "sheet music", tag4: "guitar"  },
		
		 { name: "Soundtrap", disc: "Music Sharing", image: "images/musicIcons/soundtrapIcon-min.png", url: 'https://www.soundtrap.com', tag1: "music", tag2: "share", tag3: "community", tag4: "instruments"  },
		 
		
		
		{ name: "Tidal", disc: "Music Streaming", image: "images/musicIcons/tidal-min.png", url: 'https://tidal.com', tag1: "music", tag2: "radio", tag3: "stream", tag4: "playlist"  },
		
		{ name: "Tuneform", disc: "Music Visualizer", image: "images/musicIcons/tuneformIcon-min.png", url: 'https://www.soundtrap.com', tag1: "music visualizer", tag2: "track recorder", tag3: "trippy", tag4: "frequency"  },
		
		
		{ name: "Uberduck", disc: "Voice Synthesizer", image: "images/musicIcons/uberduck.png", url: 'https://uberduck.ai/', tag1: "text", tag2: "speech", tag3: "vocal", tag4: "augmentation"  },
		
		
		{ name: "Ultimate Guitar", disc: "Guitar Tabs", image: "images/musicIcons/ultimateGuitar-min.png", url: 'https://www.ultimate-guitar.com', tag1: "tabs", tag2: "chords", tag3: "bass", tag4: "play"  },
		
		
		{ name: "Virtual Piano", disc: "Music Streaming", image: "images/musicIcons/virtualPiano-min.png", url: 'https://virtualpiano.net', tag1: "music", tag2: "piano", tag3: "sheet music", tag4: "play"  },
	
 	{ name: "Yhimsical", disc: "Music Streaming", image: "images/musicIcons/yhimsical-min.png", url: 'https://yhimsical.com', tag1: "music", tag2: "radio", tag3: "stream", tag4: "playlist"  },
	

	
	
	
	
	
	
	
	
	]
	
	
	
	const showApps = () => {
  let output = ""
  musicApps.forEach(
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









