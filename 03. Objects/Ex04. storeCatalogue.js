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
    print(products);
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