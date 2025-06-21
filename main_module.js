const calcDisplay = document.querySelector(".Calculator.Display")

const Calculator = {

    operand_1 : "",
    operand_2 : "",
    operator : "",
    display : "",
    prev_ans : "",
    op_clicked : false, 
    running : false, 

    addFunc : (x,y) => { return x+y },
    subFunc : (x,y) => { return x-y},
    divFunc : (x,y) => { if ( y===0 ) { return "You cant divide by 0"} else { return x/y} },
    mulFunc : (x,y) => { return x*y},
    
    Turn_On : function(){ 

    this.running = true
    calcDisplay.style.opacity = "90%"
    calcDisplay.textContent = this.display },

    Show_Display : function(input){ 

        if ( this.running === true ) {

        if (this.op_clicked) {this.display = "", calcDisplay.textContent = this.display } 
        else { this.display = "", calcDisplay.textContent = this.display }

        this.display += input
        calcDisplay.textContent = this.display 

        if (this.operator === "") { this.operand_1 += input } else { this.operand_2 += input }

        if (input==='+') { this.operator = this.addFunc, this.op_clicked = true } 
        else if (input==='-') { this.operator = this.subFunc, this.op_clicked = true }
        else if (input==='X') { this.operator = this.mulFunc, this.op_clicked = true } 
        else if (input==='÷') { this.operator = this.divFunc, this.op_clicked = true }

        }
    },

    Clear_Display : function(){

    this.display = ""
    calcDisplay.textContent = this.display  
    
    this.operand_1 = ""
    this.operand_2 = ""
    this.operator = "" 
    this.op_clicked = false 
 
    },

    Delete_Display : function() { 

    if (this.operator === "") { this.operand_1 -= number, this.display -= input, calcDisplay.textContent = this.display}  
    else { this.operand_2 -= number, this.display -= input, calcDisplay.textContent = this.display }

    },

    Evaluate : function(){ 

    z = this.operator(parseFloat(this.operand_1),parseFloat(this.operand_2))
    this.display = z 
    calcDisplay.textContent = this.display

    this.operand_1 = z  
    this.operand_2 = ""
    this.operator = ""

    },
};
