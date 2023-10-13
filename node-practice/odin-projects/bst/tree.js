const Node= require('./Node')
class tree {
    constructor(){
        this.root = null
    }
    searchTree(data, node){
        if (data < node.data) {
            if (node.left === null ) {
                node.left = new Node(data)
                return
            } else if (node.left != null) {
                return this.searchTree(data, node.left)
            }
        } else if (data > node.data) {
            if (node.right === null) {
                node.right = new Node(data)
                return
            } else if (node.right != null) {
                return this.searchTree(data, node.right)
            }
        } else {return null}
    }
    add(data){
        const node = this.root
        if (node == null) {
            this.root= new Node(data)
            return
        } else {
            return this.searchTree(data, node)
        }
    }
    findMin(){
        let currentMin = root;
        while (currentMin.left != null) {
            currentMin = currentMin.left
        }
        return currentMin
    }
    findMax(){
        let currentMax = root;
        while (currentMax.right != null) {
            currentMax = currentMax.right
        }
        return currentMax
    }
    showNodes(){
        console.log(this.root)
    }
    arrayAdd(dataArray){
        let arrayInd = 0
        while (arrayInd <= dataArray.length) {
            this.add(dataArray[arrayInd])
            arrayInd = arrayInd +1
        }
    }
    prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}

module.exports = tree