import BinarySearchTree, {
    traverse,
} from "./binarySearchTree/BinarySearchTree";

console.log("start ------");

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

// if (tree.root) {
//     console.log(JSON.stringify(traverse(tree.root)));
// }
console.log(tree.lookup(9));

console.log("end ------");
