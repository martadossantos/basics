// Main

let body = document.querySelector('body');

document.addEventListener('DOMContentLoaded',function(){

	document.body.classList.remove('loading');
	
});


// Scroll Into View

let goToTop = function() {

	window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})

};


// Open and Close Company's Info + Add .inview class to Close Button

let showCompanyInfo = function() {

	let activeSection = document.querySelector('.sb-wrapper.active');

	let buttons = activeSection.querySelectorAll('.company-click');
	let sections = activeSection.querySelectorAll('.company-info-wrapper');

	buttons.forEach(button => {

		let buttonName = button.getAttributeNode('data-button-name').value;

		button.addEventListener('click', function() {
			event.preventDefault();

			let section = activeSection.querySelector("[data-section-name=" + buttonName + "]");

			sections.forEach(sec => {
				if (sec == section) {
					sec.classList.toggle('d-none');
					let parentSec = sec.parentElement;
					parentSec.classList.toggle('neg-flex');
					parentSec.querySelector('.close-text').classList.toggle('d-none');
					parentSec.querySelector('.close-text').classList.toggle('inview');
					parentSec.querySelector('.name-inner').classList.toggle('bk-bg');

				} else {
					sec.classList.add('d-none');
					let parentSec = sec.parentElement;
					parentSec.classList.remove('neg-flex');
					parentSec.querySelector('.close-text').classList.add('d-none');
					parentSec.querySelector('.close-text').classList.remove('inview');
					parentSec.querySelector('.name-inner').classList.remove('bk-bg');
				};
			});


			goToTop();
		})

	});

};

showCompanyInfo();



// Find Active Button

let findActive = function() {
	let activeButton = document.querySelector('.inview');

	return activeButton;
};

// Button Scroll Function

window.addEventListener('scroll', function() {

	let activeButton = findActive();

	let nameDiv = activeButton.previousSibling;
	let p1 = activeButton.parentElement;
	let p2 = p1.parentElement;
	let p3 = p2.nextSibling;
	let cDesc = p3.nextSibling;

	let disFromTop = nameDiv.getBoundingClientRect().top;
	let disFromBottom = nameDiv.scrollHeight;
	let descSize = cDesc.scrollHeight;

	if (disFromTop < 10 && Math.abs(disFromTop) < (descSize - 10)) {
		activeButton.style.position = 'fixed'
		activeButton.style.top = '10px'
		activeButton.style.right = '10px'
	} if (disFromTop > 10) {
		activeButton.style.position = ''
		activeButton.style.top = ''
		activeButton.style.right = ''
	} if (Math.abs(disFromTop) > (descSize - 10)) {
		activeButton.style.position = 'absolute'
		activeButton.style.top = descSize + 'px'
		activeButton.style.right = '0px'
	}
	
});


// Search Function Sat

let names = document.querySelectorAll('.name-inner');
let searchEl = document.querySelector('#input-search');

let doSearch = function() {

	names.forEach(name => {	
		let searchTerm = searchEl.value.toUpperCase();
		let innerName = name.textContent.toUpperCase();


		if (innerName.includes(searchTerm)) {
			let parent = name.parentElement;
			let largeParent = parent.parentElement;

			largeParent.classList.remove('d-none');

		} else {
			let parent = name.parentElement;
			let largeParent = parent.parentElement;

			largeParent.classList.add('d-none');
		}
		
	});

};


searchEl.addEventListener('keyup', function() {
	doSearch();
});


// Sort Me

let allSections = document.querySelectorAll('.sb-wrapper');
let initialSection = document.querySelector('#sb-wrapper-initial');

function sortMe (element) {
	allSections.forEach(sec => {
			if (sec === element) {
				sec.classList.toggle('d-none');
				sec.classList.toggle('active');

				
			} else {
				sec.classList.add('d-none')
				sec.classList.remove('active')
			}
		})

		if (element.classList.contains('active') === false) {
			initialSection.classList.add('active')
			initialSection.classList.remove('d-none')		
		}	
};


