# TypeScript Type Error: Argument of type string[] is not assignable to parameter of type string

This repository demonstrates a common TypeScript error and its solution. The error arises when passing an array of strings to a function that expects a single string argument.

## Bug Description
The `greeter` function expects a single string argument. However, the code passes an array of strings (`user`) to it. This mismatch causes a TypeScript compilation error.

## Solution
The solution involves modifying the function signature or modifying the data being passed to the function.  The example provides solutions to modify both.