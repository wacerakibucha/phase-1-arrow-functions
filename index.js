// LAB 1: Implement a function called saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function Expression: mondayWork
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Higher-order function: wrapAdjective
function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Function Expression: divide
const divide = function () {
  return 2000 / 100;
};

// Arrow Function: square
const square = (x) => x * x;

// Arrow Function: add
const add = (param1, param2) => param1 + param2;

// Export functions for testing
module.exports = {
  saturdayFun,
  mondayWork,
  wrapAdjective,
  divide,
  square,
  add,
};
