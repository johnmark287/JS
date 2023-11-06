let arr = ["bees", "honey", "lion", "JM"];

let arr2 = arr.splice(1, 0, "new");

console.log(arr2);

function _splice(start = -1, len = -1, array, ... insert)
{
	newArray = [];
	if (start === -1 || len >= array.length)
		return (newArray);
	if (len === -1)
	{	
		for (let index = 0; index < start; index++)
            newArray.push(array[index]);
		return (newArray);
	}

	if (insert.length === 0)
	{
		for(let index = 0; index < array.length; index++)
		{
            if (index >= start && index < start + len)
                newArray.push(array[index]);
        }
		return (newArray);
	}
}
