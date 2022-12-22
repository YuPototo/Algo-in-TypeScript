// implemented as an array

export default class Stack {
    array: any[];

    constructor() {
        this.array = [];
    }

    public get bottom() {
        return this.array[0];
    }

    public get top() {
        return this.array[this.length - 1];
    }

    public get length() {
        return this.array.length;
    }

    // O(1)
    peek() {
        return this.array[this.length - 1];
    }

    // O(1)
    push(value) {
        this.array.push(value);
    }

    // O(1)
    pop() {
        if (this.length > 0) {
            return this.array.pop();
        }
        return null;
    }
}
