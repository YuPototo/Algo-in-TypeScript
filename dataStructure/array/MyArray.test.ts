import MyArray from "./MyArray";

describe("push()", () => {
    test("should return length of array", () => {
        const myArray = new MyArray();
        expect(myArray.push("hi")).toBe(1);
    });

    test("should add item to array", () => {
        const myArray = new MyArray();
        myArray.push("hi");
        expect(myArray.get(0)).toBe("hi");
    });
});

describe("get()", () => {
    test("empty array", () => {
        const myArray = new MyArray();
        expect(myArray.get(0)).toBe(undefined);
    });

    test("non-empty array", () => {
        const myArray = new MyArray();
        myArray.push("a");
        expect(myArray.get(0)).toBe("a");
        expect(myArray.length).toBe(1);
    });
});

describe("pop()", () => {
    it("should remove last item", () => {
        const myArray = new MyArray();
        myArray.push("a");
        myArray.push("b");
        expect(myArray.length).toBe(2);

        myArray.pop();
        expect(myArray.get(1)).toBe(undefined);
        expect(myArray.length).toBe(1);
    });

    it("should return last item", () => {
        const myArray = new MyArray();
        myArray.push("a");
        myArray.push("b");

        expect(myArray.pop()).toBe("b");
    });
});

describe("delete()", () => {
    it("should delete an item", () => {
        const myArray = new MyArray();
        myArray.push("a");
        myArray.push("b");
        myArray.delete(0);
        expect(myArray.get(0)).toBe("b");
        expect(myArray.get(1)).toBe(undefined);
        expect(myArray.length).toBe(1);
    });
});

describe("insert()", () => {
    it("should insert a value at index x", () => {
        const myArray = new MyArray();
        myArray.push("a");
        myArray.push("b");
        myArray.push("c");
        myArray.insert(1, "d");
        expect(myArray.get(1)).toBe("d");
        expect(myArray.get(2)).toBe("b");
        expect(myArray.get(3)).toBe("c");
        expect(myArray.length).toBe(4);
    });
});
