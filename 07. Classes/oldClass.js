function Rectangle1(w, h){
   
    let width = validateSide(w);
    let heigth = validateSide(h);

    function getWidth() {return  width};
    function getHeight() {return heigth};

    function setWidth(){width = validateSide(arguments[0])};
    function setHeight(){height = validateSide(arguments[0])};

   
    function validateSide(value){
        if(value <= 0){
            throw RangeError("Length of the side must be positive number")
        }
        return value;
    }
    function toString(){
    return `I'm a Rectangle with side A = ${width}, side B = ${heigth}, and area = ${area()}`
}
    function area(){
        return width * heigth;
    }
    
    return {
        heigth: getHeight,
        width: getWidth,
        setHeigth: setHeight,
        setWidth: setWidth,
        area: area,
        toString: toString
    }
}


let r = Rectangle1(5, 6);
console.log(r.area())
console.log(r.toString());
r.setWidth(20);
console.log(r.width())
console.log(r.area())
r.setHeigth(0);