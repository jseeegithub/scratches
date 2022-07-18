function power(base, expo) {
    if (base === 1 || expo < 1) {
        return 1;
    }
    return base * power(base, expo - 1);
}

console.log(power(2, -3));
