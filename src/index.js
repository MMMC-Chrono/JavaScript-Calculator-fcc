function removeZero() {
  if($("#display").text()==="0") {
    $("#display").empty();
  }
}

function displayNum(num) {
  $("#display").append(num.text());
}

const operators = ["+", "-", "x", "/"];
let total = 0;

function calculation() {
  let arr = $("#display").text().split(" ");
  while (arr.length > 2) {
  for (let i = 0; i < arr.length; i++) {
    let input = operators.indexOf(arr[i]);    
     if (input === 0) {
          let addition = parseInt(arr[i-1]) + parseInt(arr[i+1]);
          arr.splice(i-1, i+2, addition);
          if (arr.length === 1) {
            total = addition;
          }
      } else if (input === 1) {
          let subtraction = parseInt(arr[i-1]) - parseInt(arr[i+1]);
          arr.splice(i-1, i+2, subtraction);
          if (arr.length === 1) {
            total = subtraction;
          } 
      } else if (input === 2) {
        let multiply = parseInt(arr[i-1]) * parseInt(arr[i+1]);
        arr.splice(i-1, i+2, multiply);
        if (arr.length === 1) {
          total = multiply;
        } 
      } else if (input === 3) {
        let divide = parseInt(arr[i-1]) / parseInt(arr[i+1]);
        arr.splice(i-1, i+2, divide);
        if (arr.length === 1) {
          total = divide;
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

