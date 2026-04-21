// app.js

function add(a, b) {
    return a + b;
}

// Example run (only when executed directly, not when imported)
if (require.main === module) {
    const result = add(2, 3);
    console.log("Example: 2 + 3 =", result);
}

module.exports = { add };