function getDigit(num, i) {
    return (Math.floor(Math.abs(num) / 10 ** i) % 10);
}

function digitCount(num) {
    return (Math.floor(Math.log10(num)) + 1);
}

function mostDigits(arr) {
    let max = 0;
    for (let num of arr) {
        max = Math.max(max, digitCount(num));
    }
    return max;
}

function radixSort(arr) {
    let maxDigits = mostDigits(arr);
    for (let k = 0; k < maxDigits; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        for (let i = 0; i < arr.length; i++) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

export default radixSort;
