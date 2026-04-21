// app.js

function add(a, b) {
    return a + b;
}

if (require.main === module) {
    const result = add(2, 3);
    console.log("Example: 2 + 3 =", result);
}

module.exports = { add };