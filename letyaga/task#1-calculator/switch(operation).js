function calc(operation, a, b) {
    switch(operation) { 
        case '+': 
            return a + b;
        case '*':
            return a * b;
        case '-':
            return a - b;
        default:
            return 'Error';
    }
}
calc('+', 5, 3); 
calc('*', 5, 3); 
calc('-', 5, 3); 
console.log(calc('+', 5, 3)); 
console.log(calc('*', 5, 3));
console.log(calc('-', 5, 3));
console.log(calc(3));