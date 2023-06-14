const container = document.querySelector(".container")

export let socialApps = [



	
{name: "Astral", disc: "Nostr Client", image: "images/socialIcons/astral.png", url: "https://astral.ninja", tag1: "nostr", tag2: "social", tag3: "decentralized", tag4: "free speech"},

	{name: "Coracle", disc: "Nostr Client", image: "images/socialIcons/coracle.png", url: "https://coracle.social", tag1: "nostr", tag2: "social", tag3: "decentralized", tag4: "free speech"},	
	
	{name: "Ello", disc: "Social Art", image: "images/socialIcons/elloIcon.png", url: "https://ello.co", tag1: "pictures", tag2: "social", tag3: "art", tag4: "inspiration"},

{ name: "Flote", disc: "Social Media", image: "images/socialIcons/flote.png", url: "https://flote.app", tag1: "free speech", tag2: "uncensored", tag3: "censorship", tag4: "memes"},

{ name: "Gab", disc: "Social Media", image: "images/socialIcons/gab.png", url: "https://gab.com", tag1: "free speech", tag2: "uncensored", tag3: "censorship", tag4: "memes"},

{ name: "Handshake", disc: "Networking", image: "images/socialIcons/handshakeIcon.png", url: "https://joinhandshake.com", tag1: "social media", tag2: "networking", tag3: "college", tag4: "careers"},

{ name: "IRL", disc: "Social Media", image: "images/socialIcons/irlIcon.png", url: "https://www.irl.com", tag1: "social media", tag2: "friends", tag3: "groups", tag4: "hangout"},

{ name: "Mastodon", disc: "Social Media", image: "images/socialIcons/mastodonIcon.png", url: "https://mastodon.social/about", tag1: "social media", tag2: "friends", tag3: "groups", tag4: "hangout"},


{ name: "Messenger Rooms", disc: "Social Media", image: "images/socialIcons/messengerRoomsIcon.png", url: "https://www.messenger.com/rooms", tag1: "social media", tag2: "friends", tag3: "groups", tag4: "chat"},

{ name: "MySpace", disc: "Social Media", image: "images/socialIcons/mySpaceIcon.png", url: "https://myspace.com", tag1: "social media", tag2: "friends", tag3: "groups", tag4: "chat"},

	{name: "NostrChat", disc: "Nostr Client", image: "images/socialIcons/nostrchat.png", url: "https://www.nostrchat.io/login", tag1: "nostr", tag2: "social", tag3: "decentralized", tag4: "free speech"},	


{ name: "Odysee", disc: "Social Media", image: "images/socialIcons/odysee.png", url: "https://odysee.com", tag1: "free speech", tag2: "uncensored", tag3: "censorship", tag4: "memes"},


	{ name: "Pintrest", disc: "DYI", image: "images/socialIcons/pintrestIcon.png", url: "https://www.pinterest.com", tag1: "pictures", tag2: "ideas", tag3: "memes", tag4: "crafts"},
	
	
	{ name: "Skype", disc: "Social Media", image: "images/socialIcons/skypeIcon.png", url: "https://www.skype.com/en/", tag1: "social media", tag2: "friends", tag3: "phone", tag4: "chat"},
	
	{name: "Snort", disc: "Nostr Client", image: "images/socialIcons/snort.png", url: "https://snort.social", tag1: "nostr", tag2: "social", tag3: "decentralized", tag4: "free speech"},	
	
	{ name: "Telegram", disc: "Social Media", image: "images/socialIcons/telegramIcon.png", url: "https://web.telegram.org/z/", tag1: "social media", tag2: "friends", tag3: "message", tag4: "chat"},
	
	
	
	
	 { name: "TikTok", disc: "Social Media", image: "images/streamIcons/tikTokIcon.png", url: "https://www.tiktok.com", tag1: "videos", tag2: "stream", tag3: "watch", tag4: "bitch"},
	
	
	{ name: "Tumblr", disc: "Social Media", image: "images/socialIcons/tumblrIcon.png", url: "https://www.tumblr.com", tag1: "social media", tag2: "friends", tag3: "memes", tag4: "chat"},
	
	

	{ name: "Twitter", disc: "Social Media", image: "images/socialIcons/twitterIcon.png", url: "https://mobile.twitter.com", tag1: "social media", tag2: "tweet", tag3: "memes", tag4: "news"},
 
	{name: "YoSup", disc: "Nostr Client", image: "images/socialIcons/yosup.png", url: "https://yosup.app", tag1: "nostr", tag2: "social", tag3: "decentralized", tag4: "free speech"},
	
	
	]
	
	
	
	const showApps = () => {
  let output = ""
  socialApps.forEach(
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









