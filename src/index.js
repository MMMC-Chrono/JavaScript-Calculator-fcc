function removeZero() {
  if($("#display").text()==="0") {
    $("#display").empty();
  }
}

$("#clear").click(function() {
      $("#display").text("0");
});

//numbers
$("#zero").click(function() {
  removeZero();
  $("#display").append($("#zero").text());
});
$("#one").click(function() {
  
  removeZero();
  $("#display").append($("#one").text());
});
$("#two").click(function() {
  removeZero();
  $("#display").append($("#two").text());
});
$("#three").click(function() {
  removeZero();
  $("#display").append($("#three").text());
});
$("#four").click(function() {
  removeZero();
$("#display").append($("#four").text());
  });
$("#five").click(function() {
  removeZero();
  $("#display").append($("#five").text());
});
$("#six").click(function() {
  removeZero();
  $("#display").append($("#six").text());
});
$("#seven").click(function() {
  removeZero();
  $("#display").append($("#seven").text());
});
$("#eight").click(function() {
  removeZero();
  $("#display").append($("#eight").text());
});
$("#nine").click(function() {
  removeZero();
  $("#display").append($("#nine").text());
  
});
//symbols
$("#add").click(function() {
  removeZero();
  $("#display").append("+");
});
$("#subtract").click(function() {
  removeZero();
  $("#display").append("-");
});
$("#multiply").click(function() {
  removeZero();
  $("#display").append("x");
});
$("#divide").click(function() {
  removeZero();
  $("#display").append("");
});

$("#equals").click(function() {
  removeZero();
  $("#display").append("=");
});

