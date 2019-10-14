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
}