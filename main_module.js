let operand1 = 0
let operand2 = 0
let operator = null
let checker = undefined
let display = " "
let running = false 

const calcDisplay = document.querySelector(".Calculator.Display")
const onButton = document.getElementById("On_Button")

equalOperator.addEventListener("click", () => {});

function Turn_On() { 

    calcDisplay.style.opacity = "90%"
    running = true
}

function ShowDisplay(input) { 

    if ( running===true ) {

    display += input
    calcDisplay.textContent = display
 }

}

function ClearDisplay() {

    display = " "
    calcDisplay.textContent = display

}

function Deletion() { 
    display -= input 
    calcDisplay.textContent = display
}

Admin = { 

}
  
Arithmetic = { 

    Addition : (x,y) => { return (x + y)},
    Subtraction : (x,y) => { return x - y},
    Division : (x,y) => { return x/y },
    Multiplication : (x,y) => { return x*y},
    /* Equals displays result */

}


Lgrthm = { 

    
}


Expn = { 

    root_func : (x) => { return Math.sqrt(x)},
    exp_func : (x,y) => { return x**y},

}

Trigmtry = { 

    sin_func : (x) => { return Math.sin(x)},
    cos_func : (x) => { return Math.cos(x)},
    tan_func : (x) => { return Math.tan(x)},

}