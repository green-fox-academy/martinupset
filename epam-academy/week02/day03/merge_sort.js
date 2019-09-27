function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = mergeSort(arr.slice(0, middle))
    right = mergeSort(arr.slice(middle))
    return merge(left, right);
}


function merge(left, right) {
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

console.log(mergeSort([5, 4, 4, 2, 5, 7, 0, 4, 5, 67, 89]))


// for (let i = 0; i < 90; i++) {

// }