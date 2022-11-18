marketLoad(['Sofia -> Laptops HP -> 200 : 2000',
            'Sofia -> Raspberry -> 200000 : 1500',
            'Sofia -> Audi Q7 -> 200 : 100000',
            'Montana -> Portokals -> 200000 : 1',
            'Montana -> Qgodas -> 20000 : 0.2',
            'Montana -> Chereshas -> 1000 : 0.3',
            'Sofia -> Laptops HP -> 10 : 2']);

function marketLoad(arr){

    const markets = {};
    arr.forEach(e => {
        let data = 
        e.split(/([A-z]+ |[A-z0-9 ]+ | [0-9]+.[0-9]*)/gm)
        .map(e => e.replaceAll("->", " ").replaceAll(":", " "))
        .filter(e => Boolean(e)).map(e => e.trim()).filter(e => Boolean(e));
        
        let city = data[0];
        let articul = data[1];
        let quantity = +(data[2]);
        let price = +(data[3]);

        if(Object.keys(markets).some(k => k === city)){
            let articuls = markets[city];
            if(articuls.some(a => Object.keys(a).some(k => k ===articul))) {  
                
                let objArticul = articuls.filter(x => Boolean(x[articul]))[0];
            
                objArticul[articul] += quantity * price;
                
            }
            else{
                let cityObj = markets[city];
                let articulObj = {};
                articulObj[articul] = quantity * price;
                cityObj.push(articulObj);
            }
        }
        else{
            let obj = {};
            obj[articul] = quantity * price;
            markets[city] = [];
            markets[city].push(obj);
        }
    })

   console.log(JSON.stringify(markets))
}