/**
 * TYPE INFERENCE IN TYPESCRIPT
 * 
 * Key Concepts:
 * 1. TypeScript can automatically infer variable types from their initialization values
 * 2. Use type inference to reduce boilerplate and improve readability
 * 3. Explicit type annotations are valuable when types aren't obvious
 * 4. TypeScript compiles to JavaScript cleanly with proper module configuration
 */

// CONCEPT 1: BASIC TYPE INFERENCE
// TypeScript infers type from the assigned value
let count = 0; // TypeScript infers: number
console.log(typeof count); // "number"


// CONCEPT 2: LITERAL VS GENERAL TYPES
// 'const' with strings infers the exact literal type
const site = "alokranjan" // TypeScript infers: "alokranjan" (literal type)
const scores = [10, 20, 30] // TypeScript infers: number[]


// CONCEPT 3: FUNCTION RETURN TYPE INFERENCE
// Explicit return type annotations improve code clarity and catch errors
export function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 2)) // Output: 7

// CONCEPT 4: UNION TYPES & EXPLICIT ANNOTATION
// Use explicit type annotations when the type is not immediately obvious
// Union types allow a variable to hold multiple possible types
let maybe: string | number;
maybe = Math.random() > 0.5 ? "test" : 10; // Can be either string or number