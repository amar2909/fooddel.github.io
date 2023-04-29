// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }
// class MyList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }
//   add(value) {
//     let node = new Node(value);
//     let current;
//     if (this.head == null) {
//       this.head = node;
//     } else {
//       current = this.head;
//       while (current.next) {
//         current = current.next;
//       }
//       current.next = node;
//     }
//   }
// }

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   insert(value) {
//     this.items.push(value);
//   }

//   isEmpty() {
//     if (this.items.length == 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   remove() {
//     if (this.isEmpty()) {
//       console.log("Stack is empty");
//     } else {
//       return this.items.pop();
//     }
//   }

//   peek() {
//     console.log(this.items[this.items.length - 1]);
//   }

//   print() {
//     console.log("Stack contains : ");
//     if (this.isEmpty()) {
//       console.log("Stack is empty");
//     } else {
//       for (let index = 0; index < this.items.length; index++) {
//         console.log(this.items[index] + " ");
//       }
//     }
//   }
// }

// let myStack = new Stack();

// myStack.insert(10);
// myStack.insert(20);
// myStack.insert(30);
// myStack.insert(40);
// myStack.insert(50);
// myStack.print();
// console.log(myStack.remove() + " removed from Stack!");
// console.log(myStack.remove() + " removed from Stack!");
// myStack.print();
