let printArr = (arr) =>{
   
    let delimiter = arr[arr.length - 1];
    console.log(delimiter)
    let tempArr = arr.slice(0, (arr.length - 1));

    console.log(tempArr.join(delimiter));
}

printArr(['One', 'Two', 'Three', 'Four', 'Five', '-']);
printArr(['How about no?', 'I','will', 'not', 'do', 'it!', '_']);