function solve() {
   let shoppingCartDiv = document.querySelector("body div");
   shoppingCartDiv.addEventListener("click", addProduct);

   let checkoutbtn = document.querySelector(".checkout");
   checkoutbtn.addEventListener("click", checkout);

   let text = "";
   let textArea = document.getElementsByTagName("textarea")[0];

   let totalPrice = 0;
   let productsArr = [];



   function addProduct(e){
      let element = e.target;
   
      if(element.classList.contains("add-product")){
          let parentDiv = element.parentNode;
          let product = parentDiv.previousElementSibling.firstElementChild.textContent;
          let price = +parentDiv.nextElementSibling.textContent;

          totalPrice += price;
          if(productsArr.some(p => p === product) == false){
            productsArr.push(product);
          }
          
          text += `Added ${product} for ${price} to the cart.\n`;
          textArea.textContent = text;
   
          
      }
   }


   function checkout(e){
      let btns = Array.from(document.getElementsByTagName("button"));
      btns.forEach(b => (b.setAttribute("disabled", "true"), b.classList.add("disable-btn")));
      let msg = `You bought ${productsArr.join(", ")} for ${totalPrice.toFixed(2)}.`;
      textArea.textContent += msg;
   }

}

