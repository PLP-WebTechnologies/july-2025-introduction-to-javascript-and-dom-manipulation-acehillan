// =======================================================
// PART 1: Variable Declarations and Conditionals
// =======================================================

// --- Variable Declarations ---
// Declare variables for different data types
const pageTitle = "JavaScript Fundamentals"; // String
let pageViews = 0; // Number
const isProjectComplete = false; // Boolean
const user = { // Object
    name: "John Doe",
    age: 30
};
const colors = ["Red", "Green", "Blue"]; // Array

// Log variables to the console for demonstration
console.log("--- PART 1: Variables ---");
console.log("Page Title:", pageTitle);
console.log("Initial Page Views:", pageViews);
console.log("Is Project Complete:", isProjectComplete);
console.log("User Object:", user);
console.log("Colors Array:", colors);

// --- Conditionals ---
// Function to demonstrate an if/else conditional
const checkAgeAndLog = () => {
    console.log("\n--- PART 1: Conditionals ---");
    // Prompt the user for their age
    const userAgeString = prompt("Please enter your age:");
    const userAge = parseInt(userAgeString, 10);

    // Check if the input is a valid number
    if (isNaN(userAge) || userAge <= 0) {
        console.log("Invalid age entered. Please enter a positive number.");
    } else {
        // Use an if/else if/else statement to check age categories
        if (userAge >= 18) {
            console.log("You are an adult and can vote.");
        } else if (userAge >= 13) {
            console.log("You are a teenager.");
        } else {
            console.log("You are a child.");
        }
    }
};

// Event listener for the Part 1 button
const checkAgeBtn = document.getElementById('checkAgeBtn');
if (checkAgeBtn) {
    checkAgeBtn.addEventListener('click', checkAgeAndLog);
}

// =======================================================
// PART 2: Custom Functions
// =======================================================

// --- Custom Function 1: Calculates the sum of two numbers ---
/**
 * Takes two numbers as input and returns their sum.
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function calculateSum(a, b) {
    return a + b;
}

// --- Custom Function 2: Displays a message on the webpage ---
/**
 * Takes a message and an element ID, then updates the innerHTML of that element.
 * @param {string} message The message to display.
 * @param {string} elementId The ID of the HTML element to update.
 */
function displayMessage(message, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = message;
    }
}

// Event listener for the Part 2 button
const calculateBtn = document.getElementById('calculateBtn');
if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
        const num1 = 10;
        const num2 = 25;
        const sum = calculateSum(num1, num2);
        const message = `The sum of ${num1} and ${num2} is: <strong>${sum}</strong>`;
        displayMessage(message, 'calculationResult');
    });
}

// =======================================================
// PART 3: Loop Examples
// =======================================================

// --- Loop Example 1: `for` loop to iterate and add elements ---
const generateListWithForLoop = () => {
    const loopList = document.getElementById('loopList');
    // Clear the existing list before regenerating
    loopList.innerHTML = ''; 

    // Use a for loop to create and append list items
    console.log("\n--- PART 3: For Loop ---");
    for (let i = 0; i < 5; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = `List item number ${i + 1}`;
        loopList.appendChild(listItem);
        console.log(`Adding list item: ${listItem.textContent}`);
    }
};

// --- Loop Example 2: `forEach` loop to iterate through an array ---
const processArrayWithForEach = () => {
    const numbers = [10, 20, 30, 40, 50];
    let total = 0;
    
    console.log("\n--- PART 3: ForEach Loop ---");
    // Use forEach to sum up the numbers in the array
    numbers.forEach(number => {
        total += number;
        console.log(`Adding ${number}. Current total: ${total}`);
    });
    console.log(`Final total of the array: ${total}`);
};

// Event listener for the Part 3 button
const generateListBtn = document.getElementById('generateListBtn');
if (generateListBtn) {
    generateListBtn.addEventListener('click', () => {
        generateListWithForLoop();
        processArrayWithForEach(); // This loop's output is only in the console
    });
}

// =======================================================
// PART 4: DOM Interactions
// =======================================================

// --- DOM Interaction 1: Change text content ---
const domTextElement = document.getElementById('domText');
const changeTextBtn = document.getElementById('changeTextBtn');

if (changeTextBtn && domTextElement) {
    changeTextBtn.addEventListener('click', () => {
        console.log("\n--- PART 4: Changing Text Content ---");
        domTextElement.textContent = 'This text has been changed by JavaScript!';
    });
}

// --- DOM Interaction 2: Toggle a CSS class ---
const toggleBgBtn = document.getElementById('toggleBgBtn');
const part4Section = document.getElementById('part4-section');

if (toggleBgBtn && part4Section) {
    toggleBgBtn.addEventListener('click', () => {
        console.log("--- PART 4: Toggling CSS Class ---");
        // Toggles the 'highlight' class, which changes the background color
        part4Section.classList.toggle('highlight');
        console.log(`Toggling 'highlight' class. Current status: ${part4Section.classList.contains('highlight')}`);
    });
}

// --- DOM Interaction 3: Create and append a new element ---
const addElementBtn = document.getElementById('addElementBtn');
const newElementContainer = document.getElementById('newElementContainer');

if (addElementBtn && newElementContainer) {
    addElementBtn.addEventListener('click', () => {
        console.log("--- PART 4: Creating a New Element ---");
        // Create a new paragraph element
        const newParagraph = document.createElement('p');
        // Set its text content
        newParagraph.textContent = 'This is a brand new element created dynamically!';
        // Append the new element to its container
        newElementContainer.appendChild(newParagraph);
        console.log("New element added to the page.");
    });
}