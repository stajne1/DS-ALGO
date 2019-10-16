class Node {
    constructor(val){
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        if(this.length === 0) return undefined;
        let node = this.tail;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prevNode = node.prev;
            prevNode.next = null;
            node.prev = null;
            this.tail = prevNode;
        }
        this.length--;
        return node;
    }

    shift(){
        if(this.length === 0) return undefined;
        let node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            let nextNode = node.next;
            nextNode.prev = null;
            node.next = null;
            this.head = nextNode;
        }
        this.length--;
        return node;
    }

    unshift(val) {
        let node = new Node(val);
        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;     
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let node = this.head;
        for(let i=0; i<index; i++) {
            node = node.next;
        }
        return node;
    }

    set(index, val) {
        let node = this.get(index);
        if(node) {
            node.value = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let preNode = this.get(index-1);
        if(preNode) {
            let newNode = new Node(val);
            let nextNode = preNode.next;

            newNode.next = nextNode;
            nextNode.prev = newNode;

            preNode.next = newNode;
            newNode.prev = preNode;
            this.length++;
            return true
        }
        return false;
    }

    remove(index) {
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let node = this.get(index);
        if(node) {
            let nextNode = node.next;
            let preNode = node.prev;
            nextNode.prev = preNode;
            preNode.next = nextNode;

            node.next = null;
            node.prev = null;
            this.length--;
            return node;
        }
        return undefined;
    }

    reverse() {
        let preNode = null;
        let currNode = this.head;
        while(currNode) {
            let nextNode = currNode.next;
            currNode.next = preNode;
            currNode.prev = nextNode;

            preNode = currNode;
            currNode = nextNode;
        }
        this.tail = this.head;
        this.head = preNode;
        return this;
    }
}

export default DoublyLinkedList;