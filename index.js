// Task 1. Flexible String Manipulation with Functions
function formatFullName(firstName, lastName) {
  let nameFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let nameLast = lastName.charAt(0).toUpperCase() + lastName.slice(1);
  if (firstName === "" || lastName === "") {
    alert("Invalid name");
  }
  return `${nameLast} ${nameFirst}`;
}
console.log(formatFullName("", ""));
console.log(formatFullName("thomas", "bi"));

// Task 2. Mathematical operations with multiple parameters

function calculateTotalCost(price, quantity, taxRate) {
  let totalCost = price * quantity * (1 + taxRate);
  if (
    typeof price !== "number" ||
    price <= 0 ||
    typeof quantity !== "number" ||
    quantity <= 0 ||
    typeof taxRate !== "number" ||
    taxRate <= 0
  ) {
    return `Invalid input`;
  }
  return totalCost;
}
console.log(calculateTotalCost(2, -2, 5));
console.log(calculateTotalCost("dec", 2, 5));
console.log(calculateTotalCost(10, 0, 5));
console.log(calculateTotalCost(10, 2, 5));

// Task 3. Functions with Conditional Logic

function checkEligibility(age, isEmployed) {
  if (age > 18 && isEmployed) {
    return "Hey you are eligible";
  } else if (age > 18 && !isEmployed) {
    return "Hey you are conditionally eligible";
  } else return "Not eligible";
}
console.log(checkEligibility(23, true));
console.log(checkEligibility(22, false));
console.log(checkEligibility(18));

// Task 4. Refactoring for Reusibility

function calculateTotalCost(price, quantity, taxRate, discount = 10) {
  let totalCost = (price - discount) * quantity * (1 + taxRate);
  if (
    typeof price !== "number" ||
    price <= 0 ||
    typeof quantity !== "number" ||
    quantity <= 0 ||
    typeof taxRate !== "number" ||
    taxRate <= 0
  ) {
    return `Invalid input`;
  }
  return totalCost;
}
console.log(calculateTotalCost(2, -2, 5));
console.log(calculateTotalCost("dec", 2, 5));
console.log(calculateTotalCost(10, 0, 5));
console.log(calculateTotalCost(100, 2, 5));
