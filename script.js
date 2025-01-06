mainContainer = document.querySelector('#mainContainer');
let cellNumber = 1; // Counter to label each small cell

// Outer loop for creating rows in the grid
for (let i = 0; i <= 15; i++) {
    let rowDiv = document.createElement('div'); // New row container
    
    // Inner loop for creating columns in each row
    for (let j = 0; j <= 15; j++) {
        let cellDiv = document.createElement("div"); // Individual cell
        
        // Style the cell
        cellDiv.style.cssText = `
        border: 0.5px solid red;
        width: 50px;
        height: 50px;
        flex: 1 1 0;
        `;
        cellDiv.textContent = `${cellNumber}`; // Cell number
        rowDiv.appendChild(cellDiv); 
        cellNumber++;
    }
    // Style the row container
    rowDiv.style.cssText = `
        display: flex;
        flex: 1 1 0;
        `;
    mainContainer.appendChild(rowDiv);
}