
/**
 * UNION TYPES
 *
 * A union allows a value to be one of multiple types.
 * `|` means OR.
 *
 * Syntax:
 * type = A | B
 *
 * Example:
 * string | number
 * → value can be string OR number
 */


/**
 * 1. PRIMITIVE UNION
 */

function printId(id: string | number) {

    // Narrow the type using typeof
    if (typeof id === "string") {
        id.toLowerCase();  // string
    } else {
        id.toFixed(2);     // number
    }
}

printId("abc"); // ✅
printId(123);   // ✅
// printId(true); // ❌


/**
 * 2. OBJECT UNION
 *
 * An object can have one of multiple shapes.
 */

type Admin1 = {
    role: "Admin";
    permission: string[];
};

type Customer1 = {
    role: "Customer";
    loyaltyPoints: number;
};

function describeUser(user: Admin | Customer) {

    // `role` is the discriminant
    if (user.role === "Admin") {
        console.log(user.permission);
    } else {
        console.log(user.loyaltyPoints);
    }
}

describeUser({
    role: "Admin",
    permission: ["read", "write"]
});

describeUser({
    role: "Customer",
    loyaltyPoints: 100
});


/**
 * 3. `in` OPERATOR
 *
 * Used to check whether a property exists.
 */

function describeUser2(user: Admin | Customer) {

    if ("permission" in user) {
        // user → Admin
        console.log(user.permission);
    } else {
        // user → Customer
        console.log(user.loyaltyPoints);
    }
}


/**
 * 4. ARRAY OF UNION
 *
 * (string | number)[]
 *
 * Each element can be string OR number.
 */

const mixed: (string | number)[] = ["a", 1, "b", 2];

mixed.push("hello"); // ✅
mixed.push(10);      // ✅
// mixed.push(true); // ❌


/**
 * 5. UNION OF ARRAYS
 *
 * string[] | number[]
 *
 * The entire array is either:
 * string[] OR number[].
 */

const numbersOrStrings: string[] | number[] =
    Math.random() > 0.5
        ? ["a", "b"]
        : [1, 2];

// Cannot safely add a value because TypeScript
// doesn't know which array type it currently is.
// numbersOrStrings.push("z"); // ❌


/**
 * QUICK REVISION
 *
 * `A | B`
 * → A OR B
 *
 * typeof
 * → Narrow primitive union
 *
 * in
 * → Narrow object union
 *
 * role: "Admin" | "Customer"
 * → Discriminated union
 *
 * (string | number)[]
 * → Mixed array
 *
 * string[] | number[]
 * → Either string array OR number array
 */


/**
 * INTERVIEW ANSWER
 *
 * A union type allows a value to have one of multiple
 * possible types. TypeScript uses type narrowing such as
 * typeof, in, or discriminant properties to determine
 * the actual type before using it.
 */