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
