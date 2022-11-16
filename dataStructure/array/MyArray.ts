export default class MyArray {
    data: Object;
    length: number;

    constructor() {
        this.data = {};
        this.length = 0;
    }

    get(index: number): any {
        return this.data[index];
    }

    push(item: any): number {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(): any {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    /**
     * Time Complexity: O(N)
     */
    delete(index: number) {
        const item = this.data[index];
        this.shiftItemsLeft(index); // this operation makes it O(N)
        return item;
    }

    /**
     * Starting from index + 1, Shifts items to left by 1
     */
    shiftItemsLeft(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    /**
     * Time Complexity: O(N)
     */
    insert(index: number, item: any) {
        this.shiftItemsRight(index); // this operation makes it O(N)
        this.data[index] = item;
    }

    /**
     * Starting from index, Shifts items to right by 1
     */
    shiftItemsRight(index: number) {
        for (let i = this.length; i > index; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.length++;
    }
}
