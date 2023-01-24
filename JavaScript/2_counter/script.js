// Have a rolling count starting at zero
// WHEN the decrease button is clicked then minus one from the count
// WHEN the increase button is clicked then add one to the count
// WHEN the reset button is pressed then bring the count back to zero

// Initial count
let count = 0;

// QUERY SELECTORS
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('button');

// SELECT each button
buttons.forEach((button)  => {
    // ADD event listener to each button
    button.addEventListener('click', (e) => {
        // Get ID of each element
        const buttonId = e.currentTarget.id;
        // IF statements to alter count accordingly
        if(buttonId === 'decrease') {
            count--;
        } else if(buttonId === 'increase') {
            count++;
            
        } else {
            count = 0;
        }
        // IF statements to change the count display color accordingly
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color =  'black';
        }
        value.textContent = count;
    })
})