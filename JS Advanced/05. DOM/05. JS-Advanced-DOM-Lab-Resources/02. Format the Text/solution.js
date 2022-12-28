function solve() {
  
  let inputEl = document.getElementById("input");
  let stringArr = inputEl.textContent.split(".").map((e, i, a) => i !== (a.length - 1) ? e + "." : e);
  inputEl.textContent = "";
  let outputDiv = document.getElementById("output");

  let len = stringArr.length;
  for(let i = 0; i < len; i += 3){
    let par = document.createElement("p");
    let contentP = stringArr[i];
     if(i + 1 < len){
      contentP += stringArr[i + 1];
     }

     if(i + 2 < len){
      contentP += stringArr[i + 2];
     }

     par.textContent = contentP;
     outputDiv.appendChild(par);

  }

}