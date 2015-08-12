alert("Please make sure your console is open");

var num = parseInt(prompt('choose a number'));
console.log('num', num);

var op = prompt('choose an operation (i.e. +, -, *, /)');
console.log('op', op);

var numDos = parseInt(prompt('choose a second number'));
console.log('numDos', numDos);

if(op === "+") {
  prompt(num + numDos);
  console.log(num + numDos);
}  else if (op === "-") {
  prompt(num - numDos);
  console.log(num - numDos);
}  else if (op === "*") {
  prompt(num * numDos);
  console.log(num * numDos);
}  else if (op === "/") {
  prompt(num / numDos);
  console.log(num / numDos);
  } else {
    prompt(num + numDos);
    console.log("Error")
  };





