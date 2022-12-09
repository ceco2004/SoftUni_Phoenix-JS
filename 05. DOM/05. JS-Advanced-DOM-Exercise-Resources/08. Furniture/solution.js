function solve() {
  let generateBtn = document.querySelector("#exercise button");
  generateBtn.addEventListener("click", parceData);

  let buyBtn = document.getElementsByTagName("button")[1];
  buyBtn.addEventListener("click", buyProducts);


  function buyProducts(e){
    let checkedBoxes = Array.from(document.querySelectorAll("input"));

    let products = [];
    let totalPrice = 0;
    let decFactorSum = 0;
    let productsCount = 0;


    checkedBoxes.forEach(b => {
        decFactorSum += +b.parentNode.previousElementSibling.firstElementChild.textContent;
        totalPrice += +b.parentNode.previousElementSibling.previousElementSibling.firstElementChild.textContent;
        products.push(b.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.textContent);
        productsCount++;
    })

    let productMsg = `Bought furniture: ${products.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: $ ${(decFactorSum / productsCount).toFixed(2)}`;

    addMessageToDOM(productMsg);

    function addMessageToDOM(productMsg){
      let resultArea = document.getElementsByTagName("textarea")[1];
      resultArea.value = productMsg;
    }
  }


  function parceData(e){
    let textArea = generateBtn.previousElementSibling;
    let jsonObj = textArea.value;
    textArea.value = "";

    let objects = JSON.parse(jsonObj);

    objects.forEach(o => {
      let productHTML = genarateProductHTML(o);
      addProductToDOM(productHTML);
    })
  }

  function genarateProductHTML(obj){
    let {img, name, price, decFactor} = obj;
    return `
    <td>
        <img
            src=${img}>
    </td>
    <td>
        <p>${name}</p>
    <td>
        <p>${price}</p>
    </td>
    <td>
        <p>${decFactor}</p>
    </td>
    <td>
        <input type="checkbox"  />
    </td>`;
  }

  function addProductToDOM(productHTML){
    let productsContainer = document.getElementsByTagName("tbody")[0];
    let newTR = document.createElement("tr");
    newTR.innerHTML = productHTML;
    productsContainer.appendChild(newTR);
  }






}