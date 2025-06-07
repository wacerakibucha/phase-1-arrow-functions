// LAB 1: Implement a function called saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function displaySaturdayFun() {
  let resultDefault = saturdayFun();
  console.log("Saturday Fun (default):", resultDefault);

  let resultCustom = saturdayFun("go hiking");
  console.log("Saturday Fun (custom):", resultCustom);
}

// Function Expression: mondayWork
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function to demonstrate the output of mondayWork
function displayMondayWork() {
  let resultDefault = mondayWork();
  console.log("Monday Work (default):", resultDefault);

  let resultCustom = mondayWork("attend virtual meetings");
  console.log("Monday Work (custom):", resultCustom);
}

// Higher-order function: wrapAdjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Function to demonstrate wrapAdjective usage
function displayWrapAdjective() {
  let resultDefaultBoth = wrapAdjective()();
  console.log("Wrapped Adjective (default flair, default adjective):", resultDefaultBoth);

  let resultCustomFlair = wrapAdjective("!!!")();
  console.log("Wrapped Adjective (custom flair, default adjective):", resultCustomFlair);

  let resultCustomAdjective = wrapAdjective()("a wonderful person");
  console.log("Wrapped Adjective (default flair, custom adjective):", resultCustomAdjective);

  let resultCustomBoth = wrapAdjective("%")("a dedicated programmer");
  console.log("Wrapped Adjective (custom flair, custom adjective):", resultCustomBoth);
}

// --- Calls to demonstrate functions ---
console.log("\n--- saturdayFun calls for npm test verification ---");
console.log(saturdayFun());
console.log(saturdayFun("read a book"));

console.log("\n--- mondayWork calls for npm test verification ---");
console.log(mondayWork());
console.log(mondayWork("learn new skills"));

console.log("\n--- wrapAdjective calls for npm test verification ---");
console.log(wrapAdjective()());
console.log(wrapAdjective("~")());
console.log(wrapAdjective()("clever"));
console.log(wrapAdjective("#")("brilliant"));

// Function Expression: divide
const divide = function() {
  return 2000 / 100;
};

// Arrow Function: square
const square = x => x * x;

// Arrow Function: add
const add = (param1, param2) => param1 + param2;

// Example usage of newly added functions 
console.log("\n--- Newly Added Functions Examples ---");
console.log("divide():", divide()); // Expected: 20
console.log("square(5):", square(5)); // Expected: 25
console.log("add(10, 20):", add(10, 20)); // Expected: 30

// Call display functions
displaySaturdayFun();
displayMondayWork();
displayWrapAdjective();
