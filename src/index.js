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

