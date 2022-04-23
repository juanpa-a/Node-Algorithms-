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

