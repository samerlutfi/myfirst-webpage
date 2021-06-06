// alert("welcome to the world of shopping!")
// var intrest = prompt("Do you prefer android or ios?")

// if (intrest == "ios") {
//   alert("great choice")

// }
//  else {
//   alert("the best option for sure")
// }

// document.write("<p>thank you for your visit</p>")

var operator = prompt("whats your cellular operator?")
function operatorfun(operator){while (operator != "zain" && operator != "Umniah" && operator != "orange") {
  operator = prompt("please choose one of your local cellular operator: zain,Umniah,orange")}
}
operatorfun(operator);

var x = prompt("how many pictures of our proudct want to see?")

function proudctsfun(x){

  for (var i = 0; x > i; i++) {
  document.write("<img src='https://fdn.gsmarena.com/imgroot/news/19/12/top-phones-of-2019/-727/gsmarena_001.jpg'/>")
}
}
proudctsfun(x);

