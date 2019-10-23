class MaxHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        if (this.values.length > 1) {
            let idx = this.values.length - 1;
            while (true) {
                let pIdx = Math.floor((idx - 1) / 2);
                if (pIdx < 0 || this.values[idx] <= this.values[pIdx]) break;
                let temp = this.values[pIdx];
                this.values[pIdx] = this.values[idx];
                this.values[idx] = temp;
                idx = pIdx;
            }
        }
    }

    extractMax() { 
        let max = this.values[0];
        let last = this.values.pop();
        if (this.values.length > 1) {
            let idx = 0;
            this.values[idx] = last;
            while (true) {
                let lIdx = 2 * idx + 1;
                let rIdx = 2 * idx + 2;

                if (lIdx > this.values.length - 1 && rIdx > this.values.length - 1) break;

                let left = this.values[lIdx] || -Infinity;
                let right = this.values[rIdx] || -Infinity;

                if (left < this.values[idx] && right < this.values[idx]) break;

                if (left > right) {
                    let temp = left;
                    this.values[lIdx] = this.values[idx];
                    this.values[idx] = temp;
                    idx = lIdx;
                } else {
                    let temp = right;
                    this.values[rIdx] = this.values[idx];
                    this.values[idx] = temp;
                    idx = rIdx;
                }
            }
        }
        return max;
    }
}