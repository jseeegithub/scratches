function factorial(input) {
    if (input === 0 || input === 1) {
        return 1;
    }
    return input * factorial(input - 1);
}

console.log(factorial(3));
