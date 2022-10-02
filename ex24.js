// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


var str = "Hello World";
console.log("Is str == 'Hello World'? I predict True.");
console.log(str == "Hello World");
console.log("Is str == 'Hello World' || str == 'Hello World'? I predict True.");
console.log(str == "Hello World" || str == "Hello World");
console.log("Is str == 'Hello World' && str == 'Hello World'? I predict True.");
console.log(str == "Hello World" && str == "Hello World");

var num = 42;
console.log("Is num == 42? I predict True.");
console.log(num == 42);
console.log("Is num > 42  I predict False.");
console.log(num > 42);
console.log("Is num < 42  I predict False.");
console.log(num < 42);
console.log("Is num >= 42  I predict True.");
console.log(num >= 42);
console.log("Is num <= 42  I predict True.");
console.log(num <= 42);

var arr = ["Hello World", "This is a test", "This is another test"];
console.log("Is 'Hello World' in arr? I predict True.");
console.log("Hello World" in arr);
console.log("Is 'Hello World' not in arr? I predict False.");
console.log(!("Hello World" in arr));
console.log("Is 'Hello World' in arr || 'This is a test' in arr? I predict True.");
console.log("Hello World" in arr || "This is a test" in arr);
