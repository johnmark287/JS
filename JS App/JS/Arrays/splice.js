/**
 * _splice - Adds or removes a given number od elements in the original array.
 * @param {*} array Reference to the declared array.
 * @param {*} start Starting point of the array to delete.
 * @param {*} delCount Number of items to delete.
 * @param {*} items An array of items spread.
 * @returns Modified array of the original array(modifies the original. Not copy)
 */

const _splice = (array, start, delCount, ... items) =>
{
	const removed = [];
	const result = [];

	for (let index = 0; index < start && index < array.length; index++)
		result.push(array[index]);
	for (let index = start; index < start + delCount && index < array.length; index++)
		removed.push(array[index]);

	for (let index = start + delCount; index < array.length; index++)
		result.push(array[index]);

	for (let index = 0; index < items.length; index++)
		result.push(items[index]);

	array.length = 0;
	for (let index = 0; index < result.length; index++)
		array.push(result[index]);

	return (removed);
}

let arr = ["bees", "honey", "lion", "JM"];

console.log(arr);

_splice(arr, 2, 2, "john", "mark", "dancoon", "karume", "Moses");

console.log(arr);

/** */
// function test(params) {
// 	params.push(2);
// }

// let arr = [2,4,5,6];
// console.log(arr);
// arr.length = 0;
// console.log(arr);
