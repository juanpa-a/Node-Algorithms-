class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const node = new Node(val)
        if(this.size === 0) {
            this.first = node
            this.last = node
        } else {
            const oldFirst = this.first
            node.next = oldFirst
            this.first = node
        }
        ++this.size
    }

    pop() {
        if(this.size === 0) return null

        const deleted = this.first
        if(this.size === 1) {
            this.first = null
            this.last = null
        } else {
            this.first = deleted.next
        }

        --this.size
        return deleted
    }
}