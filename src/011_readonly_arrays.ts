
/**
 * READONLY ARRAYS
 *
 * A readonly array can be read but cannot be modified.
 *
 * Two ways:
 *
 * readonly T[]
 * ReadonlyArray<T>
 *
 * Both mean the same thing.
 */


/**
 * 1. MUTABLE ARRAY
 */

const xss = [1, 2, 3];

xss[0] = 9;      // ✅ Can modify
xss.push(4);     // ✅
xss.pop();       // ✅
xss.splice(0, 1); // ✅


/**
 * 2. READONLY ARRAY
 */

const ys: readonly number[] = [1, 2, 3];

const yss: ReadonlyArray<number> = [1, 2, 3];

// ❌ Cannot modify
// yss.push(2);
// yss.pop();
// yss.splice(0, 1);
// yss[0] = 9;


/**
 * readonly T[] and ReadonlyArray<T>
 * mean the same thing.
 */


/**
 * 3. READONLY FUNCTION PARAMETER
 *
 * Use readonly when a function should only read
 * the array and should not modify the original array.
 */

function sum(nums: readonly number[]): number {

    let s = 0;

    for (const n of nums) {
        s += n;
    }

    return s;
}


const numbers = [1, 2, 3];

console.log(sum(numbers));

// ✅ Mutable array can be passed to readonly parameter.
//
// readonly means:
// "This function promises not to modify the array."


/**
 * 4. READONLY DOES NOT MEAN METHODS DISAPPEAR
 *
 * Readonly arrays can still use non-mutating methods.
 */

const result = yss.map(n => n * 8);

console.log(result); // [8, 16, 24]


/**
 * map() creates a new array.
 * It does not modify yss.
 */


/**
 * QUICK REVISION
 *
 * readonly number[]
 *     = ReadonlyArray<number>
 *
 * readonly array:
 *     → Can read
 *     → Cannot modify
 *
 * Mutating methods:
 *     push()
 *     pop()
 *     splice()
 *     assignment: arr[0] = ...
 *
 * Non-mutating methods:
 *     map()
 *     filter()
 *     slice()
 *
 *
 * IMPORTANT:
 *
 * readonly parameter allows BOTH:
 *
 * mutable array  → readonly parameter ✅
 * readonly array → readonly parameter ✅
 */


/**
 * WHEN TO USE readonly?
 *
 * Use it when a function only needs to READ an array
 * and should not modify the caller's array.
 *
 * Example:
 *
 * function sum(nums: readonly number[]) { ... }
 *
 * This makes the function safer and clearly communicates
 * that it will not mutate the input.
 */


/**
 * INTERVIEW ANSWER
 *
 * A readonly array can be read but cannot be modified.
 * We can declare it using `readonly T[]` or
 * `ReadonlyArray<T>`. Readonly is especially useful for
 * function parameters when the function should not mutate
 * the input array.
 */