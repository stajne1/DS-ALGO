class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return null;
        let node = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length--
            return node;
        }
        let tail = this.tail;
        while (node.next !== tail) {
            node = node.next;
        }
        node.next = null;
        this.tail = node;
        this.length--;
        return tail;
    }

    shift() {
        let head = this.head;
        if (this.head) {
            this.head = this.head.next;
            this.length--;
        }
        return head;
    }

    unShift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let node = this.head;
        let i = 0;
        while (i < index) {
            node = node.next;
            i++;
        }
        return node;
    }

    set(index, val) {
        let node = this.get(index);
        if (node) {
            node.value = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index === 0) return !!this.unShift(val);
        if(index === this.length) return !!this.push(val);

        let pre = this.get(index - 1);
        if (pre) {
            let newNode = new Node(val);
            newNode.next = pre.next;
            pre.next = newNode;
            this.length++;
            return true;
        }
        return false;
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        let pre = this.get(index - 1);
        let node = null;
        if(pre) {
            node = pre.next;
            pre.next = node.next;
            this.length--;
        }
        return node;
    }
}

export default SinglyLinkedList;