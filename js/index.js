class CalculatorOperations {
    constructor(num1 ){
        this.num1 = num1;
    }
    Sum (num1) {
        this.num1 + this.num2
    }
    Abstract(num1) {
        this.num1 - this.num2
    }
    Divide (num1) {
        this.num1 / this.num2
    }
    Multiply (num1) {
        this.num1 * this.num2
    }
}



let value;
let windowValue = document.getElementById("windowValue");
const buttonsElementsContainer = document.getElementById("buttonsElementsContainer");

buttonsElementsContainer.addEventListener("click" , (e)=> {
    let value = e.target.value;
    const match = ["AC","DEL","="]
    if(match.includes(value)){
        value = "";
        windowValue.innerHTML += value;
    }else {
        windowValue.innerHTML += value;
    }
    const nums = new CalculatorOperations(value);
});
