impl Solution {
    pub fn generate(num_rows: i32) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();

        for i in 0..num_rows {
            // Create a vector to store the current row
            let mut row = Vec::new();

            // Calculate the value of the current row
            for j in 0..i + 1 {
                if j == 0 || j == i {
                    row.push(1);
                } else {
                    row.push(result[i as usize - 1][j as usize - 1] + result[i as usize - 1][j as usize]);
                }
            }

            // Push the current row to the result
            result.push(row);
        }

        result
    }
}