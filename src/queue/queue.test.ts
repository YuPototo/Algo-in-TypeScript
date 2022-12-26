import Queue from "./queue";

it("Create a queue", () => {
    const queue = new Queue();
    expect(queue.first).toBeNull();
    expect(queue.last).toBeNull();
    expect(queue.length).toBe(0);
});

it("enquque() and peek()", () => {
    const queque = new Queue();

    queque.enqueue(100);
    expect(queque.peek()).toBe(100);
    expect(queque.length).toBe(1);

    queque.enqueue(200);
    expect(queque.peek()).toBe(100);
    expect(queque.length).toBe(2);
});

it("dequeue()", () => {
    const queque = new Queue();

    queque.enqueue(100);
    queque.enqueue(200);

    expect(queque.dequeue()).toBe(100);
    expect(queque.length).toBe(1);
    expect(queque.peek()).toBe(200);

    expect(queque.dequeue()).toBe(200);
    expect(queque.length).toBe(0);
    expect(queque.peek()).toBeNull();
});
