const container = document.querySelector(".containerCat")

const apps = [
  { name: "Entertainment", image: "images/categoryIcons/entertainment.png", url: 'stream.html' },
 
	{ name: "Finance", image: "images/categoryIcons/finance.png", url: "finance.html" },
 
	{ name: "Food & Drink", image: "images/categoryIcons/food.png", url: "food.html" },
	
	
	{ name: "Games",  image: "images/categoryIcons/games.png", url: "games.html" },
	
	
	 { name: "Graphic Design",  image: "images/categoryIcons/design.png", url: "design.html" },
	
	 
	 { name: "Lifestyle",  image: "images/categoryIcons/lifestyle.png", url: "lifestyle.html" },
	 
	 
	 { name: "Music",  image: "images/categoryIcons/music.png", url: "music.html" },
	 
	 
	{ name: "News",  image: "images/categoryIcons/news.png", url: "news.html" },
	
	{ name: "Photo & Video",  image: "images/categoryIcons/photo.png", url: 'photo.html' },

 

 

  

 

  { name: "Reference",  image: "images/categoryIcons/reference.png", url: "reference.html" },
	
	{ name: "Shopping", image: "images/categoryIcons/shopping.png", url: "shopping.html" },
	
	 { name: "Social",  image: "images/categoryIcons/social.png", url: "social.html" },
	 
	 { name: "Sports",  image: "images/categoryIcons/sports.png", url: "sports.html" },
	

  { name: "Tools",  image: "images/categoryIcons/tools.png", url: 'tools.html' },
	
	 { name: "Travel", image: "images/categoryIcons/travel.png", url: "travel.html" },
	
	]
	
	
	
	const showApps = () => {
  let output = ""
  apps.forEach(
    ({ name, image, url }) =>
      (output += `
           <a href=${url}>  <div class="cardCat">
               <a href=${url} > <img class="cardCat--avatar" src=${image} ></a>
                  	
					  <h1 class="cardCat--title"><a href=${url} >${name}</a></h1>
						
						
             
								</div></a>
             
								
							
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









