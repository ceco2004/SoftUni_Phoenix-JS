function solve() {
   let searchBtn = document.getElementById("searchBtn");
   searchBtn.addEventListener("click", search);
}

function search(){

   let searchArea = document.getElementsByTagName("input")[0];
   let searchCriteria = searchArea.value.trim();
   searchArea.value = "";

   let tableTr = Array.from(document.getElementsByTagName("tbody")[0].children);
   clearPreviosSeach();

   if(searchCriteria){
      tableTr.forEach(tr => {
         let tdS = Array.from(tr.children);
         tdS.forEach(e => {
            let content = e.textContent;
            console.log(content)
            if(content.toLocaleLowerCase().indexOf(searchCriteria.toLowerCase()) >= 0){
               tr.classList.add("select");
            }
         })
   
      })
   }

   function clearPreviosSeach(){
      tableTr.forEach(tr => {
               tr.classList.remove("select");
            })
   }
}