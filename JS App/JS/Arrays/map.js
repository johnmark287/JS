let arr = [2, 3, 4, 5, 6, 7]

/**
 * _sqr - calculates the square of the element passed.
 * @param {*} element value to square
 * @Returns returns element raised to power 2.
 */
function sqr(element)
{
    return element * element
}
//let sqr = (element) => element * element

/**
 * _map - Maps each processed element into a new array.
 * @param {*} arr Reference to the declared array.
 * @param {*} myFunction Function that processes each element in the array
 * @returns An array copy of the processed.
 */
function _map(arr, myFunction)
{
    let buffer = [];
    let i;
    for (i = 0; i < arr.length; i++)
        buffer[i] = myFunction(arr[i])
    return (buffer)
}

let arrCopy = _map(arr, sqr)

console.log(arrCopy)

