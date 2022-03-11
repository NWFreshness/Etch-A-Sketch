const container = document.querySelector('.container');
const clear = document.querySelector('.clear');

function createGrid(num) {
    let size = num * num;
    for(let i = 0; i < size; i++){
        const div = document.createElement('div')
        div.classList.add('box');
        container.append(div);
    }

    const gridBoxes = document.querySelectorAll('.box');

    gridBoxes.forEach((box)=>{
        box.addEventListener('mouseenter', ()=>{
            box.classList.add('active');
        });
    })
}
createGrid(16);



clear.addEventListener('click', ()=>{
    // gridBoxes.forEach((box)=>{
    //     box.classList.remove('active');
    // });
    container.querySelectorAll('*').forEach(e => e.remove());
    // while(container.firstChild){
    //     container.remove(container.firstChild);
    // }

    const userInput = +prompt('What grid dimensions would you like?');
    if(userInput > 100) {
        userInput = +prompt('Please select a number lower than 100');
    }
    createGrid(userInput)
    container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`
    
})




