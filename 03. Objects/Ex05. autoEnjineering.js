collectCars(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);

function collectCars(arr){
    let cars = [];
    arr.forEach(line => {
        let car = produceCar(line);
        if(Object.values(cars).some(v => v.brand === car.brand)){
            cars.filter(o => o.brand == car.brand)[0].models.push(car); 
        }
        else{
            let brand = {
                brand: car.brand,
                models: [car]
            }

            cars.push(brand);
        }
    })

    printCars(cars);
}

function printCars(cars){
    cars.forEach(c => {
        console.log(c.brand);
        let autos = c.models;
        autos.forEach(c => {
            console.log(`###${c.model} --> ${c.quantity}`)
        })
    })
    
}

function produceCar(txt){
    let data = txt.split("|").map(e => e.trim());
    let car = {
        brand: data[0],
        model: data[1],
        quantity: Number(data[2])
    }
    return car;
}