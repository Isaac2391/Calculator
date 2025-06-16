let operand1 = 0
let operand2 = 0
let operator = " "

const calcDisplay = document.querySelector(".Calculator.Display")

calcDisplay.addEventListener("", () => { })

function operate(operand1,operand2,operator) {
    return operator(operand1,operand2);
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