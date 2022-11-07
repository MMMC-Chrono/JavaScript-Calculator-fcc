const operators = ["/", "*", "+", "-"];
let total = 0;

function removeZero() {
  if($("#display").text()==="0") {
    $("#display").empty();
  }
}

function displayNum(num) {
  $("#display").append(num.text());
} 

function calculation() {
  let arr = $("#display").text().split(" ");
  for ( let j in operators) {      
    if (arr.indexOf(operators[0]) > -1) {
      let i = arr.indexOf("/")
      let divide = arr[i-1] / arr[i+1];        
      arr.splice(i-1, 3, divide);
      console.log("divide and arr", divide, arr);
      if (arr.length === 1) {
        total = divide;
        console.log("divide is total", arr)
      }        
    } else if (arr.indexOf(operators[1]) > -1) { 
      let i = arr.indexOf("*")         
      let multiply = arr[i-1] * arr[i+1];
      arr.splice(i-1, 3, multiply);
      console.log("multiply and arr", multiply, arr)
      if (arr.length === 1) {
        total = multiply;
        console.log("multiply is total", arr)
      }
    } else if (arr.indexOf(operators[2]) > -1) {          
      let i = arr.indexOf("+")
      let addition = parseFloat(arr[i-1]) + parseFloat(arr[i+1]);          
      arr.splice(i-1, 3, addition);
      console.log("addition and arr", addition, arr)
      if (arr.length === 1) {
        total = addition;
        console.log("addition is total", arr)
      }
    } else if (arr.indexOf(operators[3]) > -1) {
      let i = arr.indexOf("-");
      let subtraction = arr[i-1] - arr[i+1];     
      arr.splice(i-1, 3, subtraction);
      console.log("subtraction and arr", subtraction, arr);
      if (arr.length === 1) {
        total = subtraction;
        console.log("subtraction is total", arr)
      }
    }
  }
}

function minus() {
  let arr = $("#display").text().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-"){
      if (operators.indexOf(arr[i-2]) !== -1 && arr[i-1] === "" || arr[0] === "" && arr[1] === "-") {
        let minusNum = arr[i].concat(arr[i+1]);
        arr.splice(i-1, 3, minusNum)
        console.log("concatMinus", minusNum);
      }
    }
  $("#display").text(arr.join(" "));
  }
}

function oneOperator() {
  let arr = $("#display").text().split(" ");
  for (let i in arr) {
    if (operators.indexOf(arr[i-1]) !== -1 && arr[0] !== "" && arr[i] === "") {
      arr.splice(i-1);
      console.log("oneOperator is working", arr)
    }
  }
  $("#display").text(arr.join(" "));
}

function afterEqual() {
  let arr = $("#display").text().split(" ");
  let newArr = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "=") {
      newArr+=arr[i+1];    
      console.log("afterEqual is working", arr)  
      $("#display").text(newArr);
    }
  }
}

function initialSymbol(symbol) {
  let arr = $("#display").text().split(" ");
  if (arr[0] === "" && arr[1] === symbol) {
    console.log("initial symbol removed");
    $("#display").empty();
  } else if (arr[1] === "-" && arr[2] === "" && arr[3] === symbol) {
    console.log("second symbol minus removed");
    $("#display").text(" - ");
  }
}

function minusMinus() {
  let arr = $("#display").text().split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      if (arr[i-2] === "-" && arr[i-1] === "") {
        arr.splice(i, 2)
        console.log("minusMinus", arr);
      } else if (arr[i-2] === "+" && arr[i-1] === "") {
        arr.splice(i-2,2)
        console.log("removedPlus", arr)
      }
    }     
  }
  $("#display").text(arr.join(" "))
}

$("#clear").click(function() {
  $("#display").text("0");
  console.clear();
});

$("#equals").click(function() {
removeZero();
minus();
calculation();
$("#display").append(" = ").append(`<br/><p>${total}</p>`);
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
  afterEqual();
  oneOperator();
  $("#display").append(" + ");
  initialSymbol("+");
});
$("#subtract").click(function() {
  removeZero();  
  afterEqual();
  $("#display").append(" - ");
  minusMinus();
});
$("#multiply").click(function() {
  removeZero();
  afterEqual();
  oneOperator();
  $("#display").append(" * ");
  initialSymbol("*")
});
$("#divide").click(function() {
  removeZero();
  afterEqual();
  oneOperator();
  $("#display").append(" / ");
  initialSymbol("/");
});
$("#decimal").click(function() { 
  let arr = $("#display").text().split(" ");
  let num = arr[arr.length - 1];
    if (num.indexOf('.') === -1) {
      $("#display").append($("#decimal").text());
    }
});