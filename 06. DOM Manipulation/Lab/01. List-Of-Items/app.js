(function listenerUl(){
    document.getElementById("items").addEventListener("click", removeElement);
})();

function removeElement(e){
    
    let zone = e.target;
    if(zone.textContent === "[Delete]"){
        let parent = zone.parentNode;
        parent.remove();
    }
}


function addItem() {
    let input = document.getElementById("newItemText");
    let text = input.value;
    text += `<a href="#">[Delete]</a>`;

    input.value = "";

    let newLi = document.createElement("li");
    newLi.innerHTML = text;

    let ul = document.getElementById("items");
    ul.appendChild(newLi);
}

function remove(e){
    e.preventDefault;
   e.target.remove;
}