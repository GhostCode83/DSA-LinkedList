class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.insertFirst = this.insertFirst;
    this.insertLast = this.insertLast;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head) //why is the next value the first value.  it is both first and next???
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst
    }
    else {
      let tempNode = this.head
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode
  }

  remove(item) {
    if (!this.head) {
      return null
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found')
      return;
    }
    previousNode.next = currNode.next;

  }

  insertBefore(key, item) {
    if (!this.head) {
      return null
    }
    if (this.head.value === key) {
      let nextNode = this.head
      let newNode = new _Node(item, nextNode)
      return;
    }

    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== key)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Key not found')
      return;
    }
    let newNode = new _Node(item, currNode.next)
    previousNode.next = newNode.value
  }


  // class _Node {
  //   constructor(value, next) {
  //     this.value = value;
  //     this.next = next;
  //   }
  // }

  // class LinkedList {
  //   constructor() {
  //     this.head = null;
  //     this.insertFirst = this.insertFirst;
  //     this.insertLast = this.insertLast;
  //     this.find = this.find;
  //     this.remove = this.remove;

  //   }

  //   insertFirst(item) {
  //     this.head = new _Node(item, this.head);
  //   }

  //   insertLast(item) {
  //     if (this.head === null) {
  //       this.insertFirst(item);
  //     }
  //     else {
  //       let tempNode = this.head;
  //       while (tempNode.next !== null) {
  //         tempNode = tempNode.next;
  //       }
  //       tempNode.next = new _Node(item, null);
  //     }
  //   }


  // find(item) {
  //   // Start at the head
  //   let currNode = this.head;
  //   // If the list is empty
  //   if (!this.head) {
  //     return null;
  //   }
  //   // Check for the item 
  //   while (currNode.value !== item) {
  //     /* Return null if it's the end of the list 
  //        and the item is not on the list */
  //     if (currNode.next === null) {
  //       return null;
  //     }
  //     else {
  //       // Otherwise, keep looking 
  //       currNode = currNode.next;
  //     }
  //   }
  //   // Found it
  //   return currNode;
  // }

  //   remove(item) {
  //     if (!this.head) {
  //       return null;
  //     }
  //     if (this.head.value === item) {
  //       this.head = this.head.next;
  //       return;
  //     }
  //     let currNode = this.head;
  //     let previousNode = this.head;

  //     while ((currNode !== null) && (currNode.value !== item)) {
  //       previousNode = currNode;
  //       currNode = currNode.next;
  //     }
  //     if (currNode === null) {
  //       console.log('Item not found');
  //       return;
  //     }
  //     previousNode.next = currNode.next;
  //   }

  //   // insertBefore(value, next) {
  //   //   if (_Node.ne)

  //   // }

  //   // insertAfter() {

  //   // }

  //   // insertAt() {

  //   // }



}

module.exports = LinkedList