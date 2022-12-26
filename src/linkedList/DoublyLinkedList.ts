interface INode {
    value: any;
    next: null | INode;
}

class Node implements INode {
    value: any;
    prev: Node | null;
    next: Node | null;

    constructor(value: any, prev: Node | null) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

export default class DoublyLinkedList {
    head: Node;
    tail: Node;
    length: number;

    constructor(value: any) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    // O(1)
    append(value: any) {
        const tailNode = this.tail;
        const newNode = new Node(value, tailNode);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // O(1)
    prepend(value: any) {
        const newNode = new Node(value, null);
        const nextNode = this.head;
        newNode.next = this.head;
        nextNode.prev = newNode;
        this.head = newNode;
        this.length++;
    }

    /**
     * Same as LinkedList
     * O(n)
     */
    get(index: number) {
        if (index > this.length - 1) {
            console.error("index out of range");
            return;
        }

        let node = this.head;
        let positionIndex = 0;
        while (positionIndex < index) {
            node = node.next!;
            positionIndex++;
        }
        return node;
    }

    // O(n)
    insert(index: number, value: any) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
        // this.get() is where O(n) happens
        const nodeBeforeIndex = this.get(index - 1);
        if (nodeBeforeIndex) {
            const nodeAfterIndex = nodeBeforeIndex.next;
            const newNode = {
                value,
                next: nodeAfterIndex,
                prev: nodeBeforeIndex,
            };
            if (nodeAfterIndex) {
                nodeAfterIndex.prev = newNode;
            }
            nodeBeforeIndex.next = newNode;
            this.length++;
        }
    }

    // O(n)
    remove(index: number) {
        if (index === 0) {
            const nextNode = this.head.next;
            if (nextNode) {
                this.head = nextNode;
                return;
            } else {
                console.error("Cannot delete the only node");
                return;
            }
        }

        if (index >= this.length) {
            console.error("Index should not be larger than linked list length");
            return;
        }

        // this is where O(n) happens
        const prevNode = this.get(index - 1) as Node;
        const nextNode = prevNode.next!.next;
        if (nextNode) {
            nextNode.prev = prevNode;
        }

        prevNode.next = nextNode;
        this.length--;
    }
}
