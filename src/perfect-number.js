function perfectNumber() {
    var sum = 0
    var results = [] 
    var a = 0
    for (let i = 1; i <= 1000; i++) {
        for (let j = 0; j <= i/2; j++) {
            if (i % j == 0) {
              sum += j;
            }
        }
        if (sum == i) {
            results[a] = i;
            a++;
        }          
        sum = 0;
    }
    console.log(results)
}

perfectNumber()