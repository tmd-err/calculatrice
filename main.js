function buttonDisplay(){
    const numContainer = document.querySelector(".numbers-container") ;
    for(let i =0 ; i<10 ;i++){
        let span = document.createElement("button") ; 
        span.className = 'number'
        span.innerText = i ;
        numContainer.prepend(span)
    }
}
//show the numbers's button
buttonDisplay() ;
//calculating operations
document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("value");
    let buttons = document.querySelectorAll("button");
    let storedValue = '';

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.classList.contains("number")) {
                input.value += button.innerText;
            } else if (button.id === "equal") {
                try {
                    input.value = eval(storedValue + input.value);
                    storedValue = '';
                } catch (err) {
                    input.value = "Error";
                }
            } else if (button.id === "clear") {
                input.value = '';
                storedValue = '';
            } else {
                storedValue += input.value + button.innerText;
                input.value = '';
            }
        });
    });
});
//clear the input value
document.getElementById("clear").addEventListener("click",()=>{
    document.getElementById("value").value = "" ;
})