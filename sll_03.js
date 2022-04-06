class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head == null;
  }

  toArray() {
    if (this.isEmpty()) {
      console.log("Nothing Here");
    } else {
      var arr = [];
      var runner = this.head;
      while (runner) {
        arr.push(runner.data);
        runner = runner.next;
      }
      return arr;
    }
  }

  insertAtBack(val) {
    if (this.isEmpty()) {
      this.head = new Node(val);
    } else {
      var runner = this.head;
      while (runner.next != null) {
        runner = runner.next;
      }
      runner.next = new Node(val);
    }
  }

  // insertAtFront()
  insertAtFront(val) {
    var newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  removeHead() {
    if (this.head == null) {
      console.log("list is empty");
      return;
    }
    var v = this.head.data;
    this.head = this.head.next;
    return v;
  }

  average() {
    if (this.head == null) {
      return 0;
    }

    var sum = 0;
    var length = 0;
    var runner = this.head;

    while (runner != null) {
      sum += runner.data;
      length++;
      runner = runner.next;
    }
    return sum / length;
  }
  // figure out non numbers

  contains(val) {
    var runner = this.head;
    while (runner != null) {
      if (val == runner.data) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  removeFromBack() {
    var runner = this.head;
    while (runner.next.next != null) {
      runner = runner.next;
    }
    runner.next = null;
  }

  containsRecursive(runner, val) {
    // check base case
    if (runner == null) {
      return false;
    } else if (runner.data == val) {
      return true;
    }

    // return calling itself
    return this.containsRecursive(runner.next, val);
  }

  containsRecursiveKevin(val, runner = this.head) {
    if (runner.data === null) {
      return false;
    }
    if (runner.data == val) {
      return true;
    }
    runner = runner.next;
    containsRecursiveKevin(val, runner);
  }
}

var mySLL = new SLL();
mySLL.insertAtBack(3);
mySLL.insertAtBack(4);
mySLL.insertAtBack(5);
mySLL.insertAtBack(6);
console.log(mySLL);
console.log(mySLL.toArray());
mySLL.insertAtFront(7);
console.log(mySLL.toArray());
mySLL.removeHead();
console.log(mySLL.toArray());

console.log(mySLL.containsRecursive(mySLL.head, 5) ? "FOUND" : "NOT FOUND");
console.log(mySLL.contains(5) ? "FOUND" : "NOT FOUND");
console.log(mySLL.average());
