function selectionSort(arr) {
    function swap(i1, i2, arr){
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
    }
    
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j;
        }

        if(i !== min) swap(i, min, arr);
    }
    return arr;
}

export default selectionSort;