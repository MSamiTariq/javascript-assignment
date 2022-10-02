// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

var guest_list = ["Nelson Mandela", "Albert Einstein", "Martin Luther King Jr."];
var message = "I would like to invite you to dinner, ";
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
console.log("I can only invite two people to dinner.");
while (guest_list.length > 2) {
    console.log(guest_list.pop() + ", I'm sorry I can't invite you to dinner.");

}
console.log(message + guest_list[0] + ".");
console.log(message + guest_list[1] + ".");
while (guest_list.length > 0) {
    guest_list.pop();
}
console.log(guest_list);
