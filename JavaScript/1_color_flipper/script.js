// WHEN user clicks on the button,
// THEN the background color of the body changes to a random color.
//      The color name will also be displayed to the user.


const colors = ["red", "green", "blue", "rgba(255,255,0)", "#A020F0"];


// SELECTORS
const button = document.querySelector('#button');
const color = document.querySelector('.color');

// EVENT LISTENER for button click
button.addEventListener('click', () => {
    // ASSIGN random color to the document
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    button.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});

// FUNCTION to get a random color
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};