storeComponents(['SULS | Main Site | Home Page',
                 'SULS | Main Site | Login Page',
                 'SULS | Main Site | Register Page',
                 'SULS | Judge Site | Login Page',
                 'SULS | Judge Site | Submittion Page',
                 'Lambda | CoreA | A23',
                 'SULS | Digital Site | Login Page',
                 'Lambda | CoreB | B24',
                 'Lambda | CoreA | A24',
                 'Lambda | CoreA | A25',
                 'Lambda | CoreC | C4',
                 'Indice | Session | Default Storage',
                 'Indice | Session | Default Security']);

function storeComponents(arr){
    const db = [];

    arr.forEach(line => {
        storeComponent(line, db);
        reOrderDB(db);
    })

    printDB(db);
}

function printDB(db){
    db.forEach(s => {
        console.log(s.system);
        s.components.forEach(c => {
            console.log(`|||${c.component}`);
            c.subcomponents.forEach(e => {
                console.log(`||||||${e}`)
            })
        })
    })
}

function reOrderDB(db){
    db.sort((a, b) => {

        if(a.components.length === b.components.length){

            return a.system.localeCompare(b.system);
        }

        return b.components.length - a.components.length;
    })

    db.forEach(s => {
        s.components.sort((a, b) => {
            return b.subcomponents.length - a.subcomponents.length
        })
    })
}

function storeComponent(line, db){
    let data = line.split("|").map(e => e.trim());
    let systemName = data[0];   
    let componentName = data[1];
    let subcomponent = data[2];


    if(db.some(e => e.system === systemName) === false){
      
        let newSystem = {
            system : systemName,
            components: []
        }
        db.push(newSystem);

    }
    
    

    if(db.filter(s => s.system === systemName)[0].components.some(c => c.component === componentName) === false){

        let newComponent = {
            component: componentName,
            subcomponents: []
        }
        
        db.filter(s => s.system === systemName)[0]
        .components.push(newComponent);
    }
        
    db.filter(s => s.system === systemName)[0].components
      .filter(c => c.component === componentName)[0].subcomponents
      .push(subcomponent);

}