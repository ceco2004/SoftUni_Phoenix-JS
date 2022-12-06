function solve() {
  let quizzyDiv = document.getElementById("quizzie");
  quizzyDiv.addEventListener("click", clicked);
  let correctAnswers = 0;
  let answered = 0;




    function clicked(e){
    let clickedEl = e.target;
    let atributes = clickedEl.classList;
  
    if(atributes.contains("answer-text")){
      let answer = clickedEl.textContent;
      let correct = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
      answered++;
      if(correct.some(e => e === answer)){
        correctAnswers++;
       // console.log(`Correct answers: ${correctAnswers}`)
      }

      let section = clickedEl.parentNode.parentNode.parentNode.parentNode;
      section.classList.add("hidden")
      let nextSection = section.nextElementSibling;
      if(nextSection){
        nextSection.classList.remove("hidden");
      }
      
      if(answered === 3){
        let message = "You are recognized as top JavaScript fan!";
        if(correctAnswers !== 3){
          message = `You have ${correctAnswers} right answers`;
        }

        let resultH1 = document.createElement("h1");
        resultH1.innerHTML = message;
        let div = document.getElementById("quizzie");
        div.appendChild(resultH1);
      }
    }


  }

}


