/**
 * ============================================================
 * TYPESCRIPT: `as const` + DERIVING UNION TYPES FROM ARRAYS
 * ============================================================
 *
 * Main idea:
 *
 * `as const`
 *     ↓
 * Makes values readonly and preserves their exact literal types.
 *
 * Example:
 *
 * const ROLES = ["admin", "user", "operator"] as const;
 *
 * Type of ROLES becomes:
 *
 * readonly ["admin", "user", "operator"]
 *
 * Then we can derive a union type:
 *
 * type Role = (typeof ROLES)[number];
 *
 * Role becomes:
 *
 * "admin" | "user" | "operator"
 */


/**
 * ============================================================
 * 1. `as const` - READONLY / LITERAL TYPES
 * ============================================================
 *
 * Without `as const`:
 */

const roles1 = ["admin", "user", "operator"];

// TypeScript generally treats this as:
// string[]
//
// That means the values are just strings.


/**
 * With `as const`:
 */

const ROLES = ["admin", "user", "operator"] as const;

// Type becomes:
//
// readonly ["admin", "user", "operator"]
//
// Notice:
// 1. readonly -> cannot modify the array
// 2. "admin", "user", "operator" -> exact literal types


/**
 * ============================================================
 * 2. WHY `as const`?
 * ============================================================
 *
 * It prevents modification.
 */

ROLES;

// ❌ Error:
// ROLES.push("guest");

// ❌ Error:
// ROLES[0] = "guest";


/**
 * `as const` also preserves the exact values.
 *
 * Without `as const`:
 *
 * string[]
 *
 * With `as const`:
 *
 * readonly ["admin", "user", "operator"]
 */


/**
 * ============================================================
 * 3. DERIVING A UNION TYPE FROM THE ARRAY
 * ============================================================
 *
 * We don't want to manually write:
 *
 * type Role = "admin" | "user" | "operator";
 *
 * Instead, we can derive it directly from the array.
 */

type Role = (typeof ROLES)[number];


/**
 * What happens here?
 *
 * Step 1:
 *
 * typeof ROLES
 *
 * gives:
 *
 * readonly ["admin", "user", "operator"]
 *
 *
 * Step 2:
 *
 * [number]
 *
 * means:
 *
 * "Give me the type of any element in this array."
 *
 *
 * Therefore:
 *
 * type Role =
 *     "admin"
 *   | "user"
 *   | "operator"
 */


/**
 * ============================================================
 * 4. USING THE UNION TYPE
 * ============================================================
 */

function setRole(r: Role) {
    console.log(r);
}

setRole("admin");     // ✅
setRole("user");      // ✅
setRole("operator");  // ✅

// ❌ Error
// setRole("guest");


/**
 * ============================================================
 * 5. WHY THIS PATTERN IS USEFUL
 * ============================================================
 *
 * The array and type automatically stay synchronized.
 *
 * Instead of doing this:
 *
 * const ROLES = ["admin", "user", "operator"];
 *
 * type Role =
 *     "admin" |
 *     "user" |
 *     "operator";
 *
 * We can do:
 *
 * const ROLES = ["admin", "user", "operator"] as const;
 *
 * type Role = (typeof ROLES)[number];
 *
 *
 * Now if we add another role:
 */

const ROLES2 = [
    "admin",
    "user",
    "operator",
    "manager"
] as const;

type Role2 = (typeof ROLES2)[number];

// Role2 automatically becomes:
//
// "admin" | "user" | "operator" | "manager"


/**
 * ============================================================
 * 6. REAL-WORLD EXAMPLE
 * ============================================================
 *
 * Useful for:
 *
 * - User roles
 * - Status values
 * - Permissions
 * - Routes
 * - Categories
 * - Configuration options
 */

const STATUS = [
    "pending",
    "approved",
    "rejected"
] as const;

type Status = (typeof STATUS)[number];


function updateStatus(status: Status) {

    console.log(status);
}

updateStatus("pending");   // ✅
updateStatus("approved");  // ✅
updateStatus("rejected");  // ✅

// ❌ Error
// updateStatus("completed");


/**
 * ============================================================
 * 7. EASY WAY TO REMEMBER
 * ============================================================
 *
 * `as const`
 *     ↓
 * Preserve exact values + make readonly
 *
 * `typeof ROLES`
 *     ↓
 * Get the type of the array
 *
 * `[number]`
 *     ↓
 * Get the type of an element
 *
 * Therefore:
 *
 * (typeof ROLES)[number]
 *     ↓
 * "admin" | "user" | "operator"
 */


/**
 * ============================================================
 * 8. INTERVIEW ANSWER
 * ============================================================
 *
 * Q: What does `as const` do?
 *
 * Answer:
 *
 * `as const` tells TypeScript to infer the most specific
 * literal types and make the resulting value readonly.
 *
 * For example:
 *
 * const ROLES = ["admin", "user", "operator"] as const;
 *
 * The type becomes:
 *
 * readonly ["admin", "user", "operator"]
 *
 *
 * Q: What does `(typeof ROLES)[number]` mean?
 *
 * Answer:
 *
 * `typeof ROLES` gets the type of the array, and `[number]`
 * accesses the type of its elements. Therefore it produces
 * the union:
 *
 * "admin" | "user" | "operator"
 */


/**
 * ============================================================
 * QUICK REVISION
 * ============================================================
 *
 * const ROLES = ["admin", "user", "operator"] as const;
 *
 *             ↓
 *
 * readonly ["admin", "user", "operator"]
 *
 *             ↓
 *
 * type Role = (typeof ROLES)[number];
 *
 *             ↓
 *
 * "admin" | "user" | "operator"
 *
 *
 * MEMORY TRICK:
 *
 * `as const`
 *     = Exact + Readonly
 *
 * `[number]`
 *     = Element type
 */