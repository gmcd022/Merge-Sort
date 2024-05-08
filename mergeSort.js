const mergeSort = (array) => {
    if (array.length === 0) return "invalid array supplied";
    if (array.length === 1) return array;

    const split = Math.floor(array.length / 2);
    const right = array.slice(0, split);
    const left = array.slice(split, array.length);

    return merge(mergeSort(left), mergeSort(right));
};

const merge= (left, right) => {
    const result = [];
    let incomingLeft = 0;
    let incomingRight = 0;

    while (incomingLeft < left.length && incomingRight < right.length) {
        if (left[incomingLeft] < right[incomingRight]) {
            result.push(left[incomingLeft]);
            incomingLeft++;  
        } else {
            result.push(right[incomingRight]);
            incomingRight++;
        }
    }

    while (incomingLeft < left.length) {
        result.push(left[incomingLeft]);
        incomingLeft++
    }

    while (incomingRight < right.length) {
        result.push(right[incomingRight]);
        incomingRight++
    }
    return result;
};

console.log("Merge Sort", mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));