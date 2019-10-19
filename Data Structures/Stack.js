//Stack Implementation without Linked List.

class Stack {
    constructor(capacity) {
        if(!capacity) throw new Error('Please specify capacity.');
        this.elements = [];
        this.capacity = capacity;
    }

    push(val) {
        if(!val) throw new Error(`Can't Push Empty Value.`);
        if(!this.isFull()) {
            this.elements.push(val)
            return this.elements.length;
        }
        throw new Error(`Stack OverFlow`);
    }

    pop() {
        if(!this.isEmpty()) {
            return this.elements.pop();
        }
        throw new Error(`Stack Underflow.`);
    }

    isFull() {
       return this.elements.length === this.capacity ? true : false; 
    }

    isEmpty() {
        return this.elements.length === 0 ? true : false;
    }

    size() {
        return this.elements.length;
    }
}

export default Stack;