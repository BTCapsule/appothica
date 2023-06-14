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
               <a href=${url}> <img class="navcard--avatar" src=${image} id= "image" > </a>
                  	
					  
							 
								</div>
								
								
								
								
							
              `)
							
							
							
  )
  navBar.innerHTML = output
	
	
	
	
}

document.addEventListener("DOMContentLoaded", showNav)



