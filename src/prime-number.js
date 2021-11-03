let numbers = prompt('Please write your numbers separated by commas.').split(",");

function primeNumber(numbers) {
    var prime = true;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0) {
            alert("Prime numbers cannot be less than zero!");    
        }
        else if (numbers[i] == 2) {
            console.log(numbers[i] +" is Prime Number") 
        }
        else if (numbers[i] == 1) {
            console.log(numbers[i] +" isn't Prime Number") 
        }
        else{          
            for (let j = 2; j < numbers[i]; j++) {  
                prime = true;
                if (numbers[i] % j == 0) {
                    prime = false;                   
                    break;
                }                             
            }     
            if (prime == false) {
                console.log(numbers[i] +" isn't Prime Number") 
            } 
            else{
                console.log(numbers[i] +" is Prime Number") 
            }    
        }    
    }
}

primeNumber(numbers)

