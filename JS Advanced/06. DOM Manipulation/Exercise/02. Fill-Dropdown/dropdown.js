function addItem() {
   let textEl = document.getElementById("newItemText");
   let valueEl = document.getElementById("newItemValue");

   let text = textEl.value;
   let value = valueEl.value;
   textEl.value = valueEl.value = "";

   let optionEl = document.createElement("option");
   let content = `${text} - ${value}`;
   optionEl.textContent = content;
   optionEl.setAttribute("value", content);

   let selectEl = document.getElementById("menu");
   selectEl.appendChild(optionEl);

}