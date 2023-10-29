var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var form = document.getElementById("x");

form.addEventListener("submit", function () {
    if (!num1.value || !num2.value)
        alert("Please enter values.");
    else
    {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);

        var res = x + y;
        alert(res); 
    }
});