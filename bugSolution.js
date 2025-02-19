function foo(a, b) {
  if (b === 0) {
    if (a === 0) {
      return NaN; // Handles 0/0
    } else if (a > 0) {
      return Infinity; // Handles positive/0
    } else {
      return -Infinity; //Handles negative/0
    }
  } else if (a === 0) {
    return 0; //Handles 0/b
  } else {
    return a / b; 
  }
} 