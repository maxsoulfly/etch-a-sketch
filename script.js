const container = document.querySelector('#container');
const gridX = 16;
const gridY = 16;

const createGrid = (gridX, gridY) => {
    // for loops to create grid
    for(let x = 0; x < gridX; x++) {
        for(let y = 0; y < gridY; y++) {
            let div = document.createElement('div');
            div.classList.add("grid-item");
            // div.textContent = `${x},${y}`;
            div.id = `grid-item-${x}-${y}`;

            div.addEventListener('click', ()=>{
                div.classList.toggle('painted');
            });

            container.appendChild(div);
        }
    }
}

const togglePaint = () => {

}

createGrid(gridX, gridY);