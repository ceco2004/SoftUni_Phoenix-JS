function solve() {

  let divMiddlet = document.querySelector(".middled");
  divMiddlet.addEventListener("click", clickedLink);

}

function clickedLink(e){
     let pNode = e.target;
  
    while(true){
      if(pNode.hasAttribute("class") && pNode.getAttribute("class") === "link-1"){
        break;
      }
    pNode = pNode.parentNode;
  }

  let node = pNode.lastElementChild;

  let par = node.textContent;

  let dataParent = par.split(" ");
  +dataParent[1] ++;
  par = dataParent.join(" ");
  node.textContent = par;
}