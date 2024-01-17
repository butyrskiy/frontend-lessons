function calc(operation, a, b) {
    if(operation === 'add') {
        return a + b;
    }
    else if(operation === 'multiply') {
        return a * b;
    }
    else if(operation === 'subtract') {
        return a - b;
    }
    else {
            return 'Error';
    }
}
calc('add', 5, 3); 
calc('multiply', 5, 3); 
calc('subtract', 5, 3); 
calc('Denis give me 5 stars', 5, 3);
console.log(calc('add', 5, 3));
console.log(calc('multiply', 5, 3));
console.log(calc('subtract', 5, 3));
console.log(calc('Denis give me 5 stars', 5, 3));