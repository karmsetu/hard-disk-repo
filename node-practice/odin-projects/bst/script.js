const Node = require('./Node')
function createBST(sortedArray, startIndex=0, endIndex=0) {
    if (startIndex > endIndex) return null  
    const mid = (startIndex+endIndex)/2
    const newTree = new Node(sortedArray[mid])
    newTree.left = createBST(sortedArray, startIndex, endIndex-1)
    newTree.right = createBST(sortedArray, mid+1, endIndex)
    return newTree
}

// import './tree'
const tree = require('./tree')
console.log(tree)
const t= new tree()

// t.arrayAdd([1,2,3,4,5,6,7,8,])
t.arrayAdd([5,1,2,10,4,9,6,7,8,10])
// console.log(t)
// t.showNodes()
t.prettyPrint(t.root)

const balBST = createBST([1,2,3,4,5,6,7,8,9,10])
console.log(balBST)

