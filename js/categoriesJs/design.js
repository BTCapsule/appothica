const container = document.querySelector(".container")

export let designApps = [


{ name: "Aggie.io", disc: "Painting", image: "images/designIcons/aggieIcon-min.png", url: "https://aggie.io", tag1: "paint", tag2: "draw", tag3: "art", tag4: "graphics"},

{ name: "AutoDraw", disc: "Drawing", image: "images/designIcons/autoDrawIcon.png", url: "https://www.autodraw.com", tag1: "paint", tag2: "draw", tag3: "art", tag4: "graphics"},





{ name: "Google Fonts", disc: "Free Fonts", image: "images/toolIcons/googleFontsIcon.png", url: "https://fonts.google.com", tag1: "text", tag2: "letters", tag3: "design", tag4: "typography"},

{ name: "Infogram", disc: "Diagrams", image: "images/designIcons/infoGramIcon.png", url: "https://infogram.com", tag1: "diagrams", tag2: "maps", tag3: "infographics", tag4: "slides"},



{ name: "Paint", disc: "Drawing", image: "images/designIcons/msPaintIcon-min.png", url: "https://jspaint.app/#local:be51a6a18d198", tag1: "paint", tag2: "draw", tag3: "art", tag4: "graphics"},


	
	{ name: "Pixlr Mobile", disc: "Photo Editor", image: "images/photoIcons/pixlrIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fm%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
		
	
	{ name: "Pixlr E", disc: 'Photo Editor', image: "images/photoIcons/pixlrEIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fe%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
		
	
		{ name: "Pixlr X", disc: 'Photo Editor', image: "images/photoIcons/pixlrXIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fx%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
		
		
		


{ name: "Remove.bg", disc: "Photo Editor", image: "images/designIcons/removeBGIcon.png", url: "https://www.remove.bg", tag1: "photo", tag2: "transparent", tag3: "remove background", tag4: "png"},


{ name: "Sketchpad", disc: "Drawing", image: "images/designIcons/sketchpadIcon-min.png", url: "https://sketch.io/sketchpad/", tag1: "paint", tag2: "draw", tag3: "art", tag4: "vector graphics"},

{ name: "Society6", disc: "Shopping", image: "images/shoppingIcons/society6Icon.png", url: "https://society6.com", tag1: "design", tag2: "fashion store", tag3: "art", tag4: "clothes"  },	


{ name: "Squarespace", disc: "Website Builder", image: "images/designIcons/squarespaceIcon-min.png", url: "https://www.squarespace.com", tag1: "website", tag2: "browser", tag3: "design", tag4: "ecommerce"},

{ name: "Sumopaint", disc: "Drawing", image: "images/designIcons/sumoPaintIcon-min.png", url: "https://sumo.app/paint/", tag1: "paint", tag2: "draw", tag3: "art", tag4: "graphics"},

{ name: "Vecta.io", disc: "SVG Compressor", image: "images/designIcons/vectaIcon-min.png", url: "https://vecta.io/nano", tag1: "compressor", tag2: "svgz", tag3: "dxf", tag4: "vector graphics"},

{ name: "Vecteezy", disc: "Vectors", image: "images/designIcons/vecteezyIcon-min.png", url: "https://www.vecteezy.com", tag1: "compressor", tag2: "svgz", tag3: "design", tag4: "vector graphics"},

{ name: "Vector Grove", disc: "Vectors", image: "images/designIcons/vectorGroveIcon.png", url: "https://vectorgrove.com", tag1: "compressor", tag2: "svgz", tag3: "design", tag4: "vector graphics"},


	
	]
	
	
	
	const showApps = () => {
  let output = ""
  designApps.forEach(
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









