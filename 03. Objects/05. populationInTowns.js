calculatePopulation(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
);

calculatePopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);

function calculatePopulation(arr){

    let obj = {};
     arr.forEach(e => {
        let data = e.split("<->").map(e => e.trim());
        let city = data[0];
        let population = +(data[1]);
        if(Object.keys(obj).some(o => o === city)){
            obj[city] += population;
        }
        else{
            obj[city] = population;
        }
      })

      for(let key in obj){
        console.log(`${key}: ${obj[key]}`)
      }
}