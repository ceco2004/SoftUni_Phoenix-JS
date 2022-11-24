function argumentInfo(){
    const args = [];
    const typeCount = [];
    for(let i = 0; i < arguments.length; i++){
        let a = arguments[i];
        let type = typeof(a);
        let value = a;
        let obj = {
            [type]: value
        }
        args.push(obj);

        if(typeCount.some(e => e.type === type) === false){
            let counter = {
                type: type,
                count: 0
            }
            typeCount.push(counter);
        }

        typeCount.filter(e => e.type === type)[0].count ++;
    }

    args.forEach(a => {
        for(let key in a){
            console.log(`${key}: ${a[key]}`)
        }
    })

    typeCount.sort(sortCounter);

    typeCount.forEach(e => {
        console.log(`${e.type} = ${e.count}`)
    })

}

function sortCounter(a, b){
    return b.count - a.count;
}


argumentInfo('cat', 42, function() {Array.sort();}, function () { console.log('Hello world!'); });