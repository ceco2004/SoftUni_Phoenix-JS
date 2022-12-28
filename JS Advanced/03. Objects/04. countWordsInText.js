countWords(["Far too slow, you're far too slow."]);
countWords(['JS devs use Node.js for server-side JS.-- JS for devs']);

function countWords(arr){
    arr.forEach(str => {
        let words = str.split(/([A-z']+)/gm).map(e=> e.trim()).filter(w => w.length > 1);
        let obj = {};
        words.forEach(w => {
            if(Object.keys(obj).some(o => o === w)){
                obj[w] ++;
            }
            else{
                obj[w] = 1;
            }
        })
        console.log(str)
    console.log(obj);

    });

}