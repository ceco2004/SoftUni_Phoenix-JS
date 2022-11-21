sortUsernames(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Ariel',
'Aizen',
'Ariel',
'Billy',
'Braston']);

sortUsernames(['Denise',
'Ignatius',
'Iris',
'Isacc',
'Indie',
'Dean',
'Donatello',
'Enfuego',
'Benjamin',
'Biser',
'Bounty',
'Renard',
'Rot']);

function sortUsernames(arr){
    arr = arr.filter((e, i, a) => a.indexOf(e) === i);
    arr.sort(orderUsernames);
    console.log(arr.join("\n"));
}

function orderUsernames(a, b){
    if(a.length === b.length){
         return a.localeCompare(b);
    }
    return a.length - b.length;

}