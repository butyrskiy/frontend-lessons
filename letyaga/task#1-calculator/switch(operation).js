function calc(operation, a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'This parametr is bullshit!';
    }
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
console.log(calc('+', 5, 3)); 
console.log(calc('*', 5, 3));
console.log(calc('-', 5, 3));
console.log(calc(3));