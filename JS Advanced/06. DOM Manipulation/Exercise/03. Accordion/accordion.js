function toggle() {
    let btn = document.querySelector("span");
    let btnText = btn.textContent;

    let divContainer = document.getElementById("extra");

    switch(btnText){
        case "Less": showLess();
            break;
        case "More": showMore();
            break;
    }

    function showLess(){
        btn.textContent = "More";
        divContainer.setAttribute("style", "display: none");
    }

    function showMore(){
        btn.textContent = "Less";
        divContainer.setAttribute("style", "display: block")
    }

}