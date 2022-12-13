function notify(message) {
    let div = document.getElementById("notification");
    div.textContent = message;
    div.setAttribute("style", "display: block");

    setTimeout(makeInvisible, 2000, div);
    
}

function makeInvisible(div){
    div.setAttribute("style", "display: none");
}

function blockTread(){
    let time =  Date.now() 
    while( Date.now() < time + 2000);
}