const showApps = (apps, container) => {
  let output = ""
  apps.forEach(
    ({ name, disc, image, url }) =>
      (output += `
               <div class="card">
               <a href=${url} target="_blank" > <img class="card--avatar" src=${image} ></a>
                  	
					  <h1 class="card--title"><a href=${url} target="_blank" >${name}</a></h1>
						
						<h2 class="card--disc"><a href=${url} target="_blank">${disc}</a></h2>
						
                <a class="card--link" href=${url} target="_blank">ADD</a>
             
								</div>
							
              `)
  )
   container.innerHTML = output
}



const topContainer = document.querySelector(".topContainer")

export const topGames = [
  

/*{ name: "Candy Crush", disc: "Hyper Casual", image: "images/gameIcons/candyCrush.png", url: "https://games.appothica.com/gamesList/candyCrush.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },*/


{ name: "Fortnite", disc: "Battle Royal", image: "images/gameIcons/fortnite.png", url: "https://www.xbox.com/en-US/play/games/fortnite/BT5P2X999VH2?utm_source=8&utm_campaign=FN_Xcloud", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },



 
		{ name: "The Mergest Ki...", disc: "Hyper Casual", image: "images/gameIcons/mergestKingdom.png", url: "https://games.appothica.com/gamesList/mergestKingdom.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },

	{ name: "The Sniper Code", disc: "Hyper Casual", image: "images/gameIcons/theSniperCode.png", url: "https://games.appothica.com/gamesList/theSniperCode.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	
		
		
	{ name: "Pocket Tower", disc: "Hyper Casual", image: "images/gameIcons/pocketTower.png", url: "https://games.appothica.com/gamesList/pocketTower.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
		
		
		
	
			
	
	]


showApps(topGames, topContainer)




////////// ACTION ////////////

const actionContainer = document.querySelector(".actionContainer")

export const actionGames= [



{ name: "Battlefield Elite", disc: "First-Person Shooter", image: "images/gameIcons/battlefieldElite.png", url: "https://games.appothica.com/gamesList/battlefieldElite.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

{ name: "Shoot and Run", disc: "First-Person Shooter", image: "images/gameIcons/shootAndRun.png", url: "https://games.appothica.com/gamesList/shootAndRun.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

{ name: "Kingdom Defense", disc: "Battle Royale", image: "images/gameIcons/kingdomDefense.png", url: "https://games.appothica.com/gamesList/kingdomDefense.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	


]


showApps(actionGames, actionContainer)









/////////////// ADVENTURE //////////////





const adventureContainer = document.querySelector(".adventureContainer")

export const adventureGames= [


	
		
		
			
			
	{ name: "Dark World", disc: "Platformer", image: "images/gameIcons/darkWorld.png", url: "https://games.appothica.com/gamesList/darkWorld.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
	{ name: "Big Neon Tower", disc: "Platformer", image: "images/gameIcons/bigNeonTower.png", url: "https://games.appothica.com/gamesList/bigNeonTower.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
		
		
	{ name: "LinQuest", disc: "Platformer", image: "images/gameIcons/linquest.png", url: "https://games.appothica.com/gamesList/linquest.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	

	
	
	
	
	

]


showApps(adventureGames, adventureContainer)














///////////// CARDS /////////////



const cardsContainer = document.querySelector(".cardsContainer")

export const cardsGames= [


		

{ name: "Solitaire Classic", disc: "Cards", image: "images/gameIcons/solitaireClassic.png", url: "https://games.appothica.com/gamesList/solitaireClassic.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
		
			{ name: "Mahjong Africa", disc: "Cards", image: "images/gameIcons/mahjongAfrica.png", url: "https://games.appothica.com/gamesList/mahjongAfrica.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

	
			{ name: "Bridge", disc: "Cards", image: "images/gameIcons/bridge.png", url: "https://games.appothica.com/gamesList/bridge.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
	
/*	{ name: "Subway Surfers", disc: "Hyper Casual", image: "images/gameIcons/subwaySurfers.png", url: "https://games.appothica.com/gamesList/subwaySurfers.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
	
	{ name: "Temple Run", disc: "Hyper Casual", image: "images/gameIcons/templeRun.png", url: "https://games.appothica.com/gamesList/templeRun.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },*/
	
	


]

showApps(cardsGames, cardsContainer)












///////////// DRESS ///////////////


const dressContainer = document.querySelector(".dressContainer")

export const dressGames= [



  { name: "Alyssa Face Art", disc: "Dress Up", image: "images/gameIcons/alyssaFaceArt.png", url: "https://games.appothica.com/gamesList/alyssaFaceArt.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },




	
		{ name: "My Pet Vet Hos...", disc: "Dress Up", image: "images/gameIcons/myPetVetHospital.png", url: "https://games.appothica.com/gamesList/myPetVetHospital.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

		
	{ name: "Funny Daycare", disc: "Dress Up", image: "images/gameIcons/funnyDaycare.png", url: "https://games.appothica.com/gamesList/funnyDaycare.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	

	
	



	


]


showApps(dressGames, dressContainer)









////////// HYPER CASUAL //////////////




const hyperContainer = document.querySelector(".hyperContainer")

export const hyperGames= [




   { name: "Mad Mad Unicorn", disc: "Hyper Casual", image: "images/gameIcons/madMadUnicorn.png", url: "https://games.appothica.com/gamesList/madMadUnicorn.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
	
	{ name: "Neon Catapult", disc: "Hyper Casual", image: "images/gameIcons/neonCatapult.png", url: "https://games.appothica.com/gamesList/neonCatapult.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


	{ name: "The Mergest Ki...", disc: "Hyper Casual", image: "images/gameIcons/mergestKingdom.png", url: "https://games.appothica.com/gamesList/mergestKingdom.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
			
			
			
	/*{ name: "itch.io", disc: "Browser Games", image: "images/gameIcons/itch.png", url: "https://itch.io", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		

  { name: "GamePix", disc: "Browser Games", image: "images/gameIcons/gamePix.png", url: "https://www.gamepix.com", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	 { name: "Cool Math Games", disc: "Browser Games", image: "images/gameIcons/coolMathGames.png", url: "https://www.coolmathgames.com", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	 
	   { name: "PacMan", disc: "Hyper Casual", image: "images/gameIcons/pacMan.png", url: "https://pacman.live", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		 

	*/


]

showApps(hyperGames, hyperContainer)









/////////// PUZZLE /////////////



const puzzleContainer = document.querySelector(".puzzleContainer")

export const puzzleGames= [


 
	
	


 
	{ name: "Cut The Rope", disc: "Puzzle", image: "images/gameIcons/cutTheRope.png", url: "https://games.appothica.com/gamesList/cutTheRope.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	{ name: "Orbits", disc: "Puzzle", image: "images/gameIcons/orbits.png", url: "https://games.appothica.com/gamesList/orbits.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
		{ name: "Move The Pin", disc: "Hyper Casual", image: "images/gameIcons/moveThePin.png", url: "https://games.appothica.com/gamesList/moveThePin.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		

]


showApps(puzzleGames, puzzleContainer)





////////// RACING /////////////


const racingContainer = document.querySelector(".racingContainer")

export const racingGames= [


	{ name: "Delivery Racer", disc: "Racing", image: "images/gameIcons/deliveryRacer.png", url: "https://games.appothica.com/gamesList/deliveryRacer.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	
	{ name: "Traffic Speed Racer", disc: "Racing", image: "images/gameIcons/trafficSpeedRacer.png", url: "https://games.appothica.com/gamesList/trafficSpeedRacer.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
				
		
		
	{ name: "Biggy Race", disc: "Racing", image: "images/gameIcons/biggyRace.png", url: "https://games.appothica.com/gamesList/biggyRace.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	


]


showApps(racingGames, racingContainer)










////////// SPORTS ////////////

const sportsContainer = document.querySelector(".sportsContainer")

export const sportsGames= [


		{ name: "Baseball Kid Pi...", disc: "Sports", image: "images/gameIcons/baseballKidPitcher.png", url: "https://games.appothica.com/gamesList/baseballKidPitcher.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	{ name: "Go Bowling 2", disc: "Sports", image: "images/gameIcons/goBowling2.png", url: "https://games.appothica.com/gamesList/goBowling2.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
				
		
	{ name: "Just Golf", disc: "Sports", image: "images/gameIcons/justGolf.png", url: "https://games.appothica.com/gamesList/justGolf.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	


]


showApps(sportsGames, sportsContainer)












const navBar = document.querySelector(".navBar")




const navButtons = [
  { name: "Apps ", image: "images/appsWhite.png", url: "index.html" },
	
 
	{ name: "Games", image: "images/joystickGreen.png", url: '#Games' },
	
 
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









