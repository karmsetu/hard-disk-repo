/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
    console.log(target);
    let subMatricesSet = new Set();
    for (let i = 0; i < matrix.length - 1; i++) {
        for (let j = 0; j < matrix[i].length - 1; j++) {
            let subMatrix = [];
            for (let k = i; k < i + 2; k++) {
                let subMatrixRow = [];
                for (let l = j; l < j + 2; l++) {
                    subMatrixRow.push(matrix[k][l]);
                }
                subMatrix.push(subMatrixRow);
            }
            subMatricesSet.add(subMatrix);
        }
    }
    console.log(subMatricesSet);
    return subMatricesSet.length;
};

const matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
];
console.log(numSubmatrixSumTarget(matrix, 1));
