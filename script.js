const resetGridButton = document.querySelector('#resetGrid');

function resetGrid() {
    let noSquares = Number(prompt("How many sqaures do you want per side?"));
    if (isNaN(noSquares) || noSquares <=0){
        alert("Please enter a valid number greater than 0.");
        resetGrid(); // better to use while loop instead of recursive for user input to avoid stack overflow.
    };
    noSquares = Math.min(noSquares,100);  // Limit to 100
    createGrid (noSquares);
}

function createGrid (noSquares) {
    const mainContainer = document.querySelector('#mainContainer');
    mainContainer.innerHTML = ''; // clear previous grid
    
    let cellNumber = 1; // Counter to label each small cell

    // Outer loop for creating rows in the grid
    for (let i = 0; i < noSquares; i++) {
        const rowDiv = document.createElement('div'); // Create a row

        // Inner loop for creating columns in each row
        for (let j = 0; j < noSquares; j++) {
            const cellDiv = document.createElement("div"); // Create a cell
            cellDiv.setAttribute('data-num', cellNumber);
            cellDiv.setAttribute('class', 'cell');

             // Style the cell
            cellDiv.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 8px;
            border: 0.5px dotted red;
            flex: 1 1 0;
            `;

            cellDiv.textContent = cellNumber; // Cell number
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

    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('mouseover', changeBackgroundRandom);
        cell.addEventListener('mouseout',changeBackgroundRandom);
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = 'black';
        });
    });
}
function getRandomInt(num){
    return (Math.floor(Math.random()*num)+1);
}

function changeBackgroundRandom(e){
    e.target.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
}
resetGridButton.addEventListener('click',resetGrid)



