/**
 * _find - finds the number that satisfies the condition of the callback function
 * @param {*} array Array.
 * @param {*} callback Function the has a given condition.
 * @returns The 1st element that satidfies the callback() condition.
 */

const _find = (array, callback) => 
{
    for (const element of array)
    {
        if (callback(element))
            return element;
    }
}

const isEven = (element) => element % 2 === 0;

const array = [1, 2, 4, 6, 8, 17];

console.log(_find(array, isEven))
