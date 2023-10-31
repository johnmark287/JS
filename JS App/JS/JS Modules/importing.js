/**
 * importing modules
 * npm => package.j => type: "module"
 */

//
import person from "./exporting.js";
import { x } from "./exporting.js";
// renaming import
import { default as y } from "./exporting.js"

console.log(y)

// let johnmark = {
//     name: "johnmark",
//     age: 35,
//     course: {
//         code: "SCM23",
//         course_name: "MCS"
//     },
//     isUnderGraduate: true,
//     hobbies: ["coding", "eating", "sleeping"]
// }
// // Object Destruction method 1 (referred to as spread)
// const {name:my_name, age, course:{code, course_name}, hobbies:[c, e, s], isUnderGraduate} = johnmark;

// // Line below destructures the array (referred to as Rest)

// // const [ , v, ] = hobbies 
// // console.log(v);
// console.log();

// // combining objects by spreading methood
// obj1 = {name: "joshua"}
// obj2 = {age: 21}
// obj3 = {...obj1, favMeal: "indomie", ...obj2}
// console.log(obj3)

