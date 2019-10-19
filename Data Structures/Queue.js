import SinglyLinkedList from './SinglyLinkedList';

class Queue {
    constructor(capacity) {
        if(!capacity) throw new Error('Please specify capacity.')
        this.size = 0;
        this.elements = new SinglyLinkedList();
        this.capacity = capacity;
    }

    isEmpty() {
        return this.size === 0 ? true : false;
    }

    isFull() {
        return this.size === this.capacity ? true : false;
    }

    enQueue(val) {
        if(!this.isFull()) {
           this.elements.push(val);
           return ++this.size;
        }
        throw new Error('Queue OverFlow');
    }

    deQueue() {
        if(!this.isEmpty()) {
            this.size--;
            return this.elements.shift();
        }
        throw new Error('Queue UnderFlow');
    }
}

export default Queue;