// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Program to store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person_name = "Eric";
console.log("Hello " + person_name + ", would you like to learn some Python today?");

// Program to store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var person_name = "Eric";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.charAt(0).toUpperCase() + person_name.slice(1).toLowerCase());
