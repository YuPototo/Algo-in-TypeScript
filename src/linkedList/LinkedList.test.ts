import LinkedList from "./LinkedList";

describe("LinkedList operation", () => {
    it("should allow creation of linked list", () => {
        const linkedList = new LinkedList(5);

        expect(linkedList.head.value).toBe(5);
        expect(linkedList.tail.value).toBe(5);
        expect(linkedList.length).toBe(1);
    });

    it("append()", () => {
        const linkedList = new LinkedList(5);

        linkedList.append(10);

        expect(linkedList.head.next).not.toBeNull();

        expect(linkedList.length).toBe(2);

        const secondNode = linkedList.head.next;
        expect(secondNode!.value).toBe(10);

        expect(linkedList.tail).toEqual({
            value: 10,
            next: null,
        });
    });

    it("prepend", () => {
        const linkedList = new LinkedList(5);

        linkedList.prepend(10);

        expect(linkedList.head.value).toBe(10);
        expect(linkedList.length).toBe(2);

        expect(linkedList.tail.value).toBe(5);
    });

    it("get", () => {
        // linked list: 1 --> 10 --> 55
        const linkedList = new LinkedList(1);
        linkedList.append(10);
        linkedList.append(55);

        expect(linkedList.get(0)?.value).toBe(1);
        expect(linkedList.get(1)?.value).toBe(10);
    });

    it("insert()", () => {
        // before: 1 --> 10 --> 55
        // after: 1 --> 99 --> 10 --> 55

        const linkedList = new LinkedList(1);
        linkedList.append(10);
        linkedList.append(55);

        linkedList.insert(1, 99);

        expect(linkedList.head.next?.value).toBe(99);
    });

    it("remove()", () => {
        // before: 1 --> 10 --> 55
        // after: 1 --> 55
        const linkedList = new LinkedList(1);
        linkedList.append(10);
        linkedList.append(55);

        linkedList.remove(1);

        expect(linkedList.head.next?.value).toBe(55);
        expect(linkedList.length).toBe(2);
    });

    it("reverse()", () => {
        // before: 1 --> 10 --> 55
        // after: 55 --> 10 --> 1

        const linkedList = new LinkedList(1);
        linkedList.append(10);
        linkedList.append(55);

        linkedList.reverse();

        expect(linkedList.head.value).toBe(55);
        expect(linkedList.head.next!.value).toBe(10);
        expect(linkedList.tail.value).toBe(1);
    });
});
