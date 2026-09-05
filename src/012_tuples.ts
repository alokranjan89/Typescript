// Tuple = array with fixed length and fixed types in each position.
// Order matters: [string, number] is different from [number, string].
// A normal array like (string | number)[] can have any length and mixed values.
// Tuple is useful when the structure is always the same.
// Optional tuple elements are allowed only at the end.
// readonly tuple prevents changing the values after creation.

const UserEntry: [string, number] = ['Sangam', 22]

type ResponseRow = [status: number, message?: string]

const r11: ResponseRow = [200, 'OK']

// readonly tuple

const corners: readonly [number, number] = [0, 0]