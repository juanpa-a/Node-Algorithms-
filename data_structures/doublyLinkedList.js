class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    updateNext(node) {
        this.next = node;
    }

    updatePrev(node) {
        this.prev = node;
    }

    updateValue(node) {
        this.val = node;
    }
}

class DoblyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.updateNext(node);
            node.updatePrev(this.tail);
            this.tail = node;
        }
        ++this.length;
        return this;
    }

    pop() {
        if (!this.head) return null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }

        const deleted = this.tail;
        this.tail = deleted.prev;
        this.tail.updateNext(null);
        --this.length;

        return deleted;
    }

    shift() {
        if (!this.head) return null;
        const deleted = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            const newHead = deleted.next;
            this.head = newHead;
            newHead.updatePrev(null);
        }
        deleted.updateNext(null);
        --this.length;
        return deleted;
    }

    unshift(val) {
        const node = new Node(val);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            let oldHead = this.head;
            oldHead.updatePrev(node);
            node.updateNext(oldHead);
            this.head = node;
        }

        ++this.length;
        return node;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;

        let node;

        if (index <= this.length / 2) {
            node = this.head;
            for (let i = 0; i < index; i++) {
                node = node.next;
            }
        } else {
            node = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                node = node.prev;
            }
        }

        return node;
    }

    set(val, i) {
        const node = this.get(i);
        if (!node) return false;
        node.updateValue(val);
        return true;
    }

    traverse() {
        let curr = this.head;
        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }

    insert(val, i) {
        if (i < 0 || i >= this.length) return null
        if(i === 0) return this.unshift(val)
        if(i === this.length) return this.push(val)

        const next = this.get(i)
        const prev = next.prev
        const node = new Node(val)

        prev.updateNext(node)
        next.updatePrev(node)

        node.updatePrev(prev)
        node.updateNext(next)
        ++this.length

        return true
    }

    remove(i) {
        if (i < 0 || i > this.length) return null
        if(i === 0) return this.shift()
        if(i === this.length) return this.pop()

        const deleted = this.get(i)
        const prev = deleted.prev
        const next = deleted.next

        prev.updateNext(next)
        next.updatePrev(prev)

        deleted.updateNext(null)
        deleted.updatePrev(null)
        --this.length

        return deleted
    }
}

const list = new DoblyLinkedList();
const add = (val) => list.push(val);
const myStuff = [
    "mice",
    "keyboard",
    "water bottle",
    "phone",
    "taquitos",
    "pizza",
];
myStuff.forEach(add);

// <------ Playground ------
// list.unshift("taquitos")
// ------------------------>

list.traverse();
console.log(4);
list.get(4);

list.set("sneakers", 0);
list.remove(4)
list.insert("mic", 4)
list.traverse();
