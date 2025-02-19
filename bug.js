function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect: should handle case when a or b is 0 
  }
  return a / b; 
}