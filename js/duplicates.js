function areThereDuplicates() {
    let master = {};

    for (let value in arguments) {
        master[arguments[value]] = (master[arguments[value]] || 0) + 1;
    }

    for (let key in master) {
        if (master[key] > 1) return true;
    }

    return false;
}

console.log(areThereDuplicates(51, 65, 58, 59, 51));