// Sort Click Events

	let sbButtons = document.querySelectorAll('.sb-button');

	sbButtons.forEach(button => {
		button.addEventListener('click', function(event) {

			sbButtons.forEach(smButton => {

				if (smButton == this) {
					smButton.classList.toggle('g-bg');
					smButton.classList.toggle('bk-bg');
				} else {
					smButton.classList.remove('bk-bg');
					smButton.classList.add('g-bg');
				}

			})	
		})
	});

	let alphButton = document.querySelector('#alph-button');
	let hiEmpButton = document.querySelector('#hi-emp-button');
	let empSatButton = document.querySelector('#emp-sat-button');
	let revenueButton = document.querySelector('#revenue-button');

	alphButton.addEventListener('click', function() {

		let element = document.querySelector('#sb-wrapper-alph');
		sortMe(element);
		showCompanyInfo();
	}),

	hiEmpButton.addEventListener('click', function() {

		let element = document.querySelector('#sb-wrapper-high-emp');
		sortMe(element);
		showCompanyInfo();
	}),

	empSatButton.addEventListener('click', function() {

		let element = document.querySelector('#sb-wrapper-emp-sat');
		sortMe(element);
		showCompanyInfo();
	}),

	revenueButton.addEventListener('click', function() {

		let element = document.querySelector('#sb-wrapper-revenue');
		sortMe(element);
		showCompanyInfo();
	});


// Glossary

	let glossaryButton = document.querySelector('.glossary-title');
	let glossaryContent = document.querySelector('.glossary-content');

	glossaryButton.addEventListener('click', function() {

		if (glossaryButton.innerHTML === "Glossary (expand)") {
			glossaryButton.innerHTML = "Glossary (collapse)";
		} else {
			glossaryButton.innerHTML = "Glossary (expand)"
		};

		glossaryContent.classList.toggle('d-none');
		glossaryButton.classList.toggle('bk-bg');
		

	});


// More Info

	let moreInfoButton = document.querySelector('#footer-more-info');
	let moreInfoContent = document.querySelector('#js-desktop-footer');

	moreInfoButton.addEventListener('click', function() {

		moreInfoContent.classList.toggle('vis-hidden');
		moreInfoButton.classList.toggle('bk-bg');

	});



// Clear Any Open Companies DOESN'T WORK

// let clearAll = function () {
// 	let openCompanies = document.querySelectorAll('.company-info-wrapper');

// 	openCompanies.forEach(el => {
// 		if (el.classList.contains('d-none') === false) {
// 			el.classList.add('d-none')
// 			let elParent = el.parentElement
// 			elParent.querySelector('.close-text').classList.add('d-none')
// 			elParent.querySelector('.name-inner').classList.remove('bk-bg')
// 			elParent.classList.remove('neg-flex')
// 		}
// 	})
// }



// let addInView = function() {

// 	let closeButtons = document.querySelectorAll('.close-text');

// 	closeButtons.forEach(button => {
// 		if (button.offsetWidth > 0 && button.offsetHeight > 0) {
// 			button.classList.remove('notinview')
// 			button.classList.add('inview')
// 		} else {
// 			button.classList.add('notinview')
// 			button.classList.remove('inview')
// 		}	
// 	})

// };



// let searchIndex = [];
// let searchItem = {};

// names.forEach(name => {
// 	let innerName = name.textContent

// 	searchIndex.push({
// 		"name": innerName
// 	})

// });



// Fade In Tags

// window.addEventListener('load', function() {
// 	const animatedTags = document.querySelectorAll("#sb-wrapper-initial .names");

// 	animatedTags.forEach(tag => {
// 	  tag.style.opacity = 0
// 	})

// 	const fadeIn = function () {

// 	let delay = 0.01
	  
// 	  animatedTags.forEach(tag => {   
//         tag.style.animation = `fadeIn 0.05s ${delay}s both`
//         delay = delay + 0.01
// 	  })
// 	}

// 	fadeIn();
// });
