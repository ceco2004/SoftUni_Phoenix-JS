function solve() {
    let btn = document.getElementsByTagName("button")[0];
    btn.addEventListener("click", addNames);
}

function addNames(e){
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let inputLabel = document.querySelector("#exercise input");
    let input = inputLabel.value;
    inputLabel.value = "";
    let names = input.split(",").map(n => n.trim());

    let olChildren = Array.from(document.getElementsByTagName("ol")[0].children);

    names.forEach(n => {
        let firstChar = n[0];
        let index = alphabet.indexOf(firstChar.toLowerCase());
        
        let olElement = olChildren[index];
        let namesInItem = olElement.textContent.split(",").map(n => n.trim()).filter(Boolean);
        namesInItem.push(n);
        namesInItem.sort();
        olElement.textContent = namesInItem.join(", ");
    })

}