var assert = require('assert')
var arrayTasks = require('./array_tasks.js')

describe('Array tasks', function () {

	it('should concatenate two arrays, returning a new array', function () {
		var arr1 = [1, 2, 3]
		var arr2 = [4, 5, 6]
		var expectation = [1, 2, 3, 4, 5, 6]
		assert.deepEqual(expectation, arrayTasks.concat(arr1, arr2))
	})

	it('should insert an item in an array at any index position', function () {
		var arr = [1, 2, 4]
		assert.deepEqual([1, 2, 3, 4], arrayTasks.insertAt(arr, 3, 2))
	})

	it('should square all values in an array, returning a new array', function () {
		var arr = [1, 2, 3, 4, 5]
		assert.deepEqual([1, 4, 9, 16, 25], arrayTasks.square(arr))
	})

	it('should calculate the sum of all values in an array', function () {
		var arr = [1, 2, 3, 4, 5]
		assert.equal(15, arrayTasks.sum(arr))
	})

	it('should find duplicate values in an array, returning a new array of the duplicates', function () {
		var arr = [1, 2, 3, 4, 4, 5, 5, 5]
		assert.deepEqual([4, 5], arrayTasks.findDuplicates(arr))
	})

	it('should remove all instances of a value from an array, returning a new array', function () {
		var arr = [1, 2, 3, 1, 4, 5, 1]
		assert.deepEqual([2, 3, 4, 5], arrayTasks.removeAndClone(arr, 1))
	})

	it('should find all occurences of a value, returning an array of index positions', function () {
		var arr = [1, 2, 1, 3, 4, 1, 5]
		assert.deepEqual([0, 2, 5], arrayTasks.findIndexesOf(arr, 1))
	})

	it('should calculate the sum of all of even numbers in an array squared', function () {
		var arr = [1, 2, 3, 4, 5]
		assert.equal(20, arrayTasks.sumOfAllEvenNumbersSquared(arr))
	})

})
