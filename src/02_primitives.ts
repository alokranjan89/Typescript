/**
 * TYPESCRIPT PRIMITIVE TYPES
 * 
 * Primitives are the basic building blocks of TypeScript.
 * They represent single, immutable values.
 * 
 * Main Primitive Types:
 * - string: Text data
 * - number: Integer and decimal numbers
 * - boolean: true or false
 * - bigint: Integers larger than Number.MAX_SAFE_INTEGER
 * - symbol: Unique, immutable identifiers
 * - null: Intentional absence of value
 * - undefined: Variable declared but not assigned
 */

// PRIMITIVE 1: string
// Represents text data. Methods like toLocaleLowerCase() are available.
let username: string = "Alok"

// PRIMITIVE 2: number
// Represents both integers and floating-point numbers
// Range: -(2^53 - 1) to (2^53 - 1)
let age: number = 40;

// PRIMITIVE 3: boolean
// Represents logical values: true or false
let isCreator: boolean = true;

// PRIMITIVE 4: bigint
// For integers larger than Number.MAX_SAFE_INTEGER (2^53 - 1)
// Use 'n' suffix to denote bigint literals
const big: bigint = 2n ** 63n - 1n;

// PRIMITIVE 5: symbol
// Creates unique, immutable values useful as object keys
// Use 'unique symbol' for TypeScript constants
const TOKEN: unique symbol = Symbol('TOKEN')

// FUNCTION EXAMPLE: Using number primitive
// Parameters and return type are explicitly annotated as 'number'
function yearsToday(years : number) : number
{
    return years * 365;
}

// DEMONSTRATIONS
console.log(username.toLocaleLowerCase()); // "alok"
console.log(yearsToday(2)); // 730