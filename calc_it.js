alert("Please make sure your console is open");

var num = parseInt(prompt('choose a number'));
console.log('num', num);

var op = prompt('choose an operation (i.e. + = add, - = subtract, * = multiply, / = divide, sqrt = square root, exp = exponent)');
console.log('op', op);

if (isNaN(num) === true && isNaN(numDos) === true) {
  alert('Try entering a real number ya idjit. Hit refresh to try again');
  } else if(op !== "sqrt") {
    var numDos = parseInt(prompt('choose a second number'));
    console.log('numDos', numDos);
  } else if(op === "+") {
  alert(num + numDos);
  console.log(num + numDos);
}  else if (op === "-") {
  alert(num - numDos);
  console.log(num - numDos);
}  else if (op === "*") {
  alert(num * numDos);
  console.log(num * numDos);
}  else if (op === "/") {
  alert(num / numDos);
  console.log(num / numDos);
}   else if (op === "sqrt") {
  alert(Math.sqrt(num));
  console.log(Math.sqrt(num));
}   else if (op === "exp") {
  alert(Math.pow(num, numDos));
  console.log(Math.pow(num, numDos));
  } else {
    console.log("Error")
  };





