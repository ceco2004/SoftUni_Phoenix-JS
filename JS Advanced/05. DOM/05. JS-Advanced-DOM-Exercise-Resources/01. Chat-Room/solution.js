function solve() {
  let sendBtn = document.getElementById("send");
  sendBtn.addEventListener("click", sendMsg);
}

function sendMsg(e){
   let textArea = document.getElementById("chat_input");
   let msg = textArea.value;
   textArea.value = "";

   let divContainer = document.getElementById("chat_messages");
   let newDiv = document.createElement("div");
   newDiv.classList.add("message", "my-message");
   newDiv.textContent = msg;
   divContainer.appendChild(newDiv);
}

