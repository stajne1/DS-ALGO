function bubbleSort(arr) {
    function swap(i1, i2, arr) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        let noswap = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1, arr);
                noswap = false;
            }
        }
        if (noswap) break;
    }

    return arr;
}

export default bubbleSort;