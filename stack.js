class Stack {
  constructor() {
    this.stack = [];
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (!this.stack.length) throw Error('Cannot pop an empty stack');
    return this.stack.pop();
  }
}

// TESTS

const myQ = new Stack();
myQ.push(1);
console.log(myQ);
myQ.push(2);
console.log(myQ);
myQ.push(3);
console.log(myQ);
myQ.push(4);
console.log(myQ);
myQ.push(5);
console.log(myQ);
console.log(myQ.pop());
console.log(myQ);
console.log(myQ.pop());
console.log(myQ);
console.log(myQ.pop());
console.log(myQ);
console.log(myQ.pop());
console.log(myQ);
console.log(myQ.pop());
console.log(myQ);
console.log(myQ.pop());
