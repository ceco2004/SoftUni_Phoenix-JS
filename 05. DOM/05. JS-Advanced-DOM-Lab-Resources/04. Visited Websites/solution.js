function solve() {

  let divMiddlet = document.querySelector(".middled");
  divMiddlet.addEventListener("click", clickedLink);

}

function clickedLink(e){
  let node = e.target.parentNode.nextElementSibling;
  let par = node.textContent;

  let dataParent = par.split(" ");
  +dataParent[1] ++;
  par = dataParent.join(" ");
  node.textContent = par;
}