function sortAscending(a, b){
    return a - b;
}

function sortDescending(a, b){
    return b - a;
}

function arrSort(arr, sortingMethod){
    let func;

    switch(sortingMethod){
        case "asc": func = sortAscending; break;
        case "dsc": func = sortDescending; break;
    }

    arr.sort(func);
    console.log(arr);
}

arrSort([14, 7, 17, 6, 8], 'asc');
arrSort([14, 7, 17, 6, 8], 'desc');