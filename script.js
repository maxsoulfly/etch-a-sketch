const container = document.querySelector('#container');
const resize = document.querySelector('#resize');
const slider = document.getElementById('gridSizeSlider');
const valueDisplay = document.getElementById('gridSizeValue');

let gridSize = 16;

slider.addEventListener('input', () => {
  const newSize = slider.value;
  valueDisplay.textContent = newSize;
  updateGrid(newSize);
});


const updateGrid = (size) => {

    container.innerHTML = ''; // Clear existing grid
    gridSize = size;

    createGrid(gridSize);
  }

/**
 * 
 */
const createGrid = () => {
    // for loops to create grid
    for(let x = 0; x < gridSize; x++) {
        for(let y = 0; y < gridSize; y++) {

            let item = document.createElement('div');
            item.classList.add("grid-item");
            item.id = `grid-item-${x}-${y}`;

            
            // container
            // container.style.width = gridSize*gridSize + "px";
            // container.style.height = gridSize*gridSize + "px";

            // grid-item
            item.style.width = `calc(100% / ${gridSize})`;
            item.style.height = `calc(100% / ${gridSize})`;
            // resizeElements(div);

            item.addEventListener('click', ()=>{
                item.classList.toggle('painted');
            });

            container.appendChild(item);
        }
    }
}

/**
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
 * 
 */
const createResizeArea = () => {
    const p = document.createElement('p');
    p.textContent = 'Change number of squares per side';
    const input = document.createElement('input');

    const button = document.createElement('button');
    button.textContent = 'Click To Resize';

    button.addEventListener('click', () => {
        let newSize = parseInt(input.textContent);
        gridSize = newSize > 100 ? newSize : 100;
        createGrid(gridSize);
    });

    resize.appendChild(p);
    resize.appendChild(input);
    resize.appendChild(button);
}

updateGrid(gridSize);