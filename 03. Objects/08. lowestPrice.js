findLowestPrice(['Sample Town | Sample Product | 1000',
                 'Sample Town | Orange | 2',
                 'Sample Town | Peach | 1',
                 'Sofia | Orange | 3',
                 'Sofia | Peach | 2',
                 'New York | Sample Product | 100',
                 'New York | Burger | 10']);

function findLowestPrice(arr){
    const products = [];
    
    arr.forEach(line => {
        let data = line
                   .split(/\b([A-z]+[ A-z]*) | (\1) | ([0-9]+[.0-9]*)/gm)
                   .filter(e => Boolean(e))
                   .map(e => e.trim())
                   .filter(e => e !== "|");
        let city = data[0];
        let product = data[1];
        let price = +(data[2]);

        if(products.some(p => p.product === product)){
            let productObj = products.filter(p => p.product === product)[0];
            if(productObj.price > price){
                productObj.city = city;
                productObj.price = price;
            }
        }      
        else{
            let productObj = {};
            productObj.city = city;
            productObj.product = product;
            productObj.price = price;

            products.push(productObj);
        }     

    })
    
    products.forEach(p => {
        console.log(`${p.product} -> ${p.price} (${p.city})`)
    })

}