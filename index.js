/*
File: index.js
GUI Assignment: Creating an Interactive Dynamic Table
Kalin Toussaint, UMass Lowell Computer Science, Kalin_Toussaint@student.uml.edu
Copyright (c) 2024 by Kalin. All rights reserved. May be freely copied or
excerpted for educational purposes with credit to the author.
updated by KT on June 3, 2024
*/

// Event listener for the form submission
document.getElementById('multiplication-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const startHorizontal = parseInt(document.getElementById('start-horizontal').value);
    const endHorizontal = parseInt(document.getElementById('end-horizontal').value);
    const startVertical = parseInt(document.getElementById('start-vertical').value);
    const endVertical = parseInt(document.getElementById('end-vertical').value);

    // Validate the input values
    const errorMessage = validateInputs(startHorizontal, endHorizontal, startVertical, endVertical);

    if (errorMessage) {
        // Display an error message if validation fails
        document.getElementById('output').innerHTML = `<p style="color: red;">${errorMessage}</p>`;
        return;
    }

    // Generate the multiplication table
    generateTable(startHorizontal, endHorizontal, startVertical, endVertical);
});

/*
 * Function to validate the input values
 * Ensures inputs are numbers within the
 * specified range and that the start values are less than or equal to the end values
 */
function validateInputs(startH, endH, startV, endV) {
    if (isNaN(startH) || isNaN(endH) || isNaN(startV) || isNaN(endV)) {
        return "All inputs must be valid numbers.";
    }

    if (startH < -50 || startH > 50 || endH < -50 || endH > 50 || startV < -50 || startV > 50 || endV < -50 || endV > 50) {
        return "All numbers must be in the range -50 to 50.";
    }

    if (startH > endH) {
        return "Start Horizontal must be less than or equal to End Horizontal.";
    }

    if (startV > endV) {
        return "Start Vertical must be less than or equal to End Vertical.";
    }

    if ((endH - startH + 1) > 50 || (endV - startV + 1) > 50) {
        return "The range is too large. Please enter a smaller range.";
    }

    return null;
}

/*
 * Function to generate the multiplication table
 * Creates a table dynamically based on the provided input values
 */
function generateTable(startH, endH, startV, endV) {
    let table = '<table>';
    table += '<tr><th></th>'; // Empty top-left corner

    // Generate header row
    for (let h = startH; h <= endH; h++) {
        table += `<th>${h}</th>`;
    }
    table += '</tr>';

    // Generate the table rows
    for (let v = startV; v <= endV; v++) {
        table += `<tr><th>${v}</th>`;
        for (let h = startH; h <= endH; h++) {
            table += `<td>${h * v}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';

    // Insert the table into the page
    document.getElementById('output').innerHTML = table;
}
