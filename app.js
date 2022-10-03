
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
const equalsBtn = document.querySelector(".data__operator--equals")

//accessing the delete button
const delBtn= document.querySelector(".data__operator--delete")


const equationArr = [];
const equationArr2 = [];

//--CALCULATOR FUNCTIONS (not seen by user)

//number1

//number2

//result


//To store the user input data & display the result


//To display the results 




// switch case for calculator functions (??????)

// const calculation = () => {
//     //get 2 numbers and an operator

//     //const number1 = equationArr
//     //const number2 = equationArr2
//     //const result


// switch(operators) {
//     case '+':
//         result = number1 + number2;
//         console.log(number1 + " + " + number2 + " = " + result);
//         break;

//     case '-':
//         result = number1 - number2;
//         console.log(number1 + " - " + number2 + " = " + result);
//         break;

//     case '*':
//         result = number1 * number2;
//         console.log(number1 + " x " + number2 + " = " + result);
//         break;

//     case '/':
//         result = number1 / number2;
//         console.log(number1 + " / " + number2 + " = " + result);
//         break;

// }

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
    console.log(equationArr)
    display.innerText = equationArr.join("")
}

const handleOperatorPress = (event) => {
    let operator = event.target.innerHTML
    equationArr.push(operator)
    console.log("eq1", equationArr)
}

const operatorClicked = (event) => {
    let input2 = event.target.innerHTML
    equationArr2.push(input2)
    console.log("eq2", equationArr2)
}



delBtn.addEventListener("click", clickDelete) 


numbersBtn.forEach((number)=> {
    number.addEventListener("click", handleNumberPress);
})

operators.forEach((operator) => {
    operator.addEventListener("click", handleOperatorPress);
})

operators.forEach((operator) => {
    operator.addEventListener("click", operatorClicked);
})

