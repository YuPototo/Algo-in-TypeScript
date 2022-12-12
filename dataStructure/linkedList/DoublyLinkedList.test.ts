import DoublyLinkedList from "./DoublyLinkedList";

describe("Create a doubly linked list", () => {
    it("should create a doubly linked list", () => {
        const doublyLinkedList = new DoublyLinkedList(5);

        expect(doublyLinkedList.head.value).toBe(5);
        expect(doublyLinkedList.tail.value).toBe(5);
        expect(doublyLinkedList.head.next).toBeNull();
        expect(doublyLinkedList.head.prev).toBeNull();
        expect(doublyLinkedList.length).toBe(1);
    });

    it("append()", () => {
        const doublyLinkedList = new DoublyLinkedList(5);

        doublyLinkedList.append(7);

        expect(doublyLinkedList.head.next).not.toBeNull();
        const secondNode = doublyLinkedList.head.next;
        expect(secondNode!.value).toBe(7);

        // link to last node
        expect(secondNode!.prev).not.toBeNull();
        expect(secondNode!.prev!.value).toBe(5);
    });

    it("prepend()", () => {
        const doublyLinkedList = new DoublyLinkedList(5);

        doublyLinkedList.prepend(10);

        expect(doublyLinkedList.head.value).toBe(10);
        expect(doublyLinkedList.length).toBe(2);

        const secondNode = doublyLinkedList.head.next;
        expect(secondNode!.value).toBe(5);
        expect(secondNode!.prev!.value).toBe(10);
    });

    it("get()", () => {
        // linked list: 1 --> 10 --> 55
        const doublyLinkedList = new DoublyLinkedList(1);
        doublyLinkedList.append(10);
        doublyLinkedList.append(55);

        expect(doublyLinkedList.get(0)?.value).toBe(1);
        expect(doublyLinkedList.get(1)?.value).toBe(10);
    });

    it("insert()", () => {
        // before: 1 --> 10 --> 55
        // after: 1 --> 99 --> 10 --> 55

        const doublyLinkedList = new DoublyLinkedList(1);
        doublyLinkedList.append(10);
        doublyLinkedList.append(55);

        doublyLinkedList.insert(1, 99);

        const insertedNode = doublyLinkedList.head.next;
        expect(insertedNode!.value).toBe(99);
        expect(insertedNode!.prev!.value).toBe(1);
        expect(insertedNode!.next!.value).toBe(10);

        const nodeAfterInsertedNode = insertedNode!.next;
        expect(nodeAfterInsertedNode!.prev!.value).toBe(99);
    });

    it("remove()", () => {
        // before: 1 --> 10 --> 55
        // after: 1 --> 55
        const doublyLinkedList = new DoublyLinkedList(1);
        doublyLinkedList.append(10);
        doublyLinkedList.append(55);

        doublyLinkedList.remove(1);

        expect(doublyLinkedList.head.next?.value).toBe(55);
        expect(doublyLinkedList.length).toBe(2);

        const tail = doublyLinkedList.tail;
        expect(tail.prev!.value).toBe(1);
    });
});
