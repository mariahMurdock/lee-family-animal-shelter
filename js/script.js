function buildDynamicNav() {
  const navbarSections = ['','About', 'Dogs', 'Cats', 'Exotic', 'Contact'];
  const navbarHrefs = ['index.html', 'dogs.html', 'cats.html', 'exotic.html', 'contact.html'];
  const navBarUl = document.querySelector('#navbar__list');
  for (let i = 0; i < 6; i++) {
    const navLi = document.createElement('li');
    navBarUl.appendChild(navLi);
    const btn = document.createElement('button');
    navLi.appendChild(btn);
    const anchorElements = document.createElement('a');
    btn.appendChild(anchorElements);
    anchorElements.setAttribute('href', navbarHrefs[i]);
    anchorElements.textContent = navbarSections[i];
  }
}
console.log(buildDynamicNav());


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

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
