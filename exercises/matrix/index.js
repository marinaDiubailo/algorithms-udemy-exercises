// ================MATRIX SPIRAL==================
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

//****************solution************************* */
function matrix(n) {
	const array = [];

	for (let i = 0; i < n; i++) {
		array.push([]);
	}

	let count = 1;
	let startColumn = 0;
	let endColumn = n - 1;
	let startRow = 0;
	let endRow = n - 1;

	while (startColumn <= endColumn && startRow <= endRow) {
		// Top row
		for (let i = startColumn; i <= endColumn; i++) {
			array[startRow][i] = count;
			count++;
		}
		startRow++;
		// right column
		for (let i = startRow; i <= endRow; i++) {
			array[i][endColumn] = count;
			count++;
		}
		endColumn--;
		// bottom row
		for (let i = endColumn; i >= startColumn; i--) {
			array[endRow][i] = count;
			count++;
		}
		endRow--;
		// start column
		for (let i = endRow; i >= startRow; i--) {
			array[i][startColumn] = count;
			count++;
		}
		startColumn++;
	}
	console.log(array);
	return array;
}

matrix(3);

module.exports = matrix;
