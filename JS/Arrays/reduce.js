function _reduce(array, callback, initialValue)
{
	let accumulator = (initialValue !== undefined)? initialValue: array[0]
	let currentIndex = (initialValue !== undefined)?0:1

	for (let index = currentIndex; index < array.length; index++)
	{
        accumulator = callback(accumulator, array[index]);
    }
	return accumulator;
}

// arr = ["karume", "dancoon", "johnmark", "javan", "christine"]
let arr = [1,2,3,4,55,6,7,7,8,89]

let sum = _reduce(arr, (accumulator, currentValue) => {
	accumulator+ currentValue;
}, 0);
// let arr2 = _reduce(arr, function(accumulator, currentValue, currentIndex, array)
// {
//     return accumulator + currentValue;
// })
console.log(sum);