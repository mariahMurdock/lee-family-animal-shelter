function buildDynamicNav() {
  const navbarSections = ['', 'About', 'Dogs', 'Cats', 'Exotic', 'Contact'];
  const navbarHrefs = ['', '#about', '#dogs', '#cats', '#exotic', '#contact'];
  const navBarUl = document.querySelector('#navbar__list');
  for (let i = 0; i < 6; i++) {
    const navLi = document.createElement('li');
    navBarUl.appendChild(navLi);
    const btn = document.createElement('button');
    navLi.appendChild(btn);
    btn.setAttribute('class', 'button');
    const anchorElements = document.createElement('a');
    btn.appendChild(anchorElements);
    anchorElements.setAttribute('href', navbarHrefs[i]);
    anchorElements.textContent = navbarSections[i];
  }
}
console.log(buildDynamicNav());


// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  myFunction()
};

// Get the navbar
const navbar = document.getElementById("navbar__list");

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// add highlight to navbar
let allElements = document.getElementsByClassName('button');
for (let i = 0; i < allElements.length; i++) {
  // add event listener while iterating through btn class elements
  allElements[i].addEventListener('click', function() {
    // if any, remove all active classes
    let currentElements = document.getElementsByClassName('active');
    // grab active class
    if (currentElements.length > 0) {
      // replace active class with empty string
      currentElements[0].className = currentElements[0].className.replace(' active', '');
    }
    // replace className with active
    this.className += ' active';
  });
}
