const container = document.querySelector(".container")

const apps = [

 
	
	 { name: "eBay", disc: "Shopping", image: "images/shoppingIcons/ebayIcon-min.png", url: "https://www.ebay.com/?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338820704&customid=Appothica&toolid=10001&mkevt=1", tag1: "shop", tag2: "cheap", tag3: "used", tag4: "sell"},
	 
	
{ name: "Subway Clash R...", disc: "Battle Royal", image: "images/gameIcons/subwayClashRemastered.png", url: "https://games.appothica.com/gamesList/subwayClashRemastered.html", tag1: "action", tag2: "games", tag3: "multiplayer", tag4: "shooter" },
	
		{ name: "Pixlr X", disc: 'Photo Editor', image: "images/photoIcons/pixlrXIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fx%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
		
 
	{ name: "Duck Duck Go", disc: "Private Browser", image: "images/toolIcons/duckDuckGoIcon.png", url: "https://duckduckgo.com" },
	
	{ name: "AliExpress", disc: "Shopping", image: "images/shoppingIcons/aliExpressIcon-min.png", url: "https://s.click.aliexpress.com/e/_AWlZKk", tag1: "shop", tag2: "department store", tag3: "buy", tag4: "sell"  },
	
	
	

  { name: "TikTok", disc: "Social Media", image: "images/streamIcons/tikTokIcon.png", url: "https://www.tiktok.com" },
	



	
  
	
	]
	
	
	
	
	const showApps = () => {
  let output = ""
  apps.forEach(
    ({ name, disc, image, url }) =>
      (output += `
              <div class="card">
               <a href=${url} > <img class="card--avatar" src=${image}></a>
                  	
					  <h1 class="card--title"><a href=${url} >${name}</a></h1>
						
						<h2 class="card--disc"><a href=${url} >${disc}</a></h2>
						
                <a class="card--link" href="${url}">ADD</a>
             
								</div>
							
              `)
							
  )
	
	
	
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showApps)













const container2 = document.querySelector(".container2")

const apps2= [

{ name: "Vimeo", disc: "Streaming", image: "images/streamIcons/vimeoIcon.png", url: "https://vimeo.com/join", tag1: "videos", tag2: "stream", tag3: "watch", tag4: "indie"},


	{ name: "Pixlr Mobile", disc: "Photo Editor", image: "images/photoIcons/pixlrIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fm%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},

  { name: "Pintrest", disc: "Hobbies", image: "images/socialIcons/pintrestIcon.png", url: "https://www.pinterest.com" },

  { name: "PicsArt", disc: "Photo Editor", image: "images/photoIcons/picsArtIcon.png", url: "https://picsart.com" },
	
	  { name: "Twitter", disc: "Social Media", image: "images/socialIcons/twitterIcon.png", url: "https://mobile.twitter.com" },
		
		
			{ name: "Fiverr", disc: "Freelance Marketplace", image: "images/referenceIcons/fiverrIcon.png", url: "https://track.fiverr.com/visit/?bta=262900&nci=9411", tag1: "freelance", tag2: "jobs", tag3: "money", tag4: "hire" },
		

{ name: "Carvana", disc: "Shopping", image: "images/shoppingIcons/carvanaIcon-min.png", url: "https://www.carvana.com", tag1: "car", tag2: "van store", tag3: "suv", tag4: "truck"  },





	{ name: "PDF2GO", disc: "PDF Editor", image: "images/toolIcons/pdf2GoIcon.png", url: "https://www.pdf2go.com", tag1: "pdf", tag2: "converter", tag3: "word", tag4: "documents"},		

			{ name: "On Works", disc: "PC Emulators", image: "images/toolIcons/onWorksIcon.png", url: "https://www.onworks.net", tag1: "emulators", tag2: "linux", tag3: "windows", tag4: "hacking"},
	
	{ name: "Instagram", disc: "Social Photos", image: "images/photoIcons/instagramIcon.png", url: 'https://www.instagram.com' },
	
	
		{ name: "American Eagle", disc: "Shopping", image: "images/shoppingIcons/americanEagleIcon-min.png", url: "https://www.ae.com", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },


]



const showApps2 = () => {
  let output = ""
  apps2.forEach(
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
	
	
	
  container2.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showApps2)















const navBar = document.querySelector(".navBar")




const navButtons = [
  { name: "Apps ", image: "images/appsGreen.png", url: "#Quick Links" },
	
 
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
               <a href=${url}> <img class="navcard--avatar" src=${image} id= "image"></a>
                  	
					  
							 
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









