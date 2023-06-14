import { gameApps } from "./games.js";







import { streamApps } from "./stream.js";
import { designApps } from "./categoriesJs/design.js";
import { financeApps } from "./categoriesJs/finance.js";
import { foodApps } from "./categoriesJs/food.js";
import { lifestyleApps } from "./categoriesJs/lifestyle.js";
import { musicApps } from "./categoriesJs/music.js";
import { newsApps } from "./categoriesJs/news.js";
import { photoApps } from "./categoriesJs/photo.js";
import { referenceApps } from "./categoriesJs/reference.js";
import { shoppingApps } from "./categoriesJs/shopping.js";
import { socialApps } from "./categoriesJs/social.js";
import { sportsApps } from "./categoriesJs/sports.js";
import { toolsApps } from "./categoriesJs/tools.js";
import { travelApps } from "./categoriesJs/travel.js";







	
let arr = gameApps.concat(streamApps, designApps, financeApps, foodApps, lifestyleApps, musicApps, newsApps, photoApps, referenceApps, shoppingApps, socialApps, sportsApps, toolsApps, travelApps);



function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}


const apps = getUniqueListBy(arr, 'name');

JSON.stringify(apps);




	
	
	
	
		
	
	
	const container = document.getElementById('container');
const searchBar = document.getElementById('searchBar');
//let appName = [];





searchBar.addEventListener('keyup', (e) => {
   const searchString = e.target.value.toLowerCase();

    const filteredCharacters = apps.filter((character) => {
			
			
        return (
				character.name.toLowerCase().includes(searchString) || 
						
						
						character.disc.toLowerCase().includes(searchString) ||
						
            character.tag1.toLowerCase().includes(searchString) || 
						
            character.tag2.toLowerCase().includes(searchString) || 
						
            character.tag3.toLowerCase().includes(searchString) || 
						
            character.tag4.toLowerCase().includes(searchString) 
						
						);
				
				
	
				
				
				
				
				
				
				
				
    });
		//console.log(result)
    
		
		if (searchString==""){
			container.innerHTML="";
		}
		
		if (searchString.length>2){
		displayCharacters(filteredCharacters)	//displayCharacters(filteredCharacters);
			
			
		} 
		
		
		
		
		
});

const loadCharacters = async () => {
    try {
			
			/*const res= await fetch ('./appData.json');
			
        appName = await res.json();*/
				
        displayCharacters(apps).sort();
				
    } catch (err) {
       console.error(err);
    }
};






const displayCharacters = (characters) => {
	const htmlString = characters.map((character) => {
            return `
						
					
            <div class="card">
                <a href=${character.url} > <img class="card--avatar" src=${character.image} ></a>
                  	
					  <h1 class="card--title"><a href=${character.url} >${character.name}</a></h1>
						
							<h2 class="card--disc"><a href=${character.url} >${character.disc}</a></h2>
						
                <a class="card--link" href="${character.url}">ADD</a>
             
								


								</div>
								
								
								
        `
				
				;
				
				
				})
				
        .join('');
				
				
    container.innerHTML = htmlString;
		
};

//loadCharacters();



				document.write('<p class= "searchBottom">appothica<br><br> </p>');







const navBar = document.querySelector(".navBar")




const navButtons = [
  { name: "Apps ", image: "images/appsWhite.png", url: "index.html" },
	
 
	{ name: "Games", image: "images/joystickWhite.png", url: 'games.html' },
	
 
	{ name: "Stream", image: "images/playWhite.png", url: 'stream.html' },
	

  { name: "Search", image: "images/searchGreen.png", url: "#Search" },
	
	
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










