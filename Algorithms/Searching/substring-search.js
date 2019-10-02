function subStringSearch(str, search) {
    for (let i = 0; i <= str.length - search.length + 1; i++) {
        let found = false
        for (let j = 0; j < search.length; j++) {
            if (str[i+j] !== search[j]) break;
            if (j === search.length - 1) found = true;
        }
        if (found) return i;
    }
    return -1;
}

export default subStringSearch;