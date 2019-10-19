// Queue Implementation Using Linked List.

import SinglyLinkedList from './SinglyLinkedList';

class Queue {
    constructor(capacity) {
        if(!capacity) throw new Error('Please specify capacity.');
        this.elements = new SinglyLinkedList();
        this.capacity = capacity;
    }

    isEmpty() {
        return this.elements.length === 0 ? true : false;
    }

    isFull() {
        return this.elements.length === this.capacity ? true : false;
    }

    enQueue(val) {
        if(!val) throw new Error(`Can't Push Empty Value.`);
        if(!this.isFull()) {
           this.elements.push(val);
           return this.elements.length;
        }
        throw new Error('Queue OverFlow');
    }

    deQueue() {
        if(!this.isEmpty()) {
            return this.elements.shift();
        }
        throw new Error('Queue UnderFlow');
    }
}

export default Queue;