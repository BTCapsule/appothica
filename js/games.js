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






////////// ACTION ////////////

const actionContainer = document.querySelector(".actionContainer")

export const actionGames= [



{ name: "Fortnite", disc: "Battle Royal", image: "images/gameIcons/fortnite.png", url: "https://www.xbox.com/en-US/play/games/fortnite/BT5P2X999VH2?utm_source=8&utm_campaign=FN_Xcloud", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },



{ name: "Subway Clash 2", disc: "Battle Royal", image: "images/gameIcons/subwayClash2.png", url: "https://games.appothica.com/gamesList/subwayClash2.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },


{ name: "Subway Clash R...", disc: "Battle Royal", image: "images/gameIcons/subwayClashRemastered.png", url: "https://games.appothica.com/gamesList/subwayClashRemastered.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },


{ name: "Ninja Clash Heroes", disc: "Battle Royal", image: "images/gameIcons/ninjaClashHeroes.png", url: "https://games.appothica.com/gamesList/ninjaClashHeroes.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },


{ name: "The Sniper Code", disc: "Hyper Casual", image: "images/gameIcons/theSniperCode.png", url: "https://games.appothica.com/gamesList/theSniperCode.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
{ name: "Mini Shooters", disc: "Hyper Casual", image: "images/gameIcons/miniShooters.png", url: "https://games.appothica.com/gamesList/miniShooters.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	

{ name: "Alpha Guns", disc: "Action", image: "images/gameIcons/alphaGuns.png", url: "https://games.appothica.com/gamesList/alphaGuns.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


{ name: "Battlefield Elite", disc: "First-Person Shooter", image: "images/gameIcons/battlefieldElite.png", url: "https://games.appothica.com/gamesList/battlefieldElite.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

{ name: "Shoot and Run", disc: "First-Person Shooter", image: "images/gameIcons/shootAndRun.png", url: "https://games.appothica.com/gamesList/shootAndRun.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

	{ name: "Kingdom Defense", disc: "Battle Royale", image: "images/gameIcons/kingdomDefense.png", url: "https://games.appothica.com/gamesList/kingdomDefense.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	{ name: "Sniper Clash 3D", disc: "Battle Royal", image: "images/gameIcons/sniperClash.png", url: "https://games.appothica.com/gamesList/sniperClash.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },
	
	
		{ name: "Airport Clash 3D", disc: "Battle Royal", image: "images/gameIcons/airportClash.png", url: "https://games.appothica.com/gamesList/airportClash.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },
	
	
	{ name: "Winter Clash 3D", disc: "Battle Royal", image: "images/gameIcons/winterClash.png", url: "https://games.appothica.com/gamesList/winterClash.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },
	
		{ name: "Rocket Clash 3D", disc: "Battle Royal", image: "images/gameIcons/rocketClash.png", url: "https://games.appothica.com/gamesList/rocketClash.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },
		
			{ name: "Farm Clash 3D", disc: "Battle Royal", image: "images/gameIcons/farmClash.png", url: "https://games.appothica.com/gamesList/farmClash.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },


{ name: "Warfare Area", disc: "First-Person Shooter", image: "images/gameIcons/warfareArea.png", url: "https://games.appothica.com/gamesList/warfareArea.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

	{ name: "Surviv.io", disc: "Battle Royale", image: "images/gameIcons/survivIcon.png", url: "https://surviv.io", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
 
	
	
		{ name: "Merge Cannon", disc: "Action", image: "images/gameIcons/mergeCannon.png", url: "https://games.appothica.com/gamesList/mergeCannon.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	


]

if (actionContainer) {
showApps(actionGames, actionContainer)
}








/////////////// ADVENTURE //////////////





const adventureContainer = document.querySelector(".adventureContainer")

export const adventureGames= [


	
		
		
			
			
		{ name: "Platfoban", disc: "Platformer", image: "images/gameIcons/platfoban.png", url: "https://games.appothica.com/gamesList/platfoban.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
			
	

	
	
		{ name: "Ovo", disc: "Platformer", image: "images/gameIcons/ovo.png", url: "https://games.appothica.com/gamesList/ovo.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	
		{ name: "Daddy Rabbit", disc: "Platformer", image: "images/gameIcons/daddyRabbit.png", url: "https://games.appothica.com/gamesList/daddyRabbit.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
				
				
		{ name: "Vex6", disc: "Platformer", image: "images/gameIcons/vex6.png", url: "https://games.appothica.com/gamesList/vex6.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
		
	
	{ name: "Big Neon Tower", disc: "Platformer", image: "images/gameIcons/bigNeonTower.png", url: "https://games.appothica.com/gamesList/bigNeonTower.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	

		
			{ name: "LinQuest", disc: "Platformer", image: "images/gameIcons/linquest.png", url: "https://games.appothica.com/gamesList/linquest.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
		
			{ name: "Dark Lands", disc: "Action", image: "images/gameIcons/darkLands.png", url: "https://games.appothica.com/gamesList/darkLands.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	
		
	{ name: "Fireboy & Wat...", disc: "Platformer", image: "images/gameIcons/fireboyWatergirl5.png", url: "https://games.appothica.com/gamesList/fireboyWatergirl5.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	
	
	
	
		{ name: "The Climbest", disc: "Adventure", image: "images/gameIcons/theClimbest.png", url: "https://games.appothica.com/gamesList/theClimbest.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		
		
	{ name: "Dark World", disc: "Platformer", image: "images/gameIcons/darkWorld.png", url: "https://games.appothica.com/gamesList/darkWorld.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
		
	
	{ name: "Badland", disc: "Adventure", image: "images/gameIcons/badland.png", url: "https://games.appothica.com/gamesList/badland.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

]

if (adventureContainer){
showApps(adventureGames, adventureContainer)

}












///////////// CARDS /////////////



const cardsContainer = document.querySelector(".cardsContainer")

export const cardsGames= [


		


	{ name: "4 Colors Classic", disc: "Cards", image: "images/gameIcons/fourColors.png", url: "https://games.appothica.com/gamesList/fourColors.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

	
{ name: "Solitaire Tripeaks", disc: "Cards", image: "images/gameIcons/solitaireTripeaks.png", url: "https://games.appothica.com/gamesList/solitaireTripeaks.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

		{ name: "Animals Memory", disc: "Cards", image: "images/gameIcons/animalsMemory.png", url: "https://games.appothica.com/gamesList/animalsMemory.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
		{ name: "Mafia Poker", disc: "Cards", image: "images/gameIcons/mafiaPoker.png", url: "https://games.appothica.com/gamesList/mafiaPoker.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
	{ name: "Solitaire Tripeaks 2", disc: "Cards", image: "images/gameIcons/solitaireTripeaks2.png", url: "https://games.appothica.com/gamesList/solitaireTripeaks2.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	

	{ name: "Fruity Veggie M..", disc: "Cards", image: "images/gameIcons/fruityVeggieMemory.png", url: "https://games.appothica.com/gamesList/fruityVeggieMemory.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
		{ name: "Solitaire Classic", disc: "Cards", image: "images/gameIcons/solitaireClassic.png", url: "https://games.appothica.com/gamesList/solitaireClassic.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
		
			{ name: "Mahjong Africa", disc: "Cards", image: "images/gameIcons/mahjongAfrica.png", url: "https://games.appothica.com/gamesList/mahjongAfrica.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	

	
		{ name: "Bridge", disc: "Cards", image: "images/gameIcons/bridge.png", url: "https://games.appothica.com/gamesList/bridge.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
	{ name: "Spider Solitaire", disc: "Cards", image: "images/gameIcons/spiderSolitaire.png", url: "https://games.appothica.com/gamesList/spiderSolitaire.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
		{ name: "Cards Connect", disc: "Cards", image: "images/gameIcons/cardsConnect.png", url: "https://games.appothica.com/gamesList/cardsConnect.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	
	
	
	
/*	{ name: "Subway Surfers", disc: "Hyper Casual", image: "images/gameIcons/subwaySurfers.png", url: "https://games.appothica.com/gamesList/subwaySurfers.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
	
	{ name: "Temple Run", disc: "Hyper Casual", image: "images/gameIcons/templeRun.png", url: "https://games.appothica.com/gamesList/templeRun.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },*/
	
	


]
if (cardsContainer){
showApps(cardsGames, cardsContainer)

}










///////////// DRESS ///////////////


const dressContainer = document.querySelector(".dressContainer")

export const dressGames= [



  { name: "Alyssa Face Art", disc: "Dress Up", image: "images/gameIcons/alyssaFaceArt.png", url: "https://games.appothica.com/gamesList/alyssaFaceArt.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	{ name: "Day At School", disc: "Dress Up", image: "images/gameIcons/dayAtSchool.png", url: "https://games.appothica.com/gamesList/dayAtSchool.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
		{ name: "Princess Pet Castle", disc: "Dress Up", image: "images/gameIcons/princessPetCastle.png", url: "https://games.appothica.com/gamesList/princessPetCastle.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

{ name: "My Autumn Dress", disc: "Dress Up", image: "images/gameIcons/myAutumn.png", url: "https://games.appothica.com/gamesList/myAutumn.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


{ name: "Love Tester Deluxe", disc: "Fun", image: "images/gameIcons/loveTesterDeluxe.png", url: "https://games.appothica.com/gamesList/loveTesterDeluxe.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

{ name: "Makeover Run", disc: "Dress Up", image: "images/gameIcons/makeoverRun.png", url: "https://games.appothica.com/gamesList/makeoverRun.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

{ name: "BFFs Night Out", disc: "Dress Up", image: "images/gameIcons/bffsNightOut.png", url: "https://games.appothica.com/gamesList/bffsNightOut.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


{ name: "Funny Daycare", disc: "Dress Up", image: "images/gameIcons/funnyDaycare.png", url: "https://games.appothica.com/gamesList/funnyDaycare.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


{ name: "Run Rich", disc: "Dress Up", image: "images/gameIcons/runRich.png", url: "https://games.appothica.com/gamesList/runRich.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


{ name: "Royal Day Out", disc: "Dress Up", image: "images/gameIcons/royalDayOut.png", url: "https://games.appothica.com/gamesList/royalDayOut.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

	{ name: "My Pet Vet Hos...", disc: "Dress Up", image: "images/gameIcons/myPetVetHospital.png", url: "https://games.appothica.com/gamesList/myPetVetHospital.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

	{ name: "My Little Pet S...", disc: "Dress Up", image: "images/gameIcons/myLittlePet.png", url: "https://games.appothica.com/gamesList/myLittlePet.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	

	

	
	



	


]

if (dressContainer){
showApps(dressGames, dressContainer)


}






////////// HYPER CASUAL //////////////




const hyperContainer = document.querySelector(".hyperContainer")

export const hyperGames= [



	{ name: "Pocket Tower", disc: "Hyper Casual", image: "images/gameIcons/pocketTower.png", url: "https://games.appothica.com/gamesList/pocketTower.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
	
	
		{ name: "Family Barn", disc: "Hyper Casual", image: "images/gameIcons/familyBarn.png", url: "https://games.appothica.com/gamesList/familyBarn.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
		
{ name: "Bon Voyage", disc: "Hyper Casual", image: "images/gameIcons/bonVoyage.png", url: "https://games.appothica.com/gamesList/bonVoyage.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		

	{ name: "Mad Mad Unicorn", disc: "Hyper Casual", image: "images/gameIcons/madMadUnicorn.png", url: "https://games.appothica.com/gamesList/madMadUnicorn.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
	
		{ name: "The Mergest Ki...", disc: "Hyper Casual", image: "images/gameIcons/mergestKingdom.png", url: "https://games.appothica.com/gamesList/mergestKingdom.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "endless" },
		
		{ name: "Icy Purple Hea...", disc: "Hyper Casual", image: "images/gameIcons/icyPurpleHead3.png", url: "https://games.appothica.com/gamesList/icyPurpleHead3.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	
{ name: "Neon Catapult", disc: "Hyper Casual", image: "images/gameIcons/neonCatapult.png", url: "https://games.appothica.com/gamesList/neonCatapult.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		{ name: "Skyrace", disc: "Hyper Casual", image: "images/gameIcons/skyrace.png", url: "https://games.appothica.com/gamesList/skyrace.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	{ name: "Sling to the Bas...", disc: "Hyper Casual", image: "images/gameIcons/slingBasket.png", url: "https://games.appothica.com/gamesList/slingBasket.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
		

		
		  
{ name: "PacMan", disc: "Hyper Casual", image: "images/gameIcons/pacMan.png", url: "https://pacman.live", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		

   
{ name: "Tower Game", disc: "Hyper Casual", image: "images/gameIcons/towerGame.png", url: "https://www.towergame.app", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	
{ name: "Slither.io", disc: "Hyper Casual", image: "images/gameIcons/slither.png", url: "https://www.crazygames.com/game/slitherio", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


	{ name: "Flappy Bird", disc: "Hyper Casual", image: "images/gameIcons/flappyBird.png", url: "https://flappybird.io", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	
	{ name: "Fruit Blaster", disc: "Hyper Casual", image: "images/gameIcons/fruitBlaster.png", url: "https://games.appothica.com/gamesList/fruitBlaster.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		
		 
	{ name: "Whack Your Boss", disc: "Browser Games", image: "images/gameIcons/whackYourBossIcon.png", url: "https://www.crazygames.com/game/whack-your-boss", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
			
	
	{ name: "Farting Simon", disc: "Funny Games", image: "images/gameIcons/fartingSimon.png", url: "https://www.apewebapps.com/farting-simon/", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },		
			
			
			
			
		


]


if (hyperContainer) {
showApps(hyperGames, hyperContainer)

}







/////////// PUZZLE /////////////



const puzzleContainer = document.querySelector(".puzzleContainer")

export const puzzleGames= [


 
	{ name: "1010 Gems Deluxe", disc: "Puzzle", image: "images/gameIcons/gemsDeluxe.png", url: "https://games.appothica.com/gamesList/gemsDeluxe.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
		{ name: "Jigsaw Puzzle", disc: "Puzzle", image: "images/gameIcons/jigsawPuzzle.png", url: "https://games.appothica.com/gamesList/jigsawPuzzle.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	{ name: "Cut The Rope", disc: "Puzzle", image: "images/gameIcons/cutTheRope.png", url: "https://games.appothica.com/gamesList/cutTheRope.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
		{ name: "Orbits", disc: "Puzzle", image: "images/gameIcons/orbits.png", url: "https://games.appothica.com/gamesList/orbits.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	{ name: "Tricky Tiles", disc: "Puzzle", image: "images/gameIcons/trickyTiles.png", url: "https://games.appothica.com/gamesList/trickyTiles.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		
	{ name: "Fireblob Winter", disc: "Platformer", image: "images/gameIcons/fireblobWinter.png", url: "https://games.appothica.com/gamesList/fireblobWinter.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
		
		
		{ name: "2048", disc: "Puzzle", image: "images/gameIcons/classic2048.png", url: "https://games.appothica.com/gamesList/classic2048.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		
		{ name: "Laser Ray", disc: "Puzzle", image: "images/gameIcons/laserRay.png", url: "https://games.appothica.com/gamesList/laserRay.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		{ name: "Move The Pin", disc: "Hyper Casual", image: "images/gameIcons/moveThePin.png", url: "https://games.appothica.com/gamesList/moveThePin.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

  { name: "Online Coloring", disc: "Games", image: "images/gameIcons/onlineColoring.png", url: "https://www.online-coloring.com", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

	
		{ name: "Wow'en Wilson", disc: "Guess", image: "images/gameIcons/wowenWilson.png", url: "http://wowenwilsonquiz.com", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

	
	


]

if (puzzleContainer) {

showApps(puzzleGames, puzzleContainer)

}



////////// RACING /////////////


const racingContainer = document.querySelector(".racingContainer")

export const racingGames= [



	{ name: "Moto X3M Spooky", disc: "Racing", image: "images/gameIcons/motoX3MSpooky.png", url: "https://games.appothica.com/gamesList/motoX3M.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

	
	{ name: "Road Crash", disc: "Racing", image: "images/gameIcons/roadCrash.png", url: "https://games.appothica.com/gamesList/roadCrash.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	

{ name: "Big Wheels M...", disc: "Racing", image: "images/gameIcons/bigWheels.png", url: "https://games.appothica.com/gamesList/bigWheels.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

		{ name: "Muscle Race 3D", disc: "Racing", image: "images/gameIcons/muscleRace.png", url: "https://games.appothica.com/gamesList/muscleRace.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		



	{ name: "Galactic Traffic", disc: "Racing", image: "images/gameIcons/galacticTraffic.png", url: "https://games.appothica.com/gamesList/galacticTraffic.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	{ name: "Saw Machine.io", disc: "Racing", image: "images/gameIcons/sawMachine.png", url: "https://games.appothica.com/gamesList/sawMachine.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	{ name: "Ladder Race", disc: "Racing", image: "images/gameIcons/ladderRace.png", url: "https://games.appothica.com/gamesList/ladderRace.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },	
	

		{ name: "Delivery Racer", disc: "Racing", image: "images/gameIcons/deliveryRacer.png", url: "https://games.appothica.com/gamesList/deliveryRacer.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	
	{ name: "Traffic Speed Racer", disc: "Racing", image: "images/gameIcons/trafficSpeedRacer.png", url: "https://games.appothica.com/gamesList/trafficSpeedRacer.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
				
		
		
		{ name: "Biggy Race", disc: "Racing", image: "images/gameIcons/biggyRace.png", url: "https://games.appothica.com/gamesList/biggyRace.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		{ name: "Xtreme Racing", disc: "Racing", image: "images/gameIcons/xtremeRacing.png", url: "https://games.appothica.com/gamesList/xtremeRacing.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

		

	
	


]

if (racingContainer) {
showApps(racingGames, racingContainer)

}








////////// SPORTS ////////////

const sportsContainer = document.querySelector(".sportsContainer")

export const sportsGames= [



			{ name: "Shoot Shoot", disc: "Sports", image: "images/gameIcons/shootShoot.png", url: "https://games.appothica.com/gamesList/shootShoot.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
			
			
		{ name: "Touchdown Pro", disc: "Sports", image: "images/gameIcons/touchdownPro.png", url: "https://games.appothica.com/gamesList/touchdownPro.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	{ name: "Glow Hockey", disc: "Sports", image: "images/gameIcons/glowHockey.png", url: "https://games.appothica.com/gamesList/glowHockey.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
		
			{ name: "Axe Master", disc: "Sports", image: "images/gameIcons/axeMaster.png", url: "https://games.appothica.com/gamesList/axeMaster.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	{ name: "Battle Soccer Arena", disc: "Sports", image: "images/gameIcons/battleSoccerArena.png", url: "https://games.appothica.com/gamesList/battleSoccerArena.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
				
		{ name: "Baseball Kid Pi...", disc: "Sports", image: "images/gameIcons/baseballKidPitcher.png", url: "https://games.appothica.com/gamesList/baseballKidPitcher.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		
	{ name: "Go Bowling 2", disc: "Sports", image: "images/gameIcons/goBowling2.png", url: "https://games.appothica.com/gamesList/goBowling2.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
				
		
	{ name: "Just Golf", disc: "Sports", image: "images/gameIcons/justGolf.png", url: "https://games.appothica.com/gamesList/justGolf.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },


			{ name: "Jump Dunk 3D", disc: "Sports", image: "images/gameIcons/jumpDunk3D.png", url: "https://games.appothica.com/gamesList/jumpDunk3D.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

		{ name: "Knife Master", disc: "Sports", image: "images/gameIcons/knifeMaster.png", url: "https://games.appothica.com/gamesList/knifeMaster.html", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },

	
	


]

if (sportsContainer) {
showApps(sportsGames, sportsContainer)

}






export let gameApps = adventureGames.concat(cardsGames, dressGames, hyperGames, puzzleGames, racingGames, actionGames, sportsGames)









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


/*


COLLECTIONS

	{ name: "itch.io", disc: "Browser Games", image: "images/gameIcons/itch.png", url: "https://itch.io", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
		

  { name: "GamePix", disc: "Browser Games", image: "images/gameIcons/gamePix.png", url: "https://www.gamepix.com", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	
	 { name: "Cool Math Games", disc: "Browser Games", image: "images/gameIcons/coolMathGames.png", url: "https://www.coolmathgames.com", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" },
	 
	
		 
		 
			{ name: "Crazy Games", disc: "Browser Games", image: "images/gameIcons/crazyGamesIcon.png", url: "https://www.crazygames.com", tag1: "fun", tag2: "games", tag3: "play", tag4: "zzz" }, 
		 

		 */



