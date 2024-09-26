let input = document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let operator = ["+","-","*","/","%","="];
let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "=" && string !== ""){
            try {
                string = eval(string.replace("%","/100"));  
            } catch (error) {
                string = "Error";
            }
        }
        else if(e.target.innerHTML == "AC"){
            string = "";
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);
        }
        else{
            if(string == "" && operator.includes(e.target.innerHTML)) return;
            string = string+e.target.innerHTML;
        }
        input.value = string;
    })
});