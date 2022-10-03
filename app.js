
//accesing the body of the calculator (including the display)

const calculator = document.querySelector(".calculator")

//accessing all the keys on the calculator

const keys = document.querySelector(".calculator__keys") 

//accessing the display of the calculator

const display = document.querySelector(".calculator__display")

//accessing the numbers
const numbersBtn = document.querySelectorAll(".data__number")

//accessing the operators
const operators = document.querySelectorAll(".data__operator")

//accessing the equals button
const equalsBtn = document.querySelector(".data__equals")

//accessing the delete button
const delBtn= document.querySelector(".data__operator--delete")


const equationArr = [];
let chosenOperator;

//--CALCULATOR FUNCTIONS (not seen by user)

//number1

//number2

//result


//To store the user input data & display the result


//To display the results 




// switch case for calculator functions (??????)

const calculateAnswer = (input1, input2, inputOperator) => {
    
    let result;

    switch(inputOperator) {
        case '+':
            result = input1 + input2;
            console.log(input1 + " + " + input2 + " = " + result);
            break;

        case '-':
            result = input1 - input2;
            console.log(input1 + " - " + input2 + " = " + result);
            break;

        case '*':
            result = input1 * input2;
            console.log(input1 + " x " + input2 + " = " + result);
            break;

        case '/':
            result = input1 / input2;
            console.log(input1 + " / " + input2 + " = " + result);
            break;

    }

}


//--CALCULATOR OPERATORS


//delete button function(?)

const clickDelete = (event) => {
    console.log(event);
    display.innerText = "0"
    //result = 0
}
const handleNumberPress = (event) => {
    let input = event.target.innerHTML
    equationArr.push(input)
    display.innerText = equationArr.join("")
}

const handleOperatorPress = (event) => {
    let operator = event.target.innerHTML
    equationArr.push(operator)
    chosenOperator = operator
}

const handleCalculation = () => {
    
    let splitArray = equationArr.join("").split(chosenOperator)
    


    //the two numbers
    let number1 = splitArray[0]
    let number2 = splitArray[1]


    calculateAnswer(number1, number2, chosenOperator)

}

equalsBtn.addEventListener("click", handleCalculation)
delBtn.addEventListener("click", clickDelete) 


numbersBtn.forEach((number)=> {
    number.addEventListener("click", handleNumberPress);
})

operators.forEach((operator) => {
    operator.addEventListener("click", handleOperatorPress);
})


