let container = document.querySelector(".container");
let btn = document.querySelector("button");
CreateGrid(16);
function CreateGrid( size )
{
    container.innerHTML = '';
    for ( let i = 0 ; i < size*size ; ++i ) 
    {

        let div = document.createElement("div");
        div.classList.add("square");
        div.style.height = `${480/size}px` ; 
        div.style.width = `${480/size}px` ; 
        container.appendChild(div);
        div.addEventListener("mouseover",() => 
        {
            div.style.cssText += "background-color: blue ; "
        });
    }
}
btn.addEventListener("click",() => 
{
    let size = parseInt(prompt("Enter the grid size:"), 10);
    CreateGrid(size);
})