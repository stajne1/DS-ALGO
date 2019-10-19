class Stack {
    constructor() {
        this.top = -1;
        this.elements = [];
    }

    push(val) {
        if(val) {
            this.elements[++this.top] = val;
            return this.elements.length;
        }
        throw new Error(`Can't Push Empty Value.`);
    }

    pop() {
        if(this.top > -1) {
            this.top--;
            return this.elements.pop();
        }
        throw new Error(`Stack Underflow.`);
    }

    empty() {
        return this.top > -1 ? false : true;
    }

    size() {
        return this.elements.length;
    }
}

export default Stack;