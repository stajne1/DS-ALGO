function binarySearch(arr, value) {
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (arr[mid] !== value && start < end) {
        if (arr[mid] < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }

    return arr[mid] === value ? mid : -1;
}

export default binarySearch;