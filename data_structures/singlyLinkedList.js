class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    updateNext(node) {
        this.next = node;
    }

    updateValue(node) {
        this.val = node;
    }
}

class SinglyLinkedList {
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
            this.tail = node;
        }
        ++this.length;
        return this;
    }

    pop() {
        let node = this.head;
        if (!this.head) return undefined;
        if (!node.next) {
            this.head = null
            this.tail = null
        }
        while (node.next && node.next.next) {
            node = node.next;
        }
        console.log("node is now:", node.val)
        node.updateNext(null);
        this.tail = node;

        --this.length;
        return this;
    }

    shift() {
        if (!this.head) return undefined;
        const curr = this.head;
        this.head = curr.next;
        --this.length;
        return curr;
    }

    unshift(val) {
        const node = new Node(val);
        if (!this.head) {
            this.tail = node;
        } else {
            node.updateNext(this.head);
        }
        this.head = node;
        ++this.length;
        return node;
    }

    traverse() {
        let curr = this.head;
        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }

    get(index) {
        if(index < 0 || index >= this.length) return null
        let node = this.head
        for (let i = 0; i < index; i++) {
            node = node.next
        }
        return node
    }

    set(val, i) {
        const node = this.get(i)
        if(!node) return false
        node.updateValue(val)
        return true
    }

    insert(val, index) {
        if(index < 0 || index > this.length) return null
        if(index === this.length) return this.push(val)
        if(index === 0) return this.unshift(val)

        const node = new Node(val)
        const prev = this.get(index - 1)

        node.updateNext(prev.next)
        prev.next = node
        ++this.length
    }

    remove(index) {
        if(index < 0 || index >= this.length) return null
        if(index === this.length) return this.pop()
        if(index === 0) return this.shift()

        const node = this.get(index - 1)
        const deleted = node.next

        node.next = deleted.next
        --this.length

        return deleted
    }

    reverse() {
        [this.head, this.tail] = [this.tail, this.head]
        
        let prev = null;
        let node = this.tail;
        let next = null;

        while (node) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
    }
}