class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
    this.insert = this.insert.bind(this);
    this.find = this.find.bind(this);
    this.remove = this.remove.bind(this);
  }

  insert(node) {
    if (node.constructor !== Node) throw Error('Must insert a Node');
    if (this.head === null) {
      this.head = node;
      this.length = this.length + 1;
      return this.head;
    }
    let curNode = this.head;
    while (curNode.next) {
      curNode = curNode.next;
    }
    curNode.next = node;
    this.length++;
    return this.head;
  }

  find(data) {
    let curNode = this.head;
    if (curNode.data === data) return curNode;
    while (curNode.next) {
      if (curNode.next.data === data) return curNode.next;
      curNode = curNode.next;
    }
    return null;
  }

  remove(node) {
    if (node.constructor !== Node) throw Error('Must remove a Node');
    if (this.head === node) {
      const temp = Object.assign({}, this.head);
      temp.next = null;
      this.head = this.head.next;
      this.length = this.length - 1;
      return temp;
    }
    if (this.head) {
      let curNode = this.head;
      while (curNode.next) {
        if (curNode.next === node) {
          const temp = Object.assign({}, curNode.next);
          temp.next = null;
          curNode.next = curNode.next.next;
          this.length = this.length - 1;
          return temp;
        }
        curNode = curNode.next;
      }
      return null;
    }
  }
}

// TESTS

const ll = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
ll.insert(a);
console.log(ll);
ll.insert(b);
console.log(ll);
ll.insert(c);
console.log(ll);
ll.insert(d);
console.log(ll);
ll.insert(e);
console.log(ll);
console.log(ll.find('e'));
console.log(ll.find('p'));
console.log(ll.length);
ll.remove(c);
console.log(ll);
ll.remove(e);
console.log(ll);
ll.remove(a);
console.log(ll);
ll.remove(d);
console.log(ll);
ll.remove(b);
console.log(ll);
