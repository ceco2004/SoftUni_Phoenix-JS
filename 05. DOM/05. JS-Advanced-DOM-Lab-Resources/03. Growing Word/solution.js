function growingWord() {

  let paragrapfs = document.querySelectorAll(".conditions p");
  paragrapfs.forEach(p => {
    let style = p.getAttribute("style");
    if(style){
      let data = style.split(" ");
      console.log(data);
      let size = +data[1].replace("px;", "").trim();
      let color = data[3].trim();
      
  
      switch(color){
        case "blue": color = "green";
          break;
        case "green": color = "red";
          break;
        case "red": color = "blue";
          break;
      }
  
      if(size){
        size += +size;
      }
      else{
        size = 2;
      }
  
      p.setAttribute("style", `font-size: ${size}px; color: ${color}`);
    }
    else{
      p.setAttribute("style", "font-size: 2px; color: green")
    }

  })
  
 
}