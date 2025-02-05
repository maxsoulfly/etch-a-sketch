const container = document.querySelector('#container');
const resize = document.querySelector('#resize');
const slider = document.getElementById('gridSizeSlider');
const sliderContainer = document.getElementById('sliderContainer');
const valueDisplay = document.getElementById('gridSizeValue');

let gridSize = 16;

slider.addEventListener('input', () => {
  const newSize = slider.value;
  valueDisplay.textContent = newSize;
  updateGrid(newSize);
});


/**
 * updateGrid
 * 
 * Clears the existing grid and creates a new grid with the specified size.
 * 
 * @param {*} size 
 */
const updateGrid = (size) => {

    container.innerHTML = ''; // Clear existing grid
    gridSize = size;

    createGrid(gridSize);
  }

/**
 * createGrid
 * 
 * Creates a new grid with the specified size.
 * 
 */
const createGrid = () => {
    // create grid
    for(let x = 0; x < gridSize; x++) {
        for(let y = 0; y < gridSize; y++) {

            // create grid item
            let item = document.createElement('div');
            item.classList.add("grid-item");
            item.id = `grid-item-${x}-${y}`;

            // grid-item
            item.style.width = `calc(100% / ${gridSize})`;
            item.style.height = `calc(100% / ${gridSize})`;

            // grid item function
            item.addEventListener('click', ()=>{
                // console.log(item.classList);
                
                if(item.classList.contains('level-1')) {
                    item.classList.toggle('level-1');
                    item.classList.add('level-2');
                }
                else if(item.classList.contains('level-2')) {
                    item.classList.toggle('level-2');
                    item.classList.add('level-3');
                }
                else if(item.classList.contains('level-3')) {
                    item.classList.toggle('level-3');
                }
                else {
                    item.classList.toggle('level-1'); 
                }
                
            });

            container.appendChild(item);
        }
    }
}

/**
 * resizeElements
 * 
 * Resizes the grid container and grid items.
 * 
 */
const resizeElements = (gridItem) => {
    // container
    container.style.width = gridSize*gridSize + "px";
    container.style.height = gridSize*gridSize + "px";

    // grid-item
    gridItem.style.width = `calc(100% / ${gridItem})`;
    gridItem.style.height = `calc(100% / ${gridItem})`;
}

/**
 * addResetButton
 * 
 * Adds a reset button to the slider container.
 * 
 */
const addResetButton = () => {

    const button = document.createElement('button');
    button.textContent = 'Clear Grid';

    button.addEventListener('click', () => {
        updateGrid(gridSize);
    });

    sliderContainer.appendChild(button);
}

updateGrid(gridSize);
addResetButton();