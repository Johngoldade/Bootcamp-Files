// Functions are reusable blocks of code that perform a specific task
// This is a function declaration
function declareHello() {
  console.log('Hello, I am a function declaration.');
  console.log('-----------------------------------');
  // Return stops the execution of a function
  return;
}

// This is a function expression
const expressHello = function () {
  console.log('Hello, I am a function expression.');
  console.log('-----------------------------------');
  return;
};

// Functions must be called to execute
declareHello();
expressHello();

// Functions can be called again to make the block of code execute again
declareHello();

// Functions can take parameters.
// Parameters give a name to the data to be passed into the function
function declareHelloAgain(x, y, z) {
  console.log(`Hello, the values of my parameters are ${x}, ${y}, and ${z}.`);
  console.log('-----------------------------------');
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, 'Hello', true);


function trial(c,r){
  console.log(c*r);
  return
}

trial(14,78);
trial(3,4)
trial(5,6)
