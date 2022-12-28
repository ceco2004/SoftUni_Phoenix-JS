function encodeAndDecodeMessages() {
    let btns = document.querySelectorAll("button");
    btns[0].addEventListener("click", encodeMsg);
    btns[1].addEventListener("click", decodeMsg);

    let areas = Array.from(document.querySelectorAll("textarea"));
    let forEncoding = areas[0];
    let forDecoding = areas[1];
    
    function encodeMsg(){
       let text = forEncoding.value;
       forEncoding.value = "";

       let result = [];
       Array.from(text).forEach(e => {
           result.push(String.fromCharCode(e.charCodeAt() + 1))
       })
       forDecoding.value = result.join("");
    }

    function decodeMsg(){
        let text = forDecoding.value;
        forDecoding.value = "";

        let result = [];
        Array.from(text).forEach(e => {
            result.push(String.fromCharCode(e.charCodeAt() - 1));
        })

        forEncoding.value = result.join("");
    }

}

