function fibs(n) {
    const arr = [0, 1];
    if (n < 0) return 'Not valid input';
    if (n === 0) return [0];
    for (let i = 1; i < n; i++) {
        arr.push(arr[i] + arr[i - 1]);
    }
    return arr;
}

function fibsRec(n, i = 1, arr = [0, 1]) {
    if (n < 0) return 'Not valid input';
    if (n === 0) return [0];
    if (n === 1) return [0, 1];
    arr.push(arr[i] + arr[i - 1]);
    i++;
    if (i == n) return arr;
    fibsRec(n, i, arr);
    return arr;
}

function merge(leftSplicedArr, rightSplicedArr) {
    const sorted = [];
    let i = 0,
        j = 0;
    while (i < leftSplicedArr.length && j < rightSplicedArr.length) {
        if (leftSplicedArr[i] < rightSplicedArr[j])
            sorted.push(leftSplicedArr[i++]);
        else sorted.push(rightSplicedArr[j++]);
    }
    for (i; i < leftSplicedArr.length; i++) sorted.push(leftSplicedArr[i]);
    for (j; j < rightSplicedArr.length; j++) sorted.push(rightSplicedArr[j]);
    return sorted;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let sortedLeftArr = mergeSort(arr.slice(0, mid));
    let sortedRightArr = mergeSort(arr.slice(mid));
    return merge(sortedLeftArr, sortedRightArr);
}
