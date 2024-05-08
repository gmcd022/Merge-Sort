function fibs(length) {
    let array = [0, 1];
    for(let i = 2; i < length; i++) {
        array.push(array[i-1] + array[i-2]);
    };
    console.log(array);
}
fibs(12);

function fibsRec(n) {
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    return [... fibsRec(n-1), fibsRec(n-1)[n -2] + fibsRec(n-1)[n-3]]
};

console.log(fibsRec(12));