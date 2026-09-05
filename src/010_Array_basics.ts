
/**
 * ARRAYS IN TYPESCRIPT
 *
 * Two common ways to define an array:
 *
 * 1. T[]
 * 2. Array<T>
 *
 * Both mean the same thing.
 */


/**
 * 1. T[] SYNTAX
 */

const a11: number[] = [1, 2, 3];

// Only numbers are allowed
a11.push(4);       // ✅
// a11.push("5");  // ❌


/**
 * 2. Array<T> SYNTAX
 *
 * Commonly seen in React and generic TypeScript code.
 */

const a22: Array<number> = [1, 2, 3];

a22.push(4);       // ✅
// a22.push("5");  // ❌


/**
 * T[] and Array<T> are equivalent:
 *
 * number[]       === Array<number>
 * string[]       === Array<string>
 */


/**
 * 3. TYPE INFERENCE
 *
 * TypeScript can automatically determine the
 * type of an array from its values.
 */

const scores = [10, 20, 30];

// TypeScript infers:
// number[]

scores.push(44);    // ✅
// scores.push("50"); // ❌


/**
 * 4. MIXED ARRAY
 *
 * If an array contains different types,
 * TypeScript infers a union array.
 */

const mix = [1, "2", 3];

// Type:
// (number | string)[]

mix.push(4);       // ✅
mix.push("5");     // ✅
// mix.push(true); // ❌


/**
 * QUICK REVISION
 *
 * number[]          → array of numbers
 * Array<number>     → array of numbers
 *
 * T[] and Array<T>  → same meaning
 *
 * [1, 2, 3]
 * → TypeScript infers number[]
 *
 * [1, "2", 3]
 * → TypeScript infers (number | string)[]
 */


/**
 * INTERVIEW ANSWER
 *
 * In TypeScript, arrays can be written using either
 * `T[]` or `Array<T>`. Both are equivalent.
 * TypeScript can also infer the array type automatically
 * from its elements. If an array contains multiple types,
 * TypeScript usually infers a union array.
 */