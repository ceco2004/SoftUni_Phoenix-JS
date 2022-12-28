function lockedProfile() {
   let btns = Array.from(document.querySelectorAll("button"));
   btns.forEach(b => b.addEventListener("click", showMore));

   function showMore(){
        let hiden = this.previousElementSibling;
        
        if(this.textContent === "Hide it"){
            this.textContent = "Show more";
            hiden.removeAttribute("style");
        }
        else if(this.textContent === "Show more"){
            
            let lockRadio = this.parentNode.children[2]
            if(lockRadio.checked === false){
                this.textContent = "Hide it";
                hiden.setAttribute("style", "display: block");
            }
        }
       
   }
}