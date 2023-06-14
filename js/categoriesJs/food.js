const container = document.querySelector(".container")

export let foodApps = [


	{ name: "Arby's", disc: "Fast Food", image: "images/foodIcons/arbysIcon-min.png", url: 'https://www.arbys.com', tag1: "fast food", tag2: "meat", tag3: "order", tag4: "eat"  },
		
	 	{ name: "Baskin Robbins", disc: "Ice Cream", image: "images/foodIcons/baskinRobbinsIcon-min.png", url: 'https://www.baskinrobbins.com', tag1: "ice cream", tag2: "chocolate", tag3: "flavors", tag4: "coffee"  },
		
	 
	 
	 
	{ name: "Bojangles", disc: "Food", image: "images/foodIcons/bojanglesIcon-min.png", url: 'https://www.bojangles.com', tag1: "fast food", tag2: "meat", tag3: "order", tag4: "eat"  },
		
		{ name: "Buffalo Wild Wings", disc: "Food", image: "images/foodIcons/buffaloWildIcon-min.png", url: 'https://www.buffalowildwings.com', tag1: "food", tag2: "chicken wings", tag3: "order", tag4: "eat"  },
	 
	 { name: "Captain D's", disc: "Fast Food", image: "images/foodIcons/captainDIcon-min.png", url: 'https://www.captainds.com', tag1: "fast food", tag2: "fish", tag3: "order", tag4: "eat"  },
	 
	  { name: "Green Chef", disc: "Organic", image: "images/foodIcons/greenChefIcon.png", url: 'https://www.greenchef.com', tag1: "food", tag2: "keto", tag3: "health", tag4: "deliver"  },
	 
	 { name: "Grubhub", disc: "Food Delivery", image: "images/foodIcons/grubHubIcon-min.png", url: 'https://www.grubhub.com', tag1: "fast food", tag2: "meat", tag3: "order", tag4: "deliver"  },
	 
	 { name: "Little Ceasars", disc: "Food", image: "images/foodIcons/littleCeasarIcon-min.png", url: 'https://www.littleceasars.com', tag1: "fast food", tag2: "pizza", tag3: "order", tag4: "eat"  },
	 
	 
	 	{ name: "Peet's Coffee", disc: "Coffee", image: "images/foodIcons/peetsIcon.png", url: 'https://www.peets.com', tag1: "coffee", tag2: "shop", tag3: "frap", tag4: "order"  },
	 
	 
	 { name: "Sonic", disc: "Fast Food", image: "images/foodIcons/sonicIcon-min.png", url: 'https://order.sonic.com', tag1: "fast food", tag2: "meat", tag3: "order", tag4: "eat"  },
	 
	 
	{ name: "Starbucks", disc: "Coffee", image: "images/foodIcons/starbucksIcon-min.png", url: 'https://www.starbucks.com', tag1: "coffee", tag2: "shop", tag3: "frap", tag4: "order"  },
	
	
	{ name: "Steak n' Shake", disc: "Food", image: "images/foodIcons/steakShakeIcon-min.png", url: 'https://www.steaknshake.com', tag1: "food", tag2: "steak burgers", tag3: "order", tag4: "eat"  },
	
	{ name: "Uber Eats", disc: "Shopping", image: "images/foodIcons/uberEatsIcon-min.png", url: "https://www.ubereats.com", tag1: "food", tag2: "delivery", tag3: "eat", tag4: "shop"  },
	
	
	{ name: "Walmart Grocery", disc: "Shopping", image: "images/shoppingIcons/walmartGroceryIcon-min.png", url: "https://www.walmart.com/grocery/", tag1: "shop", tag2: "grocery store", tag3: "food", tag4: "spend"  },
	
		
	{ name: "Wendy's", disc: "Fast Food", image: "images/foodIcons/wendysIcon-min.png", url: 'https://www.wendys.com', tag1: "fast food", tag2: "meat", tag3: "order", tag4: "burgers"  },
	
	{ name: "Whataburger", disc: "Food", image: "images/foodIcons/whatBurgerIcon-min.png", url: 'https://www.whataburger.com', tag1: "fast food", tag2: "meat", tag3: "order", tag4: "burger"  },
	
	
	 { name: "Yummly", disc: "Food Delivery", image: "images/foodIcons/yummlyIcon-min.png", url: 'https://www.yummly.com', tag1: "fast food", tag2: "meat", tag3: "order", tag4: "deliver"  },
	
	
	
	
	
	
	]
	
	
	
	const showApps = () => {
  let output = ""
  foodApps.forEach(
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









