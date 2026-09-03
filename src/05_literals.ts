/**
 * TYPESCRIPT LITERAL TYPES
 * 
 * Literal types represent specific exact values, not just types.
 * Instead of just "string", you can specify exact strings like "left" or "right".
 * 
 * Benefits:
 * - Catch typos and mistakes at compile time
 * - Self-documenting code - clearly shows allowed values
 * - More precise type checking than general types
 * - Enable exhaustive checking in switch statements
 */

// CONCEPT 1: Literal Type Union
// Create a type that only accepts specific exact values
type Direction = "left" | "right" | "up";
// This means: only these three strings are valid, no other string is allowed

// Function that accepts only Direction literal types
function move(d: Direction) {
    console.log(d);
}

// CONCEPT 2: const vs let - Type Inference Difference
// When using const, TypeScript keeps the EXACT literal type
const d1 = "left" // TypeScript infers: "left" (literal type)
move(d1) // ✓ Works! d1 has type "left", which matches Direction

// When using let, TypeScript WIDENS the type to general string
let d2 = "left" // TypeScript infers: string (widened type)
// move(d2) // ❌ Error! d2 is 'string', not the literal "left"
// TypeScript doesn't know if d2 will change to some other value

// SOLUTION: Explicitly annotate let with the literal type
let d3: Direction = "left";
move(d3) // ✓ Works! d3 is explicitly typed as Direction