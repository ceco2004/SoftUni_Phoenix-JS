function attachGradientEvents() {
    let gradient = document.getElementById("gradient");
    gradient.addEventListener("mouseover", mouseOn);
}

function mouseOn(e){
    let width = e.target.offsetWidth;
    let pointWidth = e.clientX;
    let percent = pointWidth / width * 100;
    percent = percent > 100 ? 100 : percent;
    inportToDOM(percent);
}

function inportToDOM(percent){
    document.getElementById("result").textContent = `${percent.toFixed(2)}%`;
}