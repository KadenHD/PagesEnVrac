// HAMBURGER

const hamburgerIcon = document.querySelector(".hamburger-icon");
const mobileNav = document.querySelector("nav");

let navOpen = true;
const showNav = () => {
	if (navOpen) {
		mobileNav.style.left = "0";
		navOpen = false;
	} else {
		mobileNav.style.left = "-900px";
		navOpen = true;
	}
}

hamburgerIcon.addEventListener('click', showNav);

// LOGIN SIGNUP

var logincontainer = document.querySelector('#logincontainer');
var signupcontainer = document.querySelector('#signupcontainer');
var signuptab = document.querySelector ('#signup-tab');
var logintab = document.querySelector ('#login-tab');
var loginlink = document.querySelector('.loginlink');
var signuplink = document.querySelector('.signuplink');

signuptab.addEventListener('click', function (){
	signupactive();
});

logintab.addEventListener('click', function (){
	loginactive();
});

loginlink.addEventListener('click', function (){
	loginactive();
});

signuplink.addEventListener('click', function (){
	signupactive();
});

function loginactive(){
	logincontainer.style.display = "block";
	signupcontainer.style.display ="none";
	logintab.classList.add('active');
	signuptab.classList.remove('active');
}

function signupactive(){
	logincontainer.style.display = "none";
	signupcontainer.style.display ="block";
	signuptab.classList.add('active');
	logintab.classList.remove('active');
}

//PRODUIT THUMBNAIL

var thumbnails = document.getElementsByClassName('thumbnail')
var activeImages = document.getElementsByClassName('active')

for (var i=0; i < thumbnails.length; i++){

	thumbnails[i].addEventListener('click', function(){
		console.log(activeImages)
		
		if (activeImages.length > 0){
			activeImages[0].classList.remove('active')
		}
		

		activeImages.classList.add('active')
		document.getElementById('featured').src = activeImages.src
	})
}