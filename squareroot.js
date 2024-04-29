// Prompt the user to enter a number
const number = prompt('Enter the number: ');
// Check if the input is a number
if(!isNaN(number)) {
    // Calculate the square root
    const result = Math.sqrt(number);
    console.log(`The square root of ${number} is ${result}`);
} else {
    console.log('Please enter a valid number');
}
