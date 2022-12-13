function attachEventsListeners() {

    let btns = Array.from(document.querySelectorAll("input[type='button']"));
    btns.forEach(b => b.addEventListener("click", convertUnit, btns));


    function convertUnit(){
        let input = this.previousElementSibling;
        let type = input.getAttribute("id");
        let value = +input.value;
    
        let allTime = convertToAll(convertToSeconds(type, value));
        
        btns.forEach(b => {
            b.previousElementSibling.removeAttribute("style");
            let type = b.previousElementSibling.getAttribute("id");
            let value = allTime[type];
            b.previousElementSibling.value = value;
            if(b !== this){
                b.previousElementSibling.setAttribute("style", "background-color: red")
            }
        })
        
    }
}



function convertToSeconds(type, value){
    switch(type){
            case "days": return value * 24 * 3600;
            break;
            case "hours": return value * 3600;
            break;
            case "minutes": return value * 60;
            break;
            case "seconds": return value;
            break;
    }
}

function convertToAll(seconds){
    return {
        seconds: seconds,
        minutes: seconds / 60,
        hours: seconds / 3600,
        days: seconds /  86400

    }
}