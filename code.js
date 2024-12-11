function trFib(n, acc = 1) {
    let val = 1;
    trFibHelper(n, val, acc)
    if (n <= 2) {
        return acc;
    }
    trFib(n-1, val + acc)
    
}
