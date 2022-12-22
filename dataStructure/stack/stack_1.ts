// implemented as linked list
import { MyNode } from "../linkedList/LinkedList";

export default class Stack {
    top: null | MyNode;
    bottom: null | MyNode;
    length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    // O(1)
    peek() {
        return this.top?.value;
    }

    // O(1)
    push(value) {
        const newNode = new MyNode(value);
        if (this.top) {
            const prevTop = this.top;
            newNode.next = prevTop;
        } else {
            this.bottom = newNode;
        }
        this.top = newNode;

        this.length++;
    }

    // O(1)
    pop() {
        if (this.top) {
            if (this.bottom === this.top) {
                this.bottom = null;
            }
            const prevTop = this.top;
            const newTop = prevTop.next;
            this.top = newTop;
            this.length--;

            return prevTop.value;
        }
        return null;
    }
}
