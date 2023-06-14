const container = document.querySelector(".container")

export let financeApps = [


{ name: "Buxfer", disc: "Finance", image: "images/financeIcons/buxferIcon.png", url: "https://www.buxfer.com", tag1: "finance", tag2: "budgeting", tag3: "investing", tag4: "retiring" },

{ name: "BX Bookkeeping", disc: "Finance", image: "images/financeIcons/bxBookkeepingIcon.png", url: "https://usebx.com/app", tag1: "finance", tag2: "budgeting", tag3: "investing", tag4: "bookkeeping" },






{ name: "Coinbase", disc: "Finance", image: "images/financeIcons/coinbaseIcon.jpg", url: "https://www.coinbase.com", tag1: "finance", tag2: "cryptocurrency", tag3: "money", tag4: "bitcoin" },
		
		
			{ name: "Credit Karma", disc: "Finance", image: "images/financeIcons/creditKarmaIcon.jpg", url: "https://www.creditKarma.com", tag1: "finance", tag2: "credit check", tag3: "report", tag4: "money" },
		
	
	{ name: "Experian", disc: "Finance", image: "images/financeIcons/experianIcon.jpg", url: "https://www.experian.com", tag1: "finance", tag2: "credit check", tag3: "report", tag4: "money" },
	
	
	
	
	{ name: "Google Finance", disc: "Finance", image: "images/financeIcons/googleFinanceIcon.png", url: "https://www.google.com/finance/", tag1: "finance", tag2: "budgeting", tag3: "investing", tag4: "stocks" },
	
	
	{ name: "Mint", disc: "Finance", image: "images/financeIcons/mintIcon.png", url: "https://mint.intuit.com", tag1: "finance", tag2: "budgeting", tag3: "investing", tag4: "bookkeeping" },
	
	
		{ name: "Money Tracker", disc: "Finance", image: "images/financeIcons/moneyTrackerIcon.png", url: "https://app.moneytracker.cc", tag1: "finance", tag2: "budgeting", tag3: "cash", tag4: "bookkeeping" },
		
		{ name: "Swan Bitcoin", disc: "Crypto", image: "images/financeIcons/swan.png", url: "https://www.swanbitcoin.com/appothica", tag1: "finance", tag2: "budgeting", tag3: "investing", tag4: "saving" },	
		
		
		
			{ name: "Tax Slayer", disc: "Finance", image: "images/financeIcons/taxSlayerIcon.png", url: "https://www.taxslayer.com", tag1: "finance", tag2: "government theft", tag3: "taxes", tag4: "bookkeeping" },
	
	
			{ name: "Turbo Tax", disc: "Finance", image: "images/financeIcons/turboTaxIcon.png", url: "https://turbotax.intuit.com", tag1: "finance", tag2: "government theft", tag3: "taxes", tag4: "bookkeeping" },
			
			
			
			
	]
	
	
	
	const showApps = () => {
  let output = ""
  financeApps.forEach(
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









