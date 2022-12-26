export class MyNode {
    value: any;
    next: MyNode | null;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export default class LinkedList {
    head: MyNode;
    tail: MyNode;
    length: number;

    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    // O(1)
    append(value) {
        const newNode = new MyNode(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // O(1)
    prepend(value) {
        const newNode = new MyNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // O(n)
    insert(index: number, value) {
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
            };
            nodeBeforeIndex.next = newNode;
            this.length++;
        }
    }

    // O(n)
    get(index: number): MyNode | undefined {
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
        const prevNode = this.get(index - 1) as MyNode;
        const nextNode = prevNode.next!.next;

        prevNode.next = nextNode;
        this.length--;
    }

    // O(n)
    // logic: keep swapping link directin until the end
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        while (second) {
            const tmp = second.next;
            second.next = first;
            first = second;
            second = tmp;
        }
        this.head.next = null;
        this.head = first;
    }
}
