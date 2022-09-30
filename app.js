
//accesing the body of the calculator (including display)

const calculator = document.querySelector(".calculator")

//accessing all the keys on the calculator

const keys = document.querySelector(".calculator__keys") 

//acessing the display of the calculator

const display = document.querySelector(".calculator__display")

//accessing the equals button
const equalsBtn = document.querySelector(".data__operator--equals")

//acessing the delete button
const delBtn= document.querySelector(".data__operator--delete")

//switch case for calculator functions (??????)

switch() {
    case '+':
        result = number1 + number2;
        console.log(number1 + " + " + number2 + " = " + result);
        break;

    case '-':
        result = number1 - number2;
        console.log(number1 + " - " + number2 + " = " + result);
        break;

    case '*':
        result = number1 * number2;
        console.log(number1 + " x " + number2 + " = " + result);
        break;

    case '/':
        result = number1 / number2;
        console.log(number1 + " / " + number2 + " = " + result);
        break;

//function for the operations (???)