/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0; i<9; i++){
        let row = new Set()
        let col = new Set()
        let box = new Set()

        for(let j=0; j < 9; j++){
            let row_act = board[i][j]
            let colm_act = board[j][i]
            let box_act = board[3*Math.floor(i/3) + Math.floor(j/3)][3*(i%3)+(j%3)]

            if(row_act != '.'){
                if(row.has(row_act)) return false
                row.add(row_act)
            }
            if(colm_act != '.'){
                if(col.has(colm_act)) return false
                col.add(colm_act)
            }
            if(box_act != '.'){
                if(box.has(box_act)) return false
                box.add(box_act)
            }
        }
    }

    return true
};