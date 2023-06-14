const container = document.querySelector(".container")

export let sportsApps = [


 { name: "Baseball24", disc: "Live Scores", image: "images/sportIcons/baseball24Icon.png", url: "https://www.baseball24.com", tag1: "live scores", tag2: "sports", tag3: "teams", tag4: "mlb" },
 
 { name: "Basketball24", disc: "Live Scores", image: "images/sportIcons/basketball24Icon.png", url: "https://www.basketball24.com", tag1: "live scores", tag2: "sports", tag3: "teams", tag4: "nba" },
 
  { name: "DAZN", disc: "Live Sports", image: "images/streamIcons/dazn.png", url: "https://www.dazn.com", tag1: "live sports", tag2: "movies", tag3: "stream", tag4: "watch" },
	
	{ name: "ESPN+", disc: "Live Sports", image: "images/streamIcons/espnPlus.png", url: "https://plus.espn.com/?om-navmethod=top%20nav", tag1: "live tv", tag2: "sports", tag3: "stream", tag4: "watch"  },
	
	
	
 
 { name: "eSports", disc: "Gaming", image: "images/sportIcons/eSportsIcon.png", url: "https://www.esports.com", tag1: "gaming", tag2: "electronic", tag3: "video games", tag4: "news" },
 
  { name: "FITE", disc: "Live Sports", image: "images/streamIcons/fiteIcon.png", url: "https://www.anrdoezrs.net/click-100451708-14564819", tag1: "live sports", tag2: "movies", tag3: "stream", tag4: "watch" },
	
	
 
 
 { name: "Formula 1", disc: "Racing", image: "images/sportIcons/f1Icon.png", url: "https://www.formula1.com/en/vote.html", tag1: "racing", tag2: "sports", tag3: "cars", tag4: "One world" },
 
 
 
 { name: "Forza", disc: "Live Scores", image: "images/sportIcons/forzaIcon.png", url: "https://www.flashscore.com", tag1: "live scores", tag2: "sports", tag3: "teams", tag4: "soccer" },
 
  { name: "FotMob", disc: "Soccer", image: "images/sportIcons/fotmobIcon.png", url: "https://www.fotmob.com", tag1: "live scores", tag2: "sports", tag3: "teams", tag4: "soccer" },
	
	
		{ name: "FOX Sports", disc: "Live Sports", image: "images/sportIcons/foxSportsIcon.png", url: "https://www.foxsports.com", tag1: "live tv", tag2: "sports", tag3: "stream", tag4: "watch"  },
	
	
	 { name: "Goal", disc: "Live Scores", image: "images/sportIcons/goalIcon.png", url: "https://www.goal.com/en-us", tag1: "news", tag2: "sports", tag3: "teams", tag4: "soccer" },
	 
	 
	 
	 
	  { name: "Live Score", disc: "Live Scores", image: "images/sportIcons/liveScoreIcon.png", url: "https://www.livescore.com/en/", tag1: "live scores", tag2: "sports", tag3: "teams", tag4: "news" },
		
		{ name: "Nascar", disc: "Racing", image: "images/sportIcons/nascarIcon.png", url: "https://m.nascar.com", tag1: "racing", tag2: "sports", tag3: "cars", tag4: "daytona" },
		
		 
		{ name: "NBA", disc: "Basketball", image: "images/sportIcons/nba.png", url: "https://www.nba.com", tag1: "live scores", tag2: "sports", tag3: "teams", tag4: "nba" },
		
		
		
		
		 { name: "NCAA", disc: "Sports", image: "images/sportIcons/ncaaIcon.png", url: "https://www.ncaa.com", tag1: "college", tag2: "sports", tag3: "teams", tag4: "news" },
	
	

	{ name: "RealTime Fantasy", disc: "Fantasy Sports", image: "images/sportIcons/rtSportsIcon.png", url: "https://www.rtsports.com", tag1: "fantasy", tag2: "sports", tag3: "teams", tag4: "play" },
	
{ name: "Yahoo Fantasy", disc: "Fantasy Sports", image: "images/sportIcons/yahooFantasyIcon.png", url: "https://www.rtsports.com", tag1: "fantasy", tag2: "sports", tag3: "teams", tag4: "play" },
		 
	
]	
	
	const showApps = () => {
  let output = ""
  sportsApps.forEach(
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









