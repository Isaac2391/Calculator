const calcDisplay = document.querySelector(".Calculator.Display")


const Calculator = {

    operand_1 : "",
    operand_2 : "",
    operator : "",
    running : false, 
    display : "",

    addFunc : (x,y) => { return x+y },
    subFunc : (x,y) => { return x-y},
    divFunc : (x,y) => { if ( y===0 ) { return "You cant divide by 0"} else { return x/y} },
    mulFunc : (x,y) => { return x*y},
    
    AnsFunc  : () => { calcDisplay.textContent = prevAns},

    Turn_On : function(){ 

    this.running = true
    calcDisplay.style.opacity = "90%"
    calcDisplay.textContent = this.display },

    Show_Display : function(input){ 

        if (this.display != "") { this.display = "", calcDisplay.textContent = this.display}

        if ( this.running===true ) {
        this.display += input
        calcDisplay.textContent = this.display 
     } 

     if (input==='+') { this.operator = this.addFunc } else if (input==='-') { this.operator = this.subFunc }
     else if (input==='X') { this.operator = this.mulFunc } else if (input==='÷') { this.operator = this.divFunc }

    },

    Clear_Display : function(){

    this.display = ""
    calcDisplay.textContent = this.display  
    
    this.operand_1 = ""
    this.operand_2 = ""
    this.operator = "" 
 
    },

    Delete_Display : function() { 

    },

    operandInputFunc : function(number) {
        if (this.operator === "") { this.operand_1 += number} else { this.operand_2 += number }
     },

    Evaluate : function(){ 

    this.display = this.operator(parseFloat(this.operand_1),parseFloat(this.operand_2))
    calcDisplay.textContent = this.display

    this.operand_1 = 0
    this.operand_2 = 0
    this.operator = ""

    },
};
