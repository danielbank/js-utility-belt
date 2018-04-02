class Queue {
  constructor() {
    this.queue = [];
    this.enqueue = this.enqueue.bind(this);
    this.dequeue = this.dequeue.bind(this);
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (!this.queue.length) throw Error('Cannot dequeue an empty queue');
    return this.queue.shift();
  }
}

// TESTS

const myQ = new Queue();
myQ.enqueue(1);
console.log(myQ);
myQ.enqueue(2);
console.log(myQ);
myQ.enqueue(3);
console.log(myQ);
myQ.enqueue(4);
console.log(myQ);
myQ.enqueue(5);
console.log(myQ);
console.log(myQ.dequeue());
console.log(myQ);
console.log(myQ.dequeue());
console.log(myQ);
console.log(myQ.dequeue());
console.log(myQ);
console.log(myQ.dequeue());
console.log(myQ);
console.log(myQ.dequeue());
console.log(myQ);
console.log(myQ.dequeue());
