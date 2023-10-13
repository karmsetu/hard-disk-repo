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
    arrayAdd(dataArray){
        let arrayInd = 0
        while (arrayInd <= dataArray.length) {
            this.add(dataArray[arrayInd])
            arrayInd = arrayInd +1
        }
    }
    createBST(sortedArray, startIndex=0, endIndex=sortedArray.length-1) {
        if (startIndex > endIndex) return null  
        const midPoint = Math.ceil((startIndex+endIndex)/2)
        const parentTree = new Node(sortedArray[midPoint])
        parentTree.left = this.createBST(sortedArray, startIndex, midPoint-1)
        parentTree.right = this.createBST(sortedArray, midPoint+1,endIndex )
        console.log({parentTree, midPoint, startIndex, endIndex})
        return parentTree
    }
    createBSTbyTree(sortedArray, startIndex=0, endIndex=sortedArray.length-1, pvtIndex=0) {
        if (startIndex > endIndex) return null  
        const midPoint = Math.ceil((startIndex+endIndex)/2)
        const parentTree = new Node(sortedArray[midPoint])
        if (pvtIndex == 0) {
            this.root = parentTree
            pvtIndex++
        }
        parentTree.left = this.createBST(sortedArray, startIndex, midPoint-1)
        parentTree.right = this.createBST(sortedArray, midPoint+1,endIndex )
        console.log({parentTree, midPoint, startIndex, endIndex})
        return parentTree
    }
    prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
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
    delete(input, node=this.root){    
        if(node.data == input){
            
        }
    }
}

module.exports = tree