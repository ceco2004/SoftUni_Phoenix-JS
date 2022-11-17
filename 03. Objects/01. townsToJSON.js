let result = solve(['| Town | Latitude | Longitude |',
                    '| Sofia | 42.696552 | 23.32601 |',
                    '| Beijing | 39.913818 | 116.363625 |']);
let result2 = solve(['| Town | Latitude | Longitude |',
                     '| Veliko Turnovo | 43.0757 | 25.6172 |',
                     '| Monatevideo | 34.50 | 56.11 |']);
console.log(result);
console.log(result2);


function solve(arr){
    
    let towns = [];
    for(let i = 1; i < arr.length; i++){
        let row = arr[i].split(/[\|]/g).filter(x => x !== '').map(e => e.trim(' '));
        
        let town = {
            Town: row[0],
            Latitude: Number(row[1]).toFixed(2),
            Longitude: Number(row[2]).toFixed(2)
        }
            towns.push(town);
    }

    return JSON.stringify(towns);
}