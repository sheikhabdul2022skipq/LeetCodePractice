/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const res = [];

    for (let i = 0; i < mat.length; i++) {
        const sum = mat[i].reduce((sum, item) => sum + item, 0);
        res.push({ i, sum });
    }

    res.sort((a, b) => a.sum < b.sum ? -1 : 1);

    const result = [];

    for (let i = 0; i < k; i++) {
        const item = res[i];
        result.push(item.i);
    }

    return result;
};