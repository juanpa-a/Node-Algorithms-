class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12, 1];
    }
    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
        return this.values;
    }
    extractMax() {
        [this.values[0], this.values[this.values.length - 1]] = [
            this.values[this.values.length - 1],
            this.values[0],
        ];
        const max = this.values.pop();
        console.log(max);
        this.bubbleDown();
    }
    bubbleDown() {
        let parentIndex = 0;
        let leftChild;
        let rightChild;

        while (parentIndex < this.values.length) {
            leftChild = 2 * parentIndex + 1;
            rightChild = 2 * parentIndex + 2;
            let childIndex =
                this.values[leftChild] >= this.values[rightChild]
                    ? leftChild
                    : rightChild;
            if (
                this.values[parentIndex] >= this.values[childIndex] ||
                !this.values[childIndex]
            )
                break;
            [this.values[parentIndex], this.values[childIndex]] = [
                this.values[childIndex],
                this.values[parentIndex],
            ];
            parentIndex = childIndex;
        }
    }
}

class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        const node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element.priority <= parent.priority) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
        return this.values;
    }
    dequeue() {
        [this.values[0], this.values[this.values.length - 1]] = [
            this.values[this.values.length - 1],
            this.values[0],
        ];
        const max = this.values.pop();
        console.log(max);
        this.bubbleDown();
    }
    bubbleDown() {
        let parentIndex = 0;
        let leftChild;
        let rightChild;

        while (parentIndex < this.values.length) {
            leftChild = 2 * parentIndex + 1;
            rightChild = 2 * parentIndex + 2;
            let childIndex =
                this.values[leftChild].priority >=
                this.values[rightChild].priority
                    ? leftChild
                    : rightChild
            if (
                !this.values[childIndex] ||
                this.values[parentIndex].priority >=
                    this.values[childIndex].priority
            )
                break;
            [this.values[parentIndex], this.values[childIndex]] = [
                this.values[childIndex],
                this.values[parentIndex],
            ];
            parentIndex = childIndex;
        }
    }
}


const er = new PriorityQueue()

er.enqueue("common cold", 1)
er.enqueue("gunshot wound", 5)
er.enqueue("high fever", 2)

console.log(er.values)

er.dequeue()
er.dequeue()
er.dequeue()