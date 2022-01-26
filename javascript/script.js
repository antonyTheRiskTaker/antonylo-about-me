// The toggle button
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
});

// Popup Modal
document.getElementById('button').addEventListener('click', 
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

// Popup Modal (Close Button)
document.querySelector('.close').addEventListener('click', 
function() {
  document.querySelector('.bg-modal').style.display = 'none';
});