const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Function to change the mode
function changeMode(value) {
    console.log(value);
    nav.style.backgroundColor = value === 'Dark' ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = value === 'Dark' ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = value + ' Mode';

    if(value === 'Dark') {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    } else {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    }
    image1.src = 'img/Web_' + value + '.svg';
    image2.src = 'img/Articles_' + value + '.svg';
    image3.src = 'img/Goals_' + value + '.svg';
}

// Function to change the theme dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');         
        changeMode('Dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); 
        localStorage.setItem('theme', 'light');       
        changeMode('Light');
    } 
}

// Add Event Listner
toggleSwitch.addEventListener('change', switchTheme);

//  Check Local Storage
const currentTheme = localStorage.getItem('theme');

if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        changeMode('Dark');
    }
}