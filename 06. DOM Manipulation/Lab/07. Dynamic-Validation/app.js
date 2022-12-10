function validate() {
    let emailEl = document.getElementById("email");
    emailEl.addEventListener("focusout", validateEmail);

    function validateEmail(){
        let email = emailEl.value;
    
        let reEx = new RegExp(/[a-z0-9]+@[a-z0-9]+\.[a-z]+/, "gm");
        let correct = email.match(reEx);
    
        if(correct){
            removeError();
        }
        else{
            allertIncorectMail();
        }
    }
    
    function removeError(){
        emailEl.classList.remove("error");
    }

    function allertIncorectMail(){
        emailEl.classList.add("error");
    }
}

