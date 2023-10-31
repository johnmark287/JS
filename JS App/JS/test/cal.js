let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("result");
let form = document.getElementById("x");

form.addEventListener("submit", function () {
    if (!num1.value || !num2.value)
        alert("Please enter values.");
    else
    {
        let x = parseFloat(num1.value);
        let y = parseFloat(num2.value);

        let res = x + y;
        alert(res); 
    }
});