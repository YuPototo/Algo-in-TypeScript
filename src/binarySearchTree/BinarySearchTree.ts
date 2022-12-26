class MyNode {
    left: null | MyNode;
    right: null | MyNode;
    value: number;

    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

export default class BinarySearchTree {
    root: null | MyNode;

    constructor() {
        this.root = null;
    }
    insert(value) {
        if (this.root === null) {
            this.root = new MyNode(value);
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.value > value) {
                    if (currentNode.left) {
                        currentNode = currentNode.left;
                    } else {
                        currentNode.left = new MyNode(value);
                        return this;
                    }
                } else {
                    if (currentNode.right) {
                        currentNode = currentNode.right;
                    } else {
                        currentNode.right = new MyNode(value);
                        return this;
                    }
                }
            }
        }
    }
    lookup(value) {
        let currentNode = this.root;

        while (currentNode) {
            if (currentNode.value === value) return currentNode;

            if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return currentNode;
    }
}

export function traverse(node: MyNode) {
    const tree = node;
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}
