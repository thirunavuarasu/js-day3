function deepEqual(obj1, obj2) {
    const normalize = (obj) => {
        // Convert object to sorted array of key-value pairs
        return Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    };

    const normalizedObj1 = normalize(obj1);
    const normalizedObj2 = normalize(obj2);

    // Compare the normalized arrays
    return JSON.stringify(normalizedObj1) === JSON.stringify(normalizedObj2);
}

var obj1 = { name: "person1", age: 5 };
var obj2 = { age: 5, name: "person1" };

console.log(deepEqual(obj1, obj2)); // Output: true
