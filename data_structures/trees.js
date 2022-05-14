class Node {
    constructor(value) {
        this.val = value;
        this.freq = 1;
        this.left = null;
        this.right = null;
    }
}

class BinarySearcTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        // const newNode = new Node(val);

        // if (!this.root) {
        //     this.root = newNode;
        //     return this;
        // }

        // let leaf = this.root;
        // const updateDirection = () => (leaf.val < val ? "right" : "left");
        // let direction = updateDirection();

        // while (leaf[direction]) {
        //     leaf = leaf[direction];
        //     direction = updateDirection();
        // }

        // if (val === leaf.val) {
        //     ++leaf.freq;
        //     return this;
        // }

        // leaf[direction] = newNode;
        // return this;
        let newNode = new Node(val);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (val === current.val) return undefined;
            if (val < current.val) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    find(val) {
        let node = this.root;

        while (node && node.val !== val) {
            node.val < val ? (node = node.right) : (node = node.left);
        }

        return node;
    }

    bfs_levelorder() {
        let node = this.root;
        const queue = [node];
        const visited = [];

        while (queue.length) {
            node = queue.shift();
            visited.push(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        return visited;
    }

    dfs_preorder() {
        const current = this.root;
        const traverse = (node, visited = []) => {
            visited.push(node);
            if (node.left) traverse(node.left, visited);
            if (node.right) traverse(node.right, visited);
            return visited;
        };
        return traverse(current);
    }

    dfs_postorder() {
        const current = this.root;
        const traverse = (node, visited = []) => {
            if (node.left) traverse(node.left, visited);
            if (node.right) traverse(node.right, visited);
            visited.push(node);
            return visited;
        };
        return traverse(current);
    }

    dfs_inorder() {
        const current = this.root;
        const traverse = (node, visited = []) => {
            if (node.left) traverse(node.left, visited);
            visited.push(node);
            if (node.right) traverse(node.right, visited);
            return visited;
        };
        return traverse(current);
    }

    dfs_levelorder() {
        const queue = [this.root]
        
    }

    getHeight() {
        const current = this.root;
        const go = (node) => {
            if (node === null) return -1;
            return Math.max(go(node.left), go(node.right)) + 1;
        };
        return go(current);
    }
}

const tree = new BinarySearcTree();
const add = (val) => tree.insert(val);
const nums = [
    10, 6, 3, 8, 15, 20, 32, 12, 5, 8, 97, 3, 45, 1, 4, 5, 76, 3, 0, 6, 43,
];
nums.forEach(add);

tree.bfs_levelorder().map(({val}) => console.log("-", val))
// console.log(tree.dfs_preorder().map(({val}) => val))
// console.log(tree.dfs_postorder().map(({val}) => val))
// console.log(tree.dfs_inorder().map(({ val }) => val));

// console.log(tree.getHeight());
