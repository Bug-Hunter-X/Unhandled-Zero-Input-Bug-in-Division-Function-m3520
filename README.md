# Unhandled Zero Input Bug in Division Function

This repository demonstrates a common yet subtle bug in JavaScript: improper handling of zero values in a division operation.  The function `foo` attempts to divide two numbers, but it incorrectly handles the case where either input is zero, returning 0 instead of a more appropriate value like `Infinity` (for a/0 where a !=0), `-Infinity` (for a/0 where a !=0), NaN(for 0/0), or throwing an error. The solution file offers a corrected implementation.

## Bug

The original `foo` function does not appropriately handle zero values as input resulting in unexpected output which is zero.

## Solution

The solution implements more robust error handling, and appropriately returns  `Infinity`/`-Infinity`/`NaN` based on the inputs.  This ensures that the function behaves correctly even when dealing with zero values and is better equipped to handle edge cases. 