var val_1 = "10";
var val_2 = 10;
var total = val_1 - val_2;

console.log(total);

var val_1 = "10";
var  val_2 = 10;
var total = val_1 - val_2;

console.log(total);


var myContainer = {
    height: 4,
    width: 2,
    valueOf: function() {
      return this.height * this.width
    }
  }
  // valueOf returns 8 as 4*2 = 8
  
  var num = 12;
  console.log(num + myContainer) //20
  