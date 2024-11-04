#include <bits/stdc++.h>

using namespace std;

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        array<bitset<9>, 9> row, col, box;
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char c = board[i][j];
                if (c == '.') continue;
                int num = c - '1';
                int boxIndex = (i / 3) * 3 + (j / 3);
                if (row[i][num] || col[j][num] || box[boxIndex][num]) return false;
                row[i][num] = col[j][num] = box[boxIndex][num] = 1;
            }
        }
        return true;
    }
};