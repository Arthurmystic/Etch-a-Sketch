let resetGridButton = document.querySelector('#resetGrid')


function resetGrid() {
    let noSquares = Number(prompt("How many sqaures do you want per side?"));
    noSquares = noSquares <= 100 ? noSquares : 100; // limiting noSquares to 100
    gridMaker (noSquares);
}
// let cells;
function gridMaker (noSquares) {
    mainContainer = document.querySelector('#mainContainer');
    mainContainer.textContent = ''
    let cellNumber = 1; // Counter to label each small cell

    // Outer loop for creating rows in the grid
    for (let i = 0; i < noSquares; i++) {
        let rowDiv = document.createElement('div'); // New row container

        // Inner loop for creating columns in each row
        for (let j = 0; j < noSquares; j++) {
            let cellDiv = document.createElement("div"); // Individual cell
            cellDiv.setAttribute('data-num', cellNumber);
            cellDiv.setAttribute('class', 'cells');

            // Style the cell
            cellDiv.style.cssText = `
                font-size: 8px;
                border: 0.5px solid red;
                width: 3em;
                height: 3em;
                flex: 1 1 0px;
                `;
            cellDiv.textContent = `${cellNumber}`; // Cell number
            rowDiv.appendChild(cellDiv);
            cellNumber++;
        }
        // Style the row container
        rowDiv.style.cssText = `
        display: flex;
        flex: 1 1 0px;
        `;
        mainContainer.appendChild(rowDiv); 
    }
    let cells = document.querySelectorAll('.cells');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = `rgb(${Random(255)},${Random(255)},${Random(255)})`;
        });
        cell.addEventListener('mouseout', (e)=>{
            e.target.style.backgroundColor = `rgb(${Random(255)},${Random(255)},${Random(255)})`;
        });
        cell.addEventListener('click', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}
function Random(num){
    return (Math.floor(Math.random()*num)+1);
}
resetGridButton.addEventListener('click',resetGrid)



