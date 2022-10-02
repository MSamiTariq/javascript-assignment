// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

var guest_list = ["Nelson Mandela", "Albert Einstein", "Martin Luther King Jr."];
var message = "I would like to invite you to dinner, ";
console.log(message + guest_list[0] + ".");
console.log(message + guest_list[1] + ".");
console.log(message + guest_list[2] + ".");

console.log(guest_list[2] + " can't make it to dinner.");
guest_list[2] = "Malala Yousafzai";
console.log(message + guest_list[0] + ".");
console.log(message + guest_list[1] + ".");
console.log(message + guest_list[2] + ".");

console.log("I found a bigger dinner table!");
guest_list.unshift("Barack Obama");
guest_list.splice(2, 0, "Bill Gates");
guest_list.push("Elon Musk");
console.log(message + guest_list[0] + ".");
console.log(message + guest_list[1] + ".");
console.log(message + guest_list[2] + ".");
console.log(message + guest_list[3] + ".");
console.log(message + guest_list[4] + ".");
console.log(message + guest_list[5] + ".");

