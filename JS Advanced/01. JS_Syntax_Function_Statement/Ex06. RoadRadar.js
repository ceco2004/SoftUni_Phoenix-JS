
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');


function roadRadar(speed, area){
    let overSpeed = calculateOverSpeed(speed, area);
    let result;
    if(overSpeed <= 0){
        return;
    }

    if(overSpeed <= 20){
        result = "speeding";
    }
    else if(overSpeed <= 40){
        result = "excessive speeding";
    }
    else{
        result = "reckless driving";
    }
    console.log(result);
}


function calculateOverSpeed(speed, area){
    let result = 0;
    switch(area){
        case "city": result = speed - 40;
            break;
        case "residential": result = speed - 20;
            break;
        case "interstate": result = speed - 90;
            break;
        case "motorway": result = speed - 130;
            break;
    }
    return result;
}