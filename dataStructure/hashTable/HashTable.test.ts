import HashTable from "./HashTable";

describe("Hashtable operation", () => {
    it("should have a set and get method", () => {
        const myHashTable = new HashTable(50);
        expect(myHashTable).toBeInstanceOf(HashTable);

        myHashTable.set("grapes", 10000);
        expect(myHashTable.get("grapes")).toEqual(10000);
    });
});
