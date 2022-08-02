
let number1;

//create the function to calculate the equation
const calculateFunction = (num1, num2, operator) => {
    let result;
    //Make calculations here...
    switch (operator) { 
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            result = num1
            break
    }

    return result
}

const clearNumbers = () => {
    number1=null;
    return
}

const calculator = (number, operator) => {
    num1 = number1
    num2 = number
    if (num1) {
        number1 = calculateFunction(num1, num2, operator)
    } else {
        number1 = number
    }
    return
}

calculator(10, '+')
console.log(number1)
calculator(10, '+')
console.log(number1)
calculator(10, '*')
console.log(number1)
calculator(5, '/')
console.log(number1)
clearNumbers()
console.log(number1)

// console.log(calculateFunction(10, number1, '+')) //should print 20
// console.log(calculateFunction(2, number1, '+')) //should print 12
// calculator(3)
// console.log(calculateFunction(2, number1, '+')) //should print 5

// console.log(calculateFunction(10, 10, '-'))
// console.log(calculateFunction(2, 3, '-'))


// console.log(calculateFunction(10, 10, '*'))
// console.log(calculateFunction(2, 3, '*'))

// console.log(calculateFunction(20, 10, '/'))
// console.log(calculateFunction(3, 9, '/'))