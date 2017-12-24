// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

/*
class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}
*/

class Queue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  add(item) {
    this.s1.push(item);
  }

  remove() {
    return this.process('pop');
  }

  peek() {
    return this.process('peek');
  }

  process(what = 'remove') {
    [this.s1, this.s2] = this.convertStacks(this.s1, this.s2);
    const item = this.s2[what]();
    [this.s2, this.s1] = this.convertStacks(this.s2, this.s1);
    return item;
  }

  convertStacks(from, to) {
    while (from.peek() !== undefined) {
      to.push(from.pop());
    }
    return [from, to];
  }
}

module.exports = Queue;
