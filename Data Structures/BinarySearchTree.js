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

    BFS() {
        let visited = [];
        if(this.root) {
            let queue = [this.root]
            while(queue.length) {
                let node = queue.shift();
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
                visited.push(node.value);
            }
        }
        return visited;
    }

    DFSPreOrder() {
        let visited = [];
        if(this.root) {
            function traverse(node) {
                visited.push(node.value);
                node.left && traverse(node.left);
                node.right && traverse(node.right);
            }
            traverse(this.root);
        }
        return visited;
    }

    DFSInOrder() {
        let visited = [];
        if(this.root) {
            function traverse(node) {
                node.left && traverse(node.left);
                visited.push(node.value);
                node.right && traverse(node.right);
            }
            traverse(this.root);
        }
        return visited;
    }

    DFSPostOrder() {
        let visited = [];
        if(this.root) {
            function traverse(node) {
                node.left && traverse(node.left);
                node.right && traverse(node.right);
                visited.push(node.value);
            }
            traverse(this.root);
        }
        return visited;
    }
}

export default BinarySearchTree;