var forEachPolyfill = function (callback, thisArg) {
  thisArg = thisArg || window;
  for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
  }
};

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = forEachPolyfill;
}



// function toggleMenu() {
//   var sidebar = document.querySelector('nav');
//   if (sidebar.classList.contains('collapsed')) {
//     sidebar.classList.remove('collapsed');
//     sidebar.classList.add('expanded');
//   } else {
//     sidebar.classList.remove('expanded');
//     sidebar.classList.add('collapsed');
//   }
// }

// maybe don't need to close it when links are clicked - either page will navigate or it will go external
// document.querySelectorAll('.nav__link').forEach(function(element) {
//   element.addEventListener('click', toggleMenu);
// });

// document.querySelectorAll('.toggle-menu').forEach(function(element) {
//   element.addEventListener('click', toggleMenu);
// });


// smooth scroll nav buttons
document.querySelectorAll('.navigation__link').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(e.target.dataset.scrollTo);
    target.scrollIntoView({ 
      behavior: 'smooth'
    });
    target.focus();
  });
});


