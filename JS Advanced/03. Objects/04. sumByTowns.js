sumByTowns(['Sofia',
'20',
'Varna',
'3',
'Sofia',
'5',
'Varna',
'4']
);

sumByTowns(['Sofia',
'20',
'Varna',
'3',
'sofia',
'5',
'varna',
'4']
);

function sumByTowns(arr){
    const objects = [];
    arr.forEach((e, index, a) => {
        if(index % 2 === 0){
          
        let town = a[index];
        let population = +a[index + 1];
     
        if(objects.some(e => e.town === town)){
            let index = objects.findIndex(o => o.town === town);
            let obj = objects[index];
            obj.population += population;
        }
        else
        {
            objects.push({town: town, population: population});
        }
    }
    })

    console.log(JSON.stringify(objects))
}