const container = document.querySelector(".container")

export let toolsApps = [



{ name: "Box", disc: "Cloud Storage", image: "images/toolIcons/boxIcon.png", url: "https://www.box.com", tag1: "storage", tag2: "files", tag3: "transfer", tag4: "cloud"},
	
	
	
	{ name: "Bubbl.us", disc: "Mind Mapping", image: "images/toolIcons/bubblUsIcon.png", url: "https://bubbl.us", tag1: "mind mapping", tag2: "organize", tag3: "ideas", tag4: "task"},
	

	{ name: "Calendo", disc: "Calender", image: "images/toolIcons/calendoIcon.png", url: "https://calendo.dav-apps.tech", tag1: "calender", tag2: "dates", tag3: "months", tag4: "schedule"},
	
		{ name: "Cat Bounce", disc: "WTF", image: "images/toolIcons/catBounce.png", url: "https://cat-bounce.com", tag1: "cats", tag2: "bounce", tag3: "funny", tag4: "weird"},
		
	
	
	{ name: "CoCalc", disc: "Linux Terminal", image: "images/toolIcons/coCalcIcon.png", url: "https://www.box.com", tag1: "terminal", tag2: "linux", tag3: "ubuntu", tag4: "hacking"},
	
	
	
	{ name: "Copy Paste </br>Character", disc: "Fonts", image: "images/toolIcons/cpCharacterIcon.png", url: "https://copypastecharacter.com", tag1: "fonts", tag2: "characters", tag3: "emojis", tag4: "symbols"},
	

	{ name: "Cryptee", disc: "Private Notes", image: "images/toolIcons/crypteeIcon.png", url: "https://crypt.ee", tag1: "encrypt", tag2: "notes", tag3: "write", tag4: "message"},
	
	
	{ name: "Day Viewer", disc: "Planner", image: "images/toolIcons/dayViewerIcon.png", url: "https://dayviewer.com", tag1: "calender", tag2: "dates", tag3: "planner", tag4: "schedule"},
	
	{ name: "Diagrams", disc: "Tools", image: "images/toolIcons/diagramsIcon.png", url: "https://app.diagrams.net/?src=about", tag1: "diagrams", tag2: "development", tag3: "write", tag4: "draw"},
	
	{ name: "Dictation", disc: "Transcribe", image: "images/toolIcons/dictationIcon.png", url: "https://dictation.iosrc=about", tag1: "dictation", tag2: "speech recognition", tag3: "transcription", tag4: "text"},
	
{ name: "Duck Duck Go", disc: "Private Browser", image: "images/toolIcons/duckDuckGoIcon.png", url: "https://duckduckgo.com", tag1: "browser", tag2: "private", tag3: "ad block", tag4: "search"},

{ name: "Ecosia", disc: "Browser", image: "images/toolIcons/ecosiaIcon.png", url: "https://www.ecosia.org", tag1: "browser", tag2: "trees", tag3: "enviroment", tag4: "search"},


{ name: "Egg Timer", disc: "Tools", image: "images/toolIcons/eggTimerIcon.png", url: "https://e.ggtimer.com", tag1: "timer", tag2: "clock", tag3: "stopwatch", tag4: "minutes"},

{ name: "Filter Bypass", disc: "VPN", image: "images/toolIcons/filterBypassIcon.png", url: "https://www.filterbypass.me", tag1: "vpn", tag2: "private", tag3: "security", tag4: "proxy"},


{ name: "Fluid Simulation", disc: "Fun", image: "images/toolIcons/fluidSimulation.png", url: "https://paveldogreat.github.io/WebGL-Fluid-Simulation/", tag1: "fun", tag2: "satisfying", tag3: "pretty", tag4: "liquid"},


	
	{ name: "Google Drive", disc: "Cloud Storage", image: "images/toolIcons/googleDriveIcon.png", url: "https://drive.google.com/drive/mobile/", tag1: "storage", tag2: "files", tag3: "transfer", tag4: "cloud"},
	
	{ name: "Google Fonts", disc: "Free Fonts", image: "images/toolIcons/googleFontsIcon.png", url: "https://fonts.google.com", tag1: "text", tag2: "letters", tag3: "design", tag4: "typography"},
	
	{ name: "Hacker Typer", disc: "Prank", image: "images/toolIcons/hackerTyper.png", url: "https://hackertyper.net", tag1: "prank", tag2: "code", tag3: "funny", tag4: "programming"},
	
	
	
	{ name: "Hitask", disc: "Task Manager", image: "images/toolIcons/hitaskIcon.png", url: "https://hitask.com", tag1: "task manager", tag2: "projects", tag3: "planner", tag4: "schedule"},
	
		{ name: "IFTTT", disc: "Media Manager", image: "images/toolIcons/iftttIcon.png", url: "https://ifttt.com", tag1: "task manager", tag2: "projects", tag3: "social media", tag4: "schedule"},
		
		{ name: "Kickass Torrents", disc: "Torrents", image: "images/toolIcons/kickassTorrents.png", url: "https://katcr.to", tag1: "downloads", tag2: "p2p", tag3: "sharing", tag4: "vpn"},
		
		
		{ name: "Samsung iTest", disc: "Emulator", image: "images/toolIcons/iTest.png", url: 'https://itest.nz', tag1: "emultaor", tag2: "android", tag3: "galaxy", tag4: "operating system"  },
		
		
		
		{ name: "Namechk", disc: "Web Development", image: "images/toolIcons/nameChkIcon.png", url: "https://namechk.com", tag1: "web development", tag2: "domain", tag3: "website", tag4: "names"},
		
		
		{ name: "Online Calendar", disc: "Calender", image: "images/toolIcons/onlineCalendarIcon.png", url: "https://calendar.online", tag1: "calender", tag2: "dates", tag3: "months", tag4: "schedule"},
		
	
			{ name: "On Works", disc: "PC Emulators", image: "images/toolIcons/onWorksIcon.png", url: "https://www.onworks.net", tag1: "emulators", tag2: "linux", tag3: "windows", tag4: "hacking"},
		
		{ name: "PCJS", disc: "PC Emulators", image: "images/toolIcons/pcjs.png", url: "https://www.pcjs.org", tag1: "emulators", tag2: "linux", tag3: "windows", tag4: "hacking"},
			
			
	{ name: "PDF2GO", disc: "PDF Editor", image: "images/toolIcons/pdf2GoIcon.png", url: "https://www.pdf2go.com", tag1: "pdf", tag2: "converter", tag3: "word", tag4: "documents"},			
	
		{ name: "PDF24", disc: "PDF Editor", image: "images/toolIcons/pdf24Icon.png", url: "https://tools.pdf24.org/en/", tag1: "pdf", tag2: "converter", tag3: "word", tag4: "documents"},		
		
			{ name: "Pencil", disc: "Tools", image: "images/toolIcons/pencilIcon.png", url: "https://www.pencilapp.io", tag1: "text", tag2: "letters", tag3: "design", tag4: "notes"},
		
		{ name: "Replit", disc: "Code Editor", image: "images/toolIcons/replitIcon.png", url: "https://replit.com", tag1: "coding", tag2: "programming", tag3: "ide", tag4: "compiler"},
			

		{ name: "Rev", disc: "Transcribe", image: "images/toolIcons/revIcon.png", url: "https://www.rev.com", tag1: "dictation", tag2: "speech recognition", tag3: "write", tag4: "text"},
		
	{ name: "Scribble Maps", disc: "Tools", image: "images/toolIcons/scribbleMapsIcon.png", url: "https://www.scribblemaps.com", tag1: "maps", tag2: "draw", tag3: "directions", tag4: "atlas"},
		
		
			{ name: "Slides", disc: "Presentation", image: "images/toolIcons/slidesIcon.png", url: "https://slides.com", tag1: "presentation", tag2: "powerpoint", tag3: "web development", tag4: "create"},
			
{ name: "Snapdrop", disc: "File Sharing", image: "images/toolIcons/snapdropIcon.png", url: "https://snapdrop.net", tag1: "files", tag2: "sharing", tag3: "airdrop", tag4: "crossplatform"},

{ name: "Sshwifty", disc: "SSH Client", image: "images/toolIcons/sshwiftyIcon.png", url: "https://sshwifty.herokuapp.com", tag1: "ssh client", tag2: "secure shell", tag3: "telnet", tag4: "remote"},

	{ name: "Stack Edit", disc: "Code Editor", image: "images/toolIcons/stackEditIcon.png", url: "https://stackedit.io", tag1: "coding", tag2: "programming", tag3: "ide", tag4: "markdown"},
	
	{ name: "Startpage", disc: "Private Browser", image: "images/toolIcons/startpageIcon.png", url: "https://startpage.com", tag1: "browser", tag2: "private", tag3: "ad block", tag4: "search"},
	
	
	{ name: "SugarSync", disc: "Cloud Sharing", image: "images/toolIcons/sugarSyncIcon.png", url: "https://www1.sugarsync.com", tag1: "sharing", tag2: "files", tag3: "transfer", tag4: "cloud"},
	
		{ name: "The Pirate Bay", disc: "Torrents", image: "images/toolIcons/thePirateBay.png", url: "https://www.pirateproxy-bay.com", tag1: "downloads", tag2: "p2p", tag3: "sharing", tag4: "vpn"},
		
	
	{ name: "TeuxDeux", disc: "Task Manager", image: "images/toolIcons/teuxDeuxIcon.png", url: "https://teuxdeux.com", tag1: "task manager", tag2: "projects", tag3: "planner", tag4: "todo list"},
	
	{ name: "Timo", disc: "Task Manager", image: "images/toolIcons/timoIcon.png", url: "https://hellotimo.co", tag1: "task manager", tag2: "projects", tag3: "planner", tag4: "todo list"},
	
	{ name: "Typing", disc: "Tools", image: "images/toolIcons/typingIcon.png", url: "https://www.typing.com", tag1: "keyboarding", tag2: "notes", tag3: "write", tag4: "literacy"},
	
		{ name: "Vocaroo", disc: "Voice Recorder", image: "images/toolIcons/vocarooIcon.png", url: "https://vocaroo.com", tag1: "recording", tag2: "voice", tag3: "song", tag4: "music"},
	
	
	
	{ name: "VPNBook", disc: "VPN", image: "images/toolIcons/vpnBookIcon.png", url: "https://www.vpnbook.com", tag1: "vpn", tag2: "private", tag3: "security", tag4: "proxy"},
	
	
	
	{ name: "Yahoo", disc: "Browser", image: "images/toolIcons/yahooBrowserIcon.png", url: "https://www.yahoo.com", tag1: "browser", tag2: "news", tag3: "engine", tag4: "search"},
	
	
	
	

	
	]
	
	
	
	const showApps = () => {
  let output = ""
  toolsApps.forEach(
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









