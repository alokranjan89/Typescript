/**
 * TYPESCRIPT SPECIAL TYPES
 * 
 * Beyond primitives, TypeScript has special types for:
 * - Handling absence of values (undefined, null)
 * - Functions that don't return values (void)
 * - Functions that never return (never)
 * - Unknown/unsafe types (any, unknown)
 */

// SPECIAL TYPE 1: undefined with strictNullCheck
// strictNullCheck enforces that null/undefined can only be assigned when explicitly allowed
// Enable in tsconfig.json for type safety
// Without union type: let title: string = "intro"
// title = undefined // ❌ Error: Type 'undefined' not assignable to type 'string'

// CORRECT: Use union type to allow undefined
let subtitle: string | undefined = "sangam";
// subtitle can now be either string or undefined

// SPECIAL TYPE 2: void
// Used for functions that don't return a meaningful value
// void means "no return value" - useful for side-effects only
function log(msg: string): void {
    console.log(msg);
}

// SPECIAL TYPE 3: never
// Used for functions that never return normally
// Examples: functions that throw errors or infinite loops
// A function that always throws an error
function fail(msg: string): never {
    throw new Error(msg);
}

// SPECIAL TYPE 4: any
// ❌ AVOID: Disables type checking completely
// Using 'any' defeats the purpose of TypeScript and hides errors
// The 'any' type is essentially "I don't know what this is" - unsafe!
const valueAny: any = JSON.parse('{"x" : 1}');

// This compiles but can crash at runtime because TypeScript isn't checking types
// valueAny.notThere.toFixed(2); // ❌ May fail: notThere is undefined, can't call toFixed()