/**
 * ============================================================
 * UNION TYPES
 * ============================================================
 *
 * Union = "this OR that"
 *
 * `|` is used to define multiple allowed types.
 */


/**
 * 1. PRIMITIVE UNION
 */

function printId(id: string | number) {

    // Type narrowing using typeof
    if (typeof id === 'string') {
        id.toLocaleLowerCase();
    } else {
        id.toFixed(2);
    }
}


/**
 * 2. OBJECT UNION
 *
 * An object can be one of multiple types.
 */

type Admin = {
    role: 'Admin';
    permission: string[];
};

type Customer = {
    role: 'Customer';
    loyalityPoints: number;
};

function describeUse1r(u: Admin | Customer) {

    // `role` acts as a discriminator
    if (u.role === 'Admin') {
        console.log(u.permission);
    } else {
        console.log(u.loyalityPoints);
    }
}


/**
 * 3. `in` OPERATOR
 *
 * Checks whether a property exists in an object.
 */

function describeUserWithInOperator(u: Admin | Customer) {

    if ('permission' in u) {
        // u is Admin
        console.log(u.permission);
    } else {
        // u is Customer
        console.log(u.loyalityPoints);
    }
}


/**
 * 4. ARRAY OF UNION
 *
 * `(string | number)[]`
 *
 * Each element can be string OR number.
 */

const arrayOfUnion: (string | number)[] = [
    "a",
    1,
    "b",
    2
];

arrayOfUnion.push("z"); // ✅
arrayOfUnion.push(10);  // ✅


/**
 * 5. UNION OF ARRAYS
 *
 * `string[] | number[]`
 *
 * The entire array is either:
 * - string[]
 * OR
 * - number[]
 */

const unionOfArrays: string[] | number[] =
    Math.random() > 0.5
        ? ["x", "y"]
        : [1, 2];

// unionOfArrays.push("z");
// ❌ Not allowed safely because TypeScript
// doesn't know whether it is string[] or number[].


/**
 * ============================================================
 * QUICK REVISION
 * ============================================================
 *
 * `A | B`
 *     → A OR B
 *
 * `typeof`
 *     → Narrow primitive unions
 *
 * `in`
 *     → Narrow object unions
 *
 * `(string | number)[]`
 *     → Mixed array
 *
 * `string[] | number[]`
 *     → Either a string array OR number array
 *
 * Discriminated Union:
 *     role: 'Admin' | 'Customer'
 *     → Use the common property to narrow the object.
 */