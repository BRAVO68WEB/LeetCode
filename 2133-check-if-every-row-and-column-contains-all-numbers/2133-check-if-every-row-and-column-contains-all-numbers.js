
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let n = matrix.length
    let row = new Set()
    let col = new Set()

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let row_act = matrix[i][j]
            let colm_act = matrix[j][i]

            if(row_act < 1 || row_act > n || colm_act < 1 || colm_act > n) return false

            if(row.has(row_act)) return false
            row.add(row_act)

            if(col.has(colm_act)) return false
            col.add(colm_act)
        }
        row.clear()
        col.clear()
    }

    return true
};