function create(words) {
   words.forEach(w => {

      let div = document.createElement("div");
      let p = document.createElement("p");
      div.addEventListener("click", toggleContent);
      div.appendChild(p);
      p.setAttribute("style", "display: none");
      p.textContent = w;
      
      document.getElementById("content").appendChild(div);



   })

   function toggleContent(e){
      let p = this.children[0];
      let attribute = p.getAttribute("style");

      if(attribute === "display: none"){
        p.setAttribute("style", "display: block");
      }
      else if(attribute === "display: block"){
         p.setAttribute("style", "display: none");
      }
   }
}