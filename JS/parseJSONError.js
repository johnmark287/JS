let error = {
    "details":[
        {
            "path": ["username"],
            "message":"johnmark taken"
        },
        {
            "path": ["password"],
            "message":"invalid password"
        }
    ]
}

// method 1
const parseError = error => (Object.assign({},  ...error.details.map(errorObject => ({[errorObject.path[0]]: [errorObject.message]}))))

console.log(parseError(error));

// method 2
function parseJSONError(error) {
    return error.details.reduce((result, item) => {
        const path = item.path[0]
		result[path] = item.message
		return result
    }, {})
}

// methos2
let parseJSONError = error => (error.details.reduce(previous, current)) => ({... previous, [current.path[0]]: [current.message]}, {})
const method2 = parseJSONError(error)
console.log(method2)

// Expected 
// {
//     username: "username taken",
//     password: "week pasword"
// }
