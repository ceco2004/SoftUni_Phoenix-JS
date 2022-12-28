function focus() {
    let divEl = document.querySelector("div");
    divEl.addEventListener("focusin", changeFocus);
    divEl.addEventListener("focusout", changeFocus);

}

function changeFocus(e){
    e.target.parentNode.classList.toggle("focused");
}