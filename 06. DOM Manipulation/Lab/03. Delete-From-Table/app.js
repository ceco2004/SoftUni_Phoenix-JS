function deleteByEmail() {
   let searchElement = document.querySelector("input");
   let criteria = searchElement.value;
   searchElement.value = "";

   let table = document.querySelector("tbody");
   let rows = Array.from(table.children);

   let haveSuccess = false;
   rows.forEach(r => {
    Array.from(r.children).forEach(ch => {
        if(ch.textContent === criteria){
            r.remove();
            haveSuccess = true;
        }
    })
   })

   if(haveSuccess === false){
    document.getElementById("result").textContent = "Not found.";
   }
   
}