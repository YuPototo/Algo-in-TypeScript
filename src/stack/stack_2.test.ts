import Stack from "./stack_2";

it("should create a new Stack", () => {
    const stack = new Stack();

    expect(stack.length).toBe(0);
    expect(stack.bottom).toBe(undefined);
    expect(stack.top).toBe(undefined);
});

it("push() and peek()", () => {
    const stack = new Stack();
    stack.push(100);
    expect(stack.length).toBe(1);
    expect(stack.peek()).toBe(100);
});

it("push() and pop()", () => {
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.push(300);
    expect(stack.length).toBe(3);
    expect(stack.peek()).toBe(300);

    expect(stack.pop()).toBe(300);
    expect(stack.length).toBe(2);
    expect(stack.peek()).toBe(200);

    stack.pop();
    stack.pop();
    expect(stack.bottom).toBe(undefined);
    expect(stack.top).toBe(undefined);
});
