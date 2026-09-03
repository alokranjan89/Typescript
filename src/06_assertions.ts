/**
 * ============================================================
 * TYPESCRIPT: TYPE ASSERTIONS & TYPE GUARDS
 * ============================================================
 *
 * Main idea:
 *
 * Type Assertion -> "Trust me, I know the type."
 * Type Guard     -> "Let me check the type first."
 *
 * ------------------------------------------------------------
 * Type Assertion: `as`
 * ------------------------------------------------------------
 * - Tells TypeScript to treat a value as a specific type.
 * - Does NOT perform runtime validation.
 * - Can hide runtime errors if your assumption is wrong.
 *
 * Example:
 *
 * const user = data as User;
 *
 * Means:
 * "TypeScript, trust me. `data` is a User."
 *
 *
 * ------------------------------------------------------------
 * Type Guard: `is`
 * ------------------------------------------------------------
 * - Performs a runtime check.
 * - Safely narrows a value to a specific type.
 * - Useful for untrusted data such as:
 *      - API responses
 *      - JSON
 *      - User input
 *      - External data
 *
 * Example:
 *
 * function isUser(value: unknown): value is User
 *
 * Means:
 * "If this function returns true, TypeScript knows
 *  that `value` is a User."
 */


/**
 * ============================================================
 * 1. TYPE ASSERTION - `as`
 * ============================================================
 *
 * Type assertion tells TypeScript:
 *
 * "Trust me, I know what this value is."
 *
 * IMPORTANT:
 * TypeScript does NOT check the actual value at runtime.
 */

const raw = '{"id": 1, "name": "A"}';

// JSON.parse() returns `any`.
// We are telling TypeScript that the result is a User-like object.
const riskyUser = JSON.parse(raw) as {
    id: number;
    name: string;
};

console.log(riskyUser.name);


/**
 * ⚠️ TYPE ASSERTION CAN BE DANGEROUS
 *
 * TypeScript trusts our assertion even if the actual
 * data does not match the expected structure.
 */

const badRaw = '{"id": "hello", "name": 123}';

const badUser = JSON.parse(badRaw) as {
    id: number;
    name: string;
};

// TypeScript trusts the assertion,
// but at runtime:
// id   -> "hello"  (string)
// name -> 123      (number)
//
// So remember:
//
// `as` = "Trust me"
// `as` DOES NOT validate the data.


/**
 * ============================================================
 * 2. `unknown`
 * ============================================================
 *
 * `unknown` means:
 *
 * "I don't know what type this value is yet."
 *
 * It is safer than `any` because TypeScript forces us
 * to check the value before using it.
 */

const maybe = JSON.parse(raw) as unknown;

// ❌ Not allowed because `maybe` is unknown:
// console.log(maybe.name);


/**
 * ============================================================
 * 3. USER TYPE
 * ============================================================
 */

type User22 = {
    id: number;
    name: string;
};


/**
 * ============================================================
 * 4. CUSTOM TYPE GUARD
 * ============================================================
 *
 * `v is User22` is the important part.
 *
 * It tells TypeScript:
 *
 * "If this function returns true,
 *  then `v` can be treated as User22."
 */

function isUser(v: unknown): v is User22 {

    return (
        // Check that v is an object
        typeof v === 'object' &&

        // `typeof null` is also "object",
        // so we need to make sure it isn't null
        v !== null &&

        // Check that the `id` property exists
        'id' in v &&

        // Check that id is actually a number
        typeof (v as any).id === 'number' &&

        // Check that the `name` property exists
        'name' in v &&

        // Check that name is actually a string
        typeof (v as any).name === 'string'
    );
}


/**
 * ============================================================
 * 5. USING THE TYPE GUARD
 * ============================================================
 *
 * First:
 *      maybe -> unknown
 *
 * Then:
 *      isUser(maybe)
 *
 * If true:
 *      maybe -> User22
 *
 * TypeScript can now safely access:
 *      maybe.id
 *      maybe.name
 */

if (isUser(maybe)) {

    // ✅ TypeScript knows `maybe` is User22 here
    console.log(maybe.name);
    console.log(maybe.id);

} else {

    // Data does not match User22
    console.log("Invalid user data");
}


/**
 * ============================================================
 * 6. BUILT-IN TYPE GUARDS
 * ============================================================
 *
 * TypeScript has several built-in ways to narrow types.
 */


/**
 * -------------------------
 * typeof
 * -------------------------
 */

function printValue(value: string | number) {

    if (typeof value === 'string') {

        // TypeScript knows value is string
        console.log(value.toUpperCase());

    } else {

        // TypeScript knows value is number
        console.log(value.toFixed(2));
    }
}


/**
 * -------------------------
 * instanceof
 * -------------------------
 *
 * Used to check whether an object belongs to a class.
 */

function checkDate(value: unknown) {

    if (value instanceof Date) {

        // TypeScript knows value is Date
        console.log(value.getFullYear());
    }
}


/**
 * -------------------------
 * in
 * -------------------------
 *
 * Checks whether a property exists in an object.
 */

function checkName(value: object) {

    if ('name' in value) {

        console.log("name property exists");
    }
}


/**
 * ============================================================
 * 7. `any` vs `unknown`
 * ============================================================
 *
 * any:
 *      "Do whatever you want."
 *
 * unknown:
 *      "Check me before using me."
 */


/*
let value1: any = "hello";

// TypeScript allows this.
// But it may crash at runtime.
value1.foo.bar();
*/


let value2: unknown = "hello";

// ❌ TypeScript does not allow this:
// value2.foo;


// We must check first
if (typeof value2 === 'string') {

    // ✅ Now TypeScript knows value2 is string
    console.log(value2.toUpperCase());
}


/**
 * ============================================================
 * 8. TYPE ASSERTION vs TYPE GUARD
 * ============================================================
 *
 * TYPE ASSERTION
 * ----------------
 *
 * const user = data as User;
 *
 * Meaning:
 * "Trust me, data is a User."
 *
 * Runtime validation:
 * ❌ No
 *
 *
 * TYPE GUARD
 * ----------------
 *
 * if (isUser(data)) {
 *     ...
 * }
 *
 * Meaning:
 * "I checked the data."
 *
 * Runtime validation:
 * ✅ Yes
 */


/**
 * ============================================================
 * 9. EASY MEMORY TRICK
 * ============================================================
 *
 * `as` -> ASSERT
 *        "Trust me."
 *
 * `is` -> VERIFY
 *        "I checked it."
 *
 *
 * `unknown` -> "I don't know yet."
 */


/**
 * ============================================================
 * 10. INTERVIEW ANSWER
 * ============================================================
 *
 * Q: What is the difference between type assertion
 *    and type guard?
 *
 * Answer:
 *
 * Type assertion uses the `as` keyword to tell TypeScript
 * that we know the type of a value. It does not perform
 * runtime validation.
 *
 * A type guard performs a runtime check and uses the `is`
 * keyword to tell TypeScript that a value can safely be
 * treated as a specific type.
 *
 * I prefer type guards when working with untrusted data
 * such as API responses, JSON, or user input.
 *
 *
 * Short version:
 *
 * `as` = Trust me
 * `is` = Check first
 */