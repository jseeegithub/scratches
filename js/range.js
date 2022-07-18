function recursiveRange(numb) {
    while (numb > 0) {
        return numb + recursiveRange(numb - 1);
    }
    return 0;
}

console.log(recursiveRange(5));
