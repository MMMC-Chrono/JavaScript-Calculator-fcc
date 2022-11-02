function removeZero() {
  if($("#display").text()==="0") {
    $("#display").empty();
  }
}

function displayNum(num) {
  $("#display").append(num.text());
}

const operators = ["+", "-", "x", "/"];
let sum = false;
let subtract = false;

let numbers = [];

function calculation() {
  let arr = $("#display").text().split(" ");
  for (let i = 0; i < arr.length; i++) {
    let input = operators.indexOf(arr[i]);
  if(input === -1) {
    numbers.push(arr[i]);
  } else if (input > -1) { 
    
    if (input === 0) {
      sum = true;
      console.log(i, "add")
    } else if (input === 1) {
      subtract = true;
      console.log(i, "minus")
    }

  }
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
/*if (sum === true) {
  for (j in numbers) {
    addition = parseInt(numbers[0]) + parseInt(numbers[1]);
  }
  numbers = [];
  numbers.push(addition);   
  sum = false;

} else if (subtract === true) {
  console.log(numbers, "succeed");
  subtraction = numbers[0] - numbers[1];   
  numbers = [];
  numbers.push(subtraction);  
  subtract = false;
}*/
let total = addition + subtraction;
$("#display").append(" = ", total)
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

