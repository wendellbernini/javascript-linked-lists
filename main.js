import { LinkedList } from "./javascript-linked-lists.js";

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("mage");
list.append("attack");
list.removeAt(2);
console.log(list.toString());
