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
  console.log(arr);
    if (arr.length === 1) {
      total = $("#display").text();
      console.log(total);
      console.log(arr);
    }
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
  for (let i = 0; i < arr.length; i++) {
    console.log("afterEqual")
    if (arr[i] === "=") {
      arr = arr[i+1];    
      console.log("afterEqual is working", arr)  
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

function minusPlus() {
  let arr = $("#display").text().split(" ");
  if (arr[1] === "-" && arr[3] === "+" && arr.length === 5) {
    let subtraction  = arr[0] - arr[2];
    console.log(subtraction);
    total = subtraction + parseInt(arr[4]);
    console.log(total);
    console.log("minusplus");
  }
}

$("#clear").click(function() {
  $("#display").text("0");
  total = 0;
  console.clear();
});

$("#equals").click(function() {
removeZero();
minus();
calculation();
minusPlus();
$("#display").text(total);
//$(???#display???).append(" = ").append(<br/><p>${total}</p>);
});

//numbers
$("#zero").click(function() {
  removeZero();
  afterEqual();
  $("#display").append($("#zero").text());
});
$("#one").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#one"));
});
$("#two").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#two"));
});
$("#three").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#three"));
});
$("#four").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#four"));
  });
$("#five").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#five"));
});
$("#six").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#six"));
});
$("#seven").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#seven"));
});
$("#eight").click(function() {
  removeZero();
  afterEqual();
  displayNum($("#eight"));
});
$("#nine").click(function() {
  removeZero();
  afterEqual();
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