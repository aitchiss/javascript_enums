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

	sum: function (arr) {
		var total = arr.reduce(function(total, num){
			return total + num
		})
		return total
	},

	findDuplicates: function (arr) {
		var duplicates = []
		arr.forEach(function(num){
			var firstIndex = arr.indexOf(num)
			var lastIndex = arr.lastIndexOf(num)
			if (firstIndex !== lastIndex && duplicates.indexOf(num) === -1){
				duplicates.push(num)
			}
		})
		return duplicates
	},

	removeAndClone: function (arr, valueToRemove) {
		var newArray = []
		arr.forEach(function(num){
			if (num !== valueToRemove){
				newArray.push(num)
			}
		})
		return newArray
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = []
		arr.forEach(function(num, index){
			if (num === itemToFind){
				indexes.push(index)
			}
		})
		return indexes
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		var evenNums = []
		arr.forEach(function(num){
			if (num % 2 === 0){
				evenNums.push(num)
			}
		})
		var squared = this.square(evenNums)
		return this.sum(squared)
	}

}

module.exports = arrayTasks
