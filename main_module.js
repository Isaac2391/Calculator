const calcDisplay = document.querySelector(".Calculator.Display")


const Calculator = {

    operand_1 : 0,
    operand_2 : 0,
    operator : " ",
    running : false, 
    display : "",
    prevAns : 0,

    Turn_On : function(){ 

    this.running = true
    calcDisplay.style.opacity = "90%"
    calcDisplay.textContent = this.display },

    Show_Display : function(input){ 

        if ( this.running===true ) {

        this.display += input
        calcDisplay.textContent = this.display 
    
     } 
    },

    Clear_Display : function(){

    this.display = " "
    calcDisplay.textContent = this.display  
    
    this.operand_1 = 0
    this.operand_2 = 0
    this.operator = " " 
 
    },

    Evaluate : function(){ 

    let display_line = this.display 

    const display_line_bits = display_line.split(" ")

    this.operand_1 = display_line_bits[0]
    this.operator_choice = display_line_bits[1]
    this.operand_2 = display_line_bits[2]

    if (this.operator_choice === '+') { operator = addFunc() } 
    else if (this.operator_choice === '-') { operator = subFunc() }
    else if ( this.operator_choice = '÷') { operator = divFunc() } 
    else if ( this.operator_choice === 'X') { operator = mulFunc()}

    this.display = operator(parseFloat(this.operand1),parseFloat(this.operand2))
    calcDisplay.textContent = this.display
    prevAns = this.display 

    this.operand_1 = 0
    this.operand_2 = 0
    this.operator = ""

    },

    addFunc : (x,y) => { return x+y },
    subFunc : (x,y) => { return x-y},
    divFunc : (x,y) => { if ( y===0 ) { return "You cant divide by 0"} else { return x/y} },
    mulFunc : (x,y) => { return x*y},
    
    AnsFunc  : () => { calcDisplay.textContent = prevAns},
    
};
