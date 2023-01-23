// WHEN user clicks on the button,
// THEN the background color of the body changes to a random color selected from an array WITH MORE VARIETY.
//      The color name will also be displayed to the user.

// ARRAY of numbers and letters
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// SELECTORS
const button = document.querySelector('#button');
const color = document.querySelector('.color');

// EVENT LISTENER for button click
button.addEventListener('click', () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += getRandomHex();
    };
    document.body.style.backgroundColor = hexColor;
    color.textContent =  hexColor;
    button.style.backgroundColor = hexColor;
});

// FUNCTION to get a random color
function getRandomHex() {
    return hex[Math.floor(Math.random() * hex.length)];
};