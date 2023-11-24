/**
 * _indexOf - Finds the index of the element of in array.
 * @param {*} array Array to search element in.
 * @param {*} findIndex Element to find its index.
 * @returns Index of the findIndex element.
 */

const _indexOf = (array, findIndex) =>
{
	for (let index = 0; index < array.length; index++)
	{
		if (findIndex === array[index])
			return index;
	}
	return -1;
}

const test = [2,14,556,62,64,8,90]

console.log(_indexOf(test, 556));
