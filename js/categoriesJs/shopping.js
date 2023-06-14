const container = document.querySelector(".container")

export let shoppingApps = [



{ name: "Abercrombie & Fi...", disc: "Shopping", image: "images/shoppingIcons/abercrombieIcon-min.png", url: "https://www.abercrombie.com/shop/us", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },

{ name: "Ace Hardware", disc: "Shopping", image: "images/shoppingIcons/aceIcon-min.png", url: "https://www.acehardware.com", tag1: "shop", tag2: "tools store", tag3: "buy", tag4: "spend"  },



{ name: "Adidas", disc: "Shopping", image: "images/shoppingIcons/adidasIcon-min.png", url: "https://www.adidas.com/us", tag1: "shop", tag2: "shoe store", tag3: "buy", tag4: "sneaker"  },


{ name: "AdoreMe", disc: "Shopping", image: "images/shoppingIcons/adoreMeIcon.png", url: "https://www.adoreme.com", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },	



{ name: "Alibaba", disc: "Shopping", image: "images/shoppingIcons/alibabaIcon-min.png", url: "https://m.alibaba.com/", tag1: "shop", tag2: "wholesale store", tag3: "factory", tag4: "manufacture"  },

{ name: "AliExpress", disc: "Shopping", image: "images/shoppingIcons/aliExpressIcon-min.png", url: "https://s.click.aliexpress.com/e/_AWlZKk", tag1: "electronics", tag2: "department store", tag3: "buy", tag4: "sell"  },




{ name: "American Eagle", disc: "Shopping", image: "images/shoppingIcons/americanEagleIcon-min.png", url: "https://www.ae.com", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },

{ name: "AutoZone", disc: "Shopping", image: "images/shoppingIcons/autoZoneIcon-min.png", url: "https://www.autozone.com", tag1: "car", tag2: "auto store", tag3: "parts", tag4: "truck"  },

 { name: "B&H", disc: "Shopping", image: "images/shoppingIcons/bhIcon.png", url: "https://www.bhphotovideo.com", tag1: "shop", tag2: "electronics store", tag3: "buy", tag4: "technology"  },
	
{ name: "Bed Bath & Beyond", disc: "Shopping", image: "images/shoppingIcons/bedBathIcon-min.png", url: "https://www.bedbathandbeyond.com", tag1: "shop", tag2: "department store", tag3: "buy", tag4: "spend"  },

{ name: "Belk", disc: "Shopping", image: "images/shoppingIcons/belkIcon-min.png", url: "https://www.belk.com", tag1: "shop", tag2: "department store", tag3: "buy", tag4: "spend"  },


{ name: "Cackle Hatchery", disc: "Shopping", image: "images/shoppingIcons/cackleHatcheryIcon-min.png", url: "https://www.cacklehatchery.com", tag1: "chicken", tag2: "hatchery store", tag3: "poultry", tag4: "coops"  },

{ name: "Canvaspop", disc: "Photo", image: "images/shoppingIcons/canvasPopIcon.png", url: "https://shareasale.com/r.cfm?b=384007&u=2906685&m=25092&urllink=&afftrack=", tag1: "canvas", tag2: "prints", tag3: "pictures", tag4: "photo"  },

{ name: "Carvana", disc: "Shopping", image: "images/shoppingIcons/carvanaIcon-min.png", url: "https://www.carvana.com", tag1: "car", tag2: "van store", tag3: "suv", tag4: "truck"  },

{ name: "Car Gurus", disc: "Shopping", image: "images/shoppingIcons/carGurusIcon.png", url: "https://www.cargurus.com", tag1: "car", tag2: "van store", tag3: "suv", tag4: "truck"  },


{ name: "Custom Ink", disc: "Shopping", image: "images/shoppingIcons/customInkIcon.png", url: "https://www.customink.com", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },	


{ name: "Design By Humans", disc: "Shopping", image: "images/shoppingIcons/designByHumansIcon.png", url: "https://www.designbyhumans.com", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },



{ name: "Discount Tire", disc: "Shopping", image: "images/shoppingIcons/discountTireIcon-min.png", url: "https://www.discounttire.com", tag1: "car", tag2: "tires store", tag3: "wheel", tag4: "truck"  },


 { name: "Dollar Shave Club", disc: "Shopping", image: "images/shoppingIcons/dollarShaveClubIcon.png", url: "https://www.dollarshaveclub.com", tag1: "shop", tag2: "razors", tag3: "buy", tag4: "hair"  },


{ name: "eBay", disc: "Shopping", image: "images/shoppingIcons/ebayIcon-min.png", url: "https://www.ebay.com/?mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=5338820704&customid=Appothica&toolid=10001&mkevt=1", tag1: "shop", tag2: "cheap", tag3: "used", tag4: "sell"},
	
	
 { name: "Gearbest", disc: "Shopping", image: "images/shoppingIcons/gearBestIcon.png", url: "https://m.gearbest.com", tag1: "shop", tag2: "electronics store", tag3: "buy", tag4: "technology"  },
 


 { name: "Goodwill", disc: "Shopping", image: "images/shoppingIcons/goodwillIcon-min.png", url: "https://www.goodwill.org", tag1: "shop", tag2: "cheap", tag3: "used", tag4: "donate"}, 
	 
	
{ name: "Gucci", disc: "Shopping", image: "images/shoppingIcons/gucciIcon-min.png", url: "https://www.gucci.com/us/en/", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },

{ name: "Hollister", disc: "Shopping", image: "images/shoppingIcons/hollisterIcon-min.png", url: "https://www.hollisterco.com/shop/us", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },	
 
 { name: "JCPenny", disc: "Shopping", image: "images/shoppingIcons/jcPennyIcon-min.png", url: "https://m.jcpenney.com", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },	
 
 
 { name: "Jegs", disc: "Aftermarket Parts", image: "images/shoppingIcons/jegsIcon.png", url: "https://www.jegs.com", tag1: "car", tag2: "auto store", tag3: "aftermarket parts", tag4: "truck"  },
 
 
 { name: "Lacoste", disc: "Shopping", image: "images/shoppingIcons/lacosteIcon.png", url: "https://www.lacoste.com/us/", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },	
 
 
 { name: "Lowes", disc: "Shopping", image: "images/shoppingIcons/lowesIcon-min.png", url: "https://www.lowes.com", tag1: "shop", tag2: "tools store", tag3: "buy", tag4: "spend"  },
 
 { name: "Musician Friend", disc: "Music", image: "images/shoppingIcons/musicianFriendIcon.png", url: "https://www.musiciansfriend.com", tag1: "music", tag2: "instruments", tag3: "guitar", tag4: "shop"  },
 
 
 
 { name: "Newegg", disc: "Shopping", image: "images/shoppingIcons/neweggIcon-min.png", url: "https://www.newegg.com", tag1: "shop", tag2: "electronics store", tag3: "buy", tag4: "technology"  },
 
 
 
  { name: "Sams Club", disc: "Shopping", image: "images/shoppingIcons/samsClubIcon-min.png", url: "https://www.samsclub.com", tag1: "shop", tag2: "department store", tag3: "buy", tag4: "member"  },	
 
 

{ name: "SHEIN", disc: "Shopping", image: "images/shoppingIcons/sheinIcon-min.png", url: "https://m.shein.com/us/?ref=us&rep=dir&ret=mus", tag1: "shop", tag2: "fashion store", tag3: "buy", tag4: "clothes"  },	


	{ name: "Skinwallet", disc: "Buy/Sell Skins", image: "images/gameIcons/skinwallet.png", url: "https://www.jdoqocy.com/click-100451708-14516355", tag1: "sell", tag2: "games", tag3: "play", tag4: "buy" },

{ name: "Society6", disc: "Shopping", image: "images/shoppingIcons/society6Icon.png", url: "https://www.tkqlhce.com/click-100451708-13108219", tag1: "design", tag2: "fashion store", tag3: "art", tag4: "clothes"  },	



{ name: "Target", disc: "Shopping", image: "images/shoppingIcons/targetIcon-min.png", url: "https://www.target.com", tag1: "shop", tag2: "department store", tag3: "buy", tag4: "spend"  },


{ name: "Uber Eats", disc: "Shopping", image: "images/foodIcons/uberEatsIcon-min.png", url: "https://www.ubereats.com", tag1: "food", tag2: "delivery", tag3: "eat", tag4: "shop"  },


 { name: "Uber", disc: "Shopping", image: "images/shoppingIcons/uberIcon-min.png", url: "https://auth.uber.com/login/?breeze_local_zone=dca1&next_url=https%3A%2F%2Fm.uber.com%2F&state=qJBtsSZ_ptHdTw4h1YtWxxM9tRnBGs6pzC9rX_T0Qek%3D", tag1: "car", tag2: "taxi", tag3: "ride", tag4: "driver"  },


 { name: "Walmart Grocery", disc: "Shopping", image: "images/shoppingIcons/walmartGroceryIcon-min.png", url: "https://www.walmart.com/grocery/", tag1: "shop", tag2: "grocery store", tag3: "food", tag4: "spend"  },



	
	]
	
	
	
	const showApps = () => {
  let output = ""
  shoppingApps.forEach(
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









