const container = document.querySelector(".container")

export let photoApps = [



  { name: "9 Gag", disc: "Image Sharing", image: "images/photoIcons/9gag.png", url: 'https://9gag.com', tag1: "memes", tag2: "photos", tag3: "sharing", tag4: "gifs" },








{ name: "Canvaspop", disc: "Photo", image: "images/shoppingIcons/canvasPopIcon.png", url: "https://shareasale.com/r.cfm?b=384007&u=2906685&m=25092&urllink=&afftrack=", tag1: "canvas", tag2: "prints", tag3: "pictures", tag4: "photo"  },



{ name: "Cloud Stop Motion", disc: "Video", image: "images/photoIcons/cloudStopIcon.png", url: "https://app.cloudstopmotion.com/login", tag1: "edit", tag2: "video", tag3: "stop motion", tag4: "movies"},

	

{ name: "ImgFlip", disc: "Meme Generator", image: "images/photoIcons/imgFlipIcon.png", url: 'https://imgflip.com', tag1: "memes", tag2: "photos", tag3: "camera", tag4: "pictures" },
	
	{ name: "Imgur", disc: "Image Sharing", image: "images/photoIcons/imgurIcon.png", url: 'https://m.imgur.com/', tag1: "memes", tag2: "photos", tag3: "sharing", tag4: "gifs" },
	
	
	

 { name: "Instagram", disc: "Social Photos", image: "images/photoIcons/instagramIcon.png", url: 'https://www.instagram.com', tag1: "social media", tag2: "photos", tag3: "camera", tag4: "pictures"},
 
 { name: "Memedroid", disc: "Image Sharing", image: "images/photoIcons/memeDroid.png", url: 'https://www.memedroid.com', tag1: "memes", tag2: "photos", tag3: "sharing", tag4: "gifs" },
 
 
 
 	{ name: "Photopea", disc: "Photo Editor", image: "images/photoIcons/photopeaIcon.png", url: "https://www.photopea.com", tag1: "edit", tag2: "photos", tag3: "psd", tag4: "pictures"},
 
	
	{ name: "PicsArt", disc: "Photo Editor", image: "images/photoIcons/picsArtIcon.png", url: "https://picsart.com", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
	

	
	{ name: "Pixlr Mobile", disc: "Photo Editor", image: "images/photoIcons/pixlrIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fm%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
	
		{ name: "Pixlr E", disc: 'Photo Editor', image: "images/photoIcons/pixlrEIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fe%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
		
		{ name: "Pixlr X", disc: 'Photo Editor', image: "images/photoIcons/pixlrXIcon.png", url: "https://shareasale.com/r.cfm?b=1494940&u=2906685&m=94987&urllink=pixlr%2Ecom%2Fx%2F&afftrack=", tag1: "edit", tag2: "photos", tag3: "camera", tag4: "pictures"},
	
	
	
	{ name: "Powtoon", disc: "Video", image: "images/photoIcons/powtoonIcon.png", url: "https://www.powtoon.com", tag1: "edit", tag2: "video", tag3: "stop motion", tag4: "movies"},
	
	

	
	
	{ name: "Remove.bg", disc: "Photo Editor", image: "images/designIcons/removeBGIcon.png", url: "https://www.remove.bg", tag1: "photo", tag2: "transparent", tag3: "remove background", tag4: "png"},
	
	{ name: "Shrink Me", disc: "Photo Compressor", image: "images/photoIcons/shrinkMeIcon.png", url: "https://shrinkme.app", tag1: "compress", tag2: "svg", tag3: "reduce", tag4: "png jpeg"},
	
		{ name: "Squoosh", disc: "Photo Compressor", image: "images/photoIcons/squooshIcon.png", url: "https://squoosh.app", tag1: "compress", tag2: "svg", tag3: "reduce", tag4: "png jpeg"},
		
		
		
		
		
		
	
	]
	
	
	
	const showApps = () => {
  let output = ""
  photoApps.forEach(
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









