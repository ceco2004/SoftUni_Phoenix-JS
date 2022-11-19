let arr = ['Lorem  ipsum ipsum ipsum dolor sit amet, consectetur adipiscing elit.', 'Pellentesque quis hendrerit dui.', 
'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.', 
'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.', 
'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.', 
'Morbi in ipsum varius, pharetra diam vel, mattis arcu.', 
'Integer ac turpis commodo, varius nulla sed, elementum lectus.', 
'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'];

extractUnique(arr);

function extractUnique(arr){
    const uniqueWords = [];
    arr.forEach(line => {
        let words = line.split(/[\W]+/gm).map(w => w.toLowerCase())
                    .filter(w => w);

        words.forEach(w => {
            if(uniqueWords.some(wo => wo === w) === false){
                uniqueWords.push(w);
            }
        })            
       
        
    })

    console.log(uniqueWords.join(", "))

}
