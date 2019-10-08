class Node {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head){
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
        if(!this.head) return null;
        let node = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return node;
        }
        let tail = this.tail;
        while(node.next !== tail) {
            node = node.next;
        }
        node.next = null;
        this.tail = node;
        this.length--;
        return tail;
    }
}

export default SinglyLinkedList;