const container = document.querySelector(".container")

export let referenceApps = [


{ name: "Bible", disc: "Books", image: "images/referenceIcons/bibleIcon.png", url: "https://www.bible.com", tag1: "testament", tag2: "religion", tag3: "christianity", tag4: "books" },


{ name: "Calculator.net", disc: "Reference", image: "images/referenceIcons/calculatorNetIcon.png", url: "https://www.calculator.net", tag1: "math", tag2: "scientific", tag3: "financial", tag4: "fitness health" },

{ name: "Calculator Soup", disc: "Reference", image: "images/referenceIcons/calculatorSoupIcon.png", url: "https://www.calculatorsoup.com", tag1: "math", tag2: "scientific", tag3: "financial", tag4: "fitness health" },


{ name: "Class Central", disc: "eLearning", image: "images/referenceIcons/harvardIcon.png", url: "https://www.classcentral.com", tag1: "learn", tag2: "school", tag3: "college", tag4: "elearning" },

{ name: "Collin's Dictionary", disc: "Reference", image: "images/referenceIcons/collinsDictIcon.png", url: "https://www.collinsdictionary.com", tag1: "definitions", tag2: "words", tag3: "dictionary", tag4: "thesaurus" },

{ name: "Covid ActNow", disc: "Reference", image: "images/referenceIcons/covidActNow.png", url: "https://covidactnow.org/?s=21451070", tag1: "covid", tag2: "corona", tag3: "virus", tag4: "tracker" },


{ name: "CuriosityStream", disc: "Documentaries", image: "images/streamIcons/curiosityStream.png", url: "https://curiositystream.com", tag1: "documentaries", tag2: "movies", tag3: "stream", tag4: "watch" },


{ name: "Fiverr", disc: "Freelance Marketplace", image: "images/referenceIcons/fiverrIcon.png", url: "https://track.fiverr.com/visit/?bta=262900&nci=9411", tag1: "freelance", tag2: "jobs", tag3: "money", tag4: "hire" },

{ name: "Free Harvard </br>Courses", disc: "eLearning", image: "images/referenceIcons/harvardIcon.png", url: "https://online-learning.harvard.edu/subject/art-design", tag1: "learn", tag2: "school", tag3: "college", tag4: "elearning" },

{ name: "Google Arts </br>& Culture", disc: "Reference", image: "images/referenceIcons/googleArtsIcon.png", url: "https://artsandculture.google.com", tag1: "learn", tag2: "paintings", tag3: "history", tag4: "art" },


{ name: "Google Translate", disc: "Reference", image: "images/referenceIcons/googleTranslateIcon.png", url: "https://translate.google.com", tag1: "definitions", tag2: "words", tag3: "language", tag4: "translation" },

{ name: "GoSkills", disc: "Reference", image: "images/referenceIcons/goSkillsIcon.png", url: "https://www.goskills.com", tag1: "learn", tag2: "school", tag3: "history", tag4: "elearning" },


{ name: "Instructables", disc: "DIY", image: "images/referenceIcons/instructablesIcon.png", url: "https://www.instructables.com", tag1: "learn", tag2: "diy", tag3: "projects", tag4: "hobbies" },

{ name: "KidPass", disc: "Reference", image: "images/referenceIcons/kidPassIcon.png", url: "https://kidpass.com", tag1: "learn", tag2: "school", tag3: "history", tag4: "elearning" },




{ name: "KJV Bible", disc: "Books", image: "images/referenceIcons/kjvBibleIcon.png", url: "https://www.kingjamesbibleonline.org", tag1: "testament", tag2: "religion", tag3: "christianity", tag4: "books" },


{ name: "Moxie", disc: "Poop Scanner", image: "images/referenceIcons/moxie.png", url: "https://poop.moxie.health", tag1: "poop", tag2: "health", tag3: "stool", tag4: "digestive" },

{ name: "Novakid", disc: "Reference", image: "images/referenceIcons/novakidIcon.png", url: "https://www.novakidschool.com", tag1: "learn", tag2: "words", tag3: "language", tag4: "translation" },

{ name: "Periodex", disc: "Reference", image: "images/referenceIcons/periodexIcon.png", url: "https://periodex.co", tag1: "elements", tag2: "chemisty", tag3: "periodic", tag4: "reference" },


{ name: "Preply", disc: "Reference", image: "images/referenceIcons/preplyIcon.png", url: "https://shareasale.com/r.cfm?b=1554666&u=2906685&m=98226&urllink=&afftrack=", tag1: "learn", tag2: "words", tag3: "language", tag4: "translation" },

{ name: "Rhyme Zone", disc: "Reference", image: "images/referenceIcons/rhymeZoneIcon.png", url: "https://rhymezone.com", tag1: "definitions", tag2: "words", tag3: "poetry", tag4: "songs" },


{ name: "Simplilearn", disc: "eLearning", image: "images/referenceIcons/harvardIcon.png", url: "https://www.simplilearn.com", tag1: "programming", tag2: "bootcamp", tag3: "school", tag4: "learn" },


{ name: "Smithsonian", disc: "Reference", image: "images/referenceIcons/smithsonianIcon.png", url: "https://www.si.edu", tag1: "learn", tag2: "school", tag3: "history", tag4: "elearning" },

{ name: "Translate", disc: "Reference", image: "images/referenceIcons/translateIcon.png", url: "https://www.translate.com", tag1: "definitions", tag2: "words", tag3: "language", tag4: "translation" },

{ name: "Typeform", disc: "Reference", image: "images/referenceIcons/typeformIcon.png", url: "https://www.typeform.com", tag1: "forms", tag2: "services", tag3: "polls", tag4: "survey" },


{ name: "Urban Dictionary", disc: "Reference", image: "images/referenceIcons/urbanDictIcon.png", url: "https://www.urbandictionary.com", tag1: "definitions", tag2: "words", tag3: "dictionary", tag4: "thesaurus" },


{ name: "Weed Maps", disc: "Reference", image: "images/referenceIcons/weedMapsIcon.png", url: "https://weedmaps.com", tag1: "dispensary", tag2: "marijuana", tag3: "recreational", tag4: "cannabis" },

{ name: "Wizedemy", disc: "Reference", image: "images/referenceIcons/wizedemyIcon.png", url: "https://www.wizeprep.com", tag1: "learn", tag2: "school", tag3: "history", tag4: "elearning" },

	
	]
	
	
	
	const showApps = () => {
  let output = ""
  referenceApps.forEach(
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









