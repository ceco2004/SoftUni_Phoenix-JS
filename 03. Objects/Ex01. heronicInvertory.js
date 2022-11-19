
invertory(['Isacc / 25 / Apple, GravityGun',
           'Derek / 12 / BarrelVest, DestructionSword',
           'Hes / 1 / Desolator, Sentinel, Antara']);

invertory(['Jake / 1000 / Gauss, HolidayGrenade']);


function invertory(arr){
    const heroes = [];
    arr.forEach(line => {
        const hero  = createHero(line);
        heroes.push(hero);
    })

    console.log(JSON.stringify(heroes));
}

function createHero(line){
    let data = line.split("/").map(e => e.trim());
    let hero = {
        name: data[0],
        level: Number(data[1]),
        items: data[2].split(",").map(e => e.trim())
    }
    return hero;
}