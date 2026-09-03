/**
 * TYPESCRIPT OBJECT TYPES
 * 
 * Objects are complex types that group related data and behaviors.
 * Use 'type' to define object structures with specific properties.
 * 
 * Key Concepts:
 * - Required vs Optional properties
 * - readonly properties (immutable)
 * - Difference between optional (?) and union with undefined
 * - Index signatures for dynamic keys
 * - Record utility type for typed key-value pairs
 */

// CONCEPT 1: Object Type Definition with 'type'
// Define the shape of an object with required and optional properties
type User = {
    id: string;           // required property - must always be present
    name: string;         // required property
    email?: string;       // optional property (?) - may be absent
    readonly createdAt: Date  // readonly - cannot be reassigned after creation
}

// Creating objects that conform to User type
const user1: User = {
    id: "u1",
    name: "Alok",
    createdAt: new Date()
    // email is omitted - that's OK because it's optional
}

const user2: User = {
    id: "u2",
    name: "john",
    createdAt: new Date(),
    email: 'email'  // email is provided
}

// CONCEPT 2: Optional (?) vs Union with undefined
// These look similar but have different implications:

// Optional property: can be absent from object
type User2 = { email?: string };
// Equivalent to: { email: string | undefined }
// You don't have to include the property at all

// Union with undefined: property must be present but can be undefined
type User3 = { email: string | undefined };
// The property MUST exist, but its value can be undefined


// CONCEPT 3: Index Signatures
// Allow objects to have dynamic/unknown property names
// [k : string] means "any string key"
type Count = { [k: string]: number }
// This allows any string key with number values
const C1: Count = { whatever: 1, anything: 2, foo: 3 }

// CONCEPT 4: Record Utility Type
// Alternative to index signatures - more explicit about allowed keys
// Record<Keys, ValueType> - strictly define which keys are allowed
type Count1 = Record<"likes" | "views" | "shares", number>
// Only these exact keys are allowed: "likes", "views", "shares"
const C2: Count1 = { likes: 1, views: 2, shares: 0 }
// const C3: Count1 = { whatever: 1 } // ❌ Error: unknown key