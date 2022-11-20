store(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

function store(arr){
    const products = [];

    arr.forEach(line => {
        let product = createProduct(line);
        products.push(product);
    })

    products.sort((a, b) => a.name.localeCompare(b.name));
    orderSubGroupByPrice(products);
    print(products);
}

function orderSubGroupByPrice(products){
    let letter = products[0].name[0];
    let firstIndex = 0;
    let length = 0;
   
    for(let i = 0; i < products.length; i++){
        let product = products[i];
       
        if(i === products.length - 1 || (i > 0 && product.name[0] !== letter)){

            if(i === products.length - 1){
                length++;
            }

            letter = product.name[0];
            let subArr = products.splice(firstIndex, length);
            subArr.sort((a, b) => b.price - a.price);
            subArr.forEach((e, i, arr) => {
                products.splice(firstIndex + i, 0, arr[i]);
            });

            firstIndex = i;
            length = 0;
        }
        length++;
    }
}


function print(products){
    let letter = "";
    products.forEach(p => {
        if(p.name[0] !== letter){
            letter = p.name[0];
            console.log(letter);
        }
        console.log(` ${p.name}: ${p.price}`)
    })
}

function createProduct(txt){
    let dataArr = txt.split(":").map(e => e.trim());
    let name = dataArr[0];
    let price = Number(dataArr[1]);

    let product = {
        name: name,
        price: price
    }

    return product;
}