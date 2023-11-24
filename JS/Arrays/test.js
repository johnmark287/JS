let studentDetail = {
	"s1": {
		"name": "john",
		"age": 23
	},
	"s2": {
		"name": "mark",
		"age": 44
	},
	"s3": {
		"name": "kevo",
		"age": 17
	},
}

for (const property in studentDetail)
	console.log(studentDetail[property])
