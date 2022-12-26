export default class HashTable {
    data: Array<any>;

    constructor(size) {
        this.data = new Array(size);
    }

    // Hash method is supposed to be O(1) time complexity
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // O(1)
    set(key: string, value: any) {
        const address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    /**
     * Most of the time, if there is no collision, this method will be O(1)
     * But if there is a collision, it will be O(n)
     */
    get(key: string): any {
        const address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            // The for loop is where O(n) could happen
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
    }
}
