let number1 = prompt('Please Enter 1st Number.');
let number2 = prompt('Please Enter 2nd Number.');

function friendlyNumber(number1,number2) {
    let sum1 = 0;
    let sum2 = 0;
    if (number1 == number2) {
        alert("Invalid arguments, numbers must be different.");  
        return false;
    }
    else if(number1 <= 1 || number2 <= 1){
        alert("Numbers must be bigger than 1.");  
        return false;
    }

    for (let i = 1; i < number1; i++) {       
        if (number1 % i == 0) {
            sum1 += i;
        }       
    }

    for (let j = 1; j < number2; j++) {       
        if (number2 % j == 0) {
            sum2 += j;
        }       
    }

    if (sum1 == number2 && sum2 == number1) {
        console.log(number1 + " and " + number2 + " are friendly number.")
    }    
    else{
        console.log(number1 + " and " + number2 + " aren't friendly number.")
    }    
}

friendlyNumber(number1,number2);


