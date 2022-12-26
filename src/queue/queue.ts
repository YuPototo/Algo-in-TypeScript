import { MyNode } from "../linkedList/LinkedList";

export default class Queue {
    first: null | MyNode;
    last: null | MyNode;
    length: number;

    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    // returns the head
    peek() {
        if (this.length > 0) {
            return this.first!.value;
        }
        return null;
    }

    // add to queque
    enqueue(value) {
        const node = new MyNode(value);
        if (this.length === 0) {
            this.first = node;
            this.last = node;
        } else {
            this.first!.next = node;
            this.last = node;
        }
        this.length++;
    }

    //  return the first item and remove it from the queque
    dequeue() {
        if (this.length > 0) {
            const node = this.first;
            this.first = this.first!.next;
            this.length--;
            if (this.length === 0) {
                this.last = null;
            }
            return node!.value;
        }
        return null;
    }
}
