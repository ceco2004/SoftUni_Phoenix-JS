bottle(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']);

bottle(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);

function bottle(arr){
    const bottles =  [];
    
    const juise = [];

    arr.forEach(line => {
      
        let data = line.split("=>").map(e => e.trim());
        let fruit = data[0];
        let quantity = Number(data[1]);
        
        if(juise.some(e => Object.keys(e).some(r => r === fruit))){
            let obj = juise.filter(e => Boolean(e[fruit]))[0];
            obj[fruit] += quantity;

            checkQuantity(obj, fruit);
           
        }
        else{

            let newObj = {
                [fruit]: quantity
            }
            
            checkQuantity(newObj, fruit);
            
            juise.push(newObj);

        }

    })

    bottles.forEach(o => {
        for(let key in o){
            console.log(`${key} => ${o[key]}`)
        }
    })

    function checkQuantity(newObj, fruit){
      
        if(newObj[fruit] >= 1000){
           
            let newBottles = Math.floor(newObj[fruit] / 1000);
            let newFruitQuantity = newObj[fruit] % 1000;
           
            if(bottles.some(e => Object.keys(e).some(r => r === fruit))){
                let fruitBottles = bottles.filter(o => Boolean(o[fruit]))[0];
                fruitBottles[fruit] += newBottles;
            }
            else{
                let newObjj = {
                    [fruit]: newBottles
                }
                bottles.push(newObjj);
            }
            newObj[fruit] = newFruitQuantity;
        }
    }
    
}