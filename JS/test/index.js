this.car = "Ford";
var mark = {
    car:"Aston Martin",
    getCar: function(){
        return this.car;
    }
}

console.log(mark.getCar());
var x = mark.getCar.bind();
console.log(x());