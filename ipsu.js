function checkConditions(p, q) {
  if (Math.abs(p) < 1e-10 && q < 0) {
    return false;
  }
  return true;
}

console.log(checkConditions(0.000000001, -1)); // Output: true
console.log(checkConditions(0, -1)); // Output: false
console.log(checkConditions(0.000000001, 1)); // Output: true
console.log(checkConditions(0, 0)); // Output: true
