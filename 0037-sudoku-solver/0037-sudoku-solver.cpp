#include <bits/stdc++.h>
#include "string.h"

using namespace std;

class Solution {
public:
    void solveSudoku(vector<vector<char>>& board) {
        array<array<bool, 9>, 9> row, col, block;

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                row[i][j] = false;
                col[i][j] = false;
                block[i][j] = false;
            }
        }

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c != '.') {
                    int num = c - '1';
                    row[i][num] = true;
                    col[j][num] = true;
                    block[i / 3 * 3 + j / 3][num] = true;
                }
            }
        }

        solve(board, row, col, block, 0, 0);

        printBoard(board);
    }

    bool solve(vector<vector<char>>& board, array<array<bool, 9>, 9>& row, array<array<bool, 9>, 9>& col, array<array<bool, 9>, 9>& block, int i, int j) {
    if (i == 9) return true;
    if (j == 9) return solve(board, row, col, block, i + 1, 0);
    if (board[i][j] != '.') return solve(board, row, col, block, i, j + 1);

    int blockIndex = (i / 3) * 3 + (j / 3);
    for (int num = 0; num < 9; num++) {
        if (row[i][num] || col[j][num] || block[blockIndex][num]) continue;

        board[i][j] = num + '1';
        row[i][num] = true;
        col[j][num] = true;
        block[blockIndex][num] = true;

        if (solve(board, row, col, block, i, j + 1)) return true;

        board[i][j] = '.';
        row[i][num] = false;
        col[j][num] = false;
        block[blockIndex][num] = false;
    }

    return false;
}

    void printBoard(vector<vector<char>>& board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                cout << board[i][j] << " ";
            }
            cout << endl;
        }
    }
};