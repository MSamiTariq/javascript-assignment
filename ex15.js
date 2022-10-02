// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

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

