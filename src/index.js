function removeZero() {
  if($("#display").text()==="0") {
    $("#display").empty();
  }
}

function displayNum(num) {
  $("#display").append(num.text());
}

const operators = ["=", "+", "-", "x", "/"];
let sum = false;
let subtract = false;

let numbers = [];

function calculation() {
  let arr = $("#display").text().split(" ");
  for (let i = 0; i < arr.length; i++) {
    classify(arr[i]);
  }
}
function classify(val) {
  let input = operators.indexOf(val);
  if(input === -1) {
    //console.log(val, "numbers")
    numbers.push(val);
  } else if (input > 0) {
    console.log(val, "operators" , input)   
    if (input === 2) {
      subtract = true;
      console.log("-")
    } else if (input === 1) {
      sum = true;
      console.log("+")
    }

  } else if (input === 0) {
    //console.log(val, "equals")

  }
}

$("#clear").click(function() {
  $("#display").text("0");
  numbers = [];
  console.clear();
});

$("#equals").click(function() {
removeZero();
calculation();
let addition = 0;
let subtraction = 0;
console.log(sum, "sum1")
if (sum === true) {
//console.log(numbers, "succeed");
for (j in numbers) {
  addition += parseInt(numbers[j]);
}
//console.log(addition);    
numbers = [];
numbers.push(addition);    
//console.log(numbers);

} else if (subtract === true) {
console.log(numbers, "succeed");
for (j in numbers) {
  subtraction -= parseInt(numbers[j]);
}
//console.log(subtraction);    
numbers = [];
numbers.push(subtraction);    
//console.log(numbers);
}
console.log(sum, "sum")
console.log(subtract, " subtract")
let total = addition + subtraction;
$("#display").append(" = ", total)
sum = false;
subtract = false;
});

//numbers
$("#zero").click(function() {
  removeZero();
  $("#display").append($("#zero").text());
});
$("#one").click(function() {
  removeZero();
  displayNum($("#one"));
});
$("#two").click(function() {
  removeZero();
  displayNum($("#two"));
});
$("#three").click(function() {
  removeZero();
  displayNum($("#three"));
});
$("#four").click(function() {
  removeZero();
  displayNum($("#four"));
  });
$("#five").click(function() {
  removeZero();
  displayNum($("#five"));
});
$("#six").click(function() {
  removeZero();
  displayNum($("#six"));
});
$("#seven").click(function() {
  removeZero();
  displayNum($("#seven"));
});
$("#eight").click(function() {
  removeZero();
  displayNum($("#eight"));
});
$("#nine").click(function() {
  removeZero();
  displayNum($("#nine")); 
});
//symbols
$("#add").click(function() {
  removeZero();
  $("#display").append(" + ");
});
$("#subtract").click(function() {
  removeZero();
  $("#display").append(" - ");
});
$("#multiply").click(function() {
  removeZero();
  $("#display").append(" x ");
});
$("#divide").click(function() {
  removeZero();
  $("#display").append(" / ");
});

