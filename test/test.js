function myFunction()
{
	document.getElementById("demo").innerHTML = "Mark.";
}

function myFunction1()
{
	document.getElementById("demo1").innerHTML = "Benjamin."
}

const person = {
	firstName: "John",
	lastName : "Doe",
	id       : 5566,
	fullName : function() {
		return this.firstName + " " + this.lastName;
	}
};

const car = {type:"Ford", model:"Mustang GT5", colour:"Blue"};

function name()
{
	document.getElementById("name").innerHTML = "Successfully submitted."
}

function findMax()
{
	let max = -Infinity;
	for (let i = 0; i < arguments.length; i++)
	{
		if (arguments[i] > max)
		max = arguments[i];
	}
	return max;
}

class Car
{
	constructor(name, year)
	{
		this.name = name;
		this.year = year;
	}

	age()
	{
		const date = new Date();
		return date.getFullYear() - this.year;
	}
}
