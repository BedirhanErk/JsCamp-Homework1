function listPrimeNumber() {
    var prime = true;
    let numbers = []
    for (let i = 2; i <= 1000; i++) {
        if (i == 2) {
            numbers.push(i)   
        }
        else{
            for (let j = 2; j < i; j++) {  
                prime = true;
                if (i % j == 0) {
                    prime = false;                   
                    break;
                }                             
            }   
            if (prime == true) {
                numbers.push(i)               
            } 
        }      
    }
    console.log(numbers +" are Prime Number") 
}

listPrimeNumber();