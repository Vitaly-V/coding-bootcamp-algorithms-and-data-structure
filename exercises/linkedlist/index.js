// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let cnt = 0;
    let node = this.head;
    while (node) {
      cnt++;
      node = node.next;
    }
    return cnt;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node && node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
    while (node && node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const node = this.getLast();
    if (node) {
      node.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(i) {
    let cnt = 0;
    let node = this.head;
    while (node) {
      if (cnt === i) {
        return node;
      }
      node = node.next;
      cnt++;
    }
    return null;
  }

  removeAt(i) {
    if (i === 0) {
      this.removeFirst();
      return;
    }
    const prev = this.getAt(i - 1);
    if (prev && prev.next) {
      prev.next = this.getAt(i).next;
    }

  }

  insertAt(data, i) {
    if (i === 0) {
      this.insertFirst(data);
      return;
    }
    const current = this.getAt(i);
    if(current) {
      current.next = Object.assign({}, current);
      current.data = data;
      return;
    } 
    
    this.insertLast(data);
  }

  forEach(cb) {
    let node = this.getFirst();
    while (node) {
      cb(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }

}

module.exports = { Node, LinkedList };
