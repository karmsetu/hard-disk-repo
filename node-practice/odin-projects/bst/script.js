const tree = require('./tree')
// function createBST(sortedArray, startIndex=0, endIndex=sortedArray.length-1) {
//     if (startIndex > endIndex) return null  
//     const midPoint = Math.ceil((startIndex+endIndex)/2)
//     const parentTree = new Node(sortedArray[midPoint])
//     console.log({parentTree, midPoint, startIndex, endIndex})
//     parentTree.left = createBST(sortedArray, startIndex, midPoint-1)
//     parentTree.right = createBST(sortedArray, midPoint+1,endIndex )
//     return parentTree
// }

const balBST = new tree()
balBST.createBSTbyTree([1,2,3,4,5,6,7,8,9])
balBST.prettyPrint(balBST.data)
// console.log(balBST.root)
// console.log(balBST)
// const nt = new tree()
// nt.arrayAdd([1,2,3,4,5,7])
// console.log(nt.right)
