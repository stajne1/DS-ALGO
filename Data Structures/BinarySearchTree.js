class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (!this.root) {
            this.root = node;
            return this;
        } else {
            let curr = this.root;
            while (true) {
                if(curr.value == node.value) return this;
                if (node.value < curr.value) {
                    if (!curr.left) {
                        curr.left = node;
                        return this;
                    }
                    curr = curr.left;
                }
                if (node.value > curr.value) {
                    if (!curr.right) {
                        curr.right = node;
                        return this;
                    }
                    curr = curr.right;
                }
            }
        }
    }

    search(val) {
        let curr = this.root;
        while(curr) {
            if(curr.value === val) return true;
            if(curr.value < val) {
                curr = curr.right;
            } else if(curr.value > val) {
                curr = curr.left;
            }
        }
        return false;
    }
}

export default BinarySearchTree;