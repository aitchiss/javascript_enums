var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2)
	},

	insertAt: function (arr, itemToAdd, index) {
		//get two sliced arrays
		var leftSide = arr.slice(0, index)
		var rightSide = arr.slice(index, arr.length)
		//add to end of first one
		leftSide.push(itemToAdd)
		//merge them back together
		return this.concat(leftSide, rightSide)
	},

	square: function (arr) {
		var squaredArray = arr.map(function(num){
			return num * num
		})
		return squaredArray
	},

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },

	// removeAndClone: function (arr, valueToRemove) {
		
	// },

	// findIndexesOf: function (arr, itemToFind) {
		
	// },

	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
