function attachEventsListeners() {
    document.getElementById("convert").addEventListener("click", convert);
}

function convert(){
    let value = +document.getElementById("inputDistance").value;
    let sourceUnit = document.getElementById("inputUnits").value;

    let meteters = convertToMeters(value, sourceUnit);

    let outputUnit = document.getElementById("outputUnits").value;
    let result = convertToOutput(meteters, outputUnit);
    document.getElementById("outputDistance").value = result;
   
}

function convertToOutput(value, outputunit){
    let result;
    switch(outputunit){
        case "km": result = value / 1000;
            break;
        case "m": result = value;
            break;
        case "cm": result = value / 0.01;
            break;
        case "mm": result = value / 0.001;
            break;
        case "mi": result = value / 0.01;
            break;
        case "yrd": result = value / 0.9144;
            break;
        case "ft": result = value / 3048;
            break;
        case "in": result = value / 0.0254;
            break;
    }

    return result;
}

function convertToMeters(value, sourceUnit){
    let result;
    switch(sourceUnit){
        case "km": result = value * 1000;
            break;
        case "m": result = value;
            break;
        case "cm": result = value * 0.01;
            break;
        case "mm": result = value * 0.001;
            break;
        case "mi": result = value * 0.01;
            break;
        case "yrd": result = value * 0.9144;
            break;
        case "ft": result = value * 3048;
            break;
        case "in": result = value * 0.0254;
            break;
    }

    return result;
}