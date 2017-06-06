// console.log(5+5); // logged as 10
// 12-13; // -1
// 14*2; // 28
// 2*2 === 2**2; // special case, should be true
// 5%2; // 1 or -1
// 14%10; // 4
// 12/0;
// 0/0;
// var favoriteNumber = (1+(5)**(1/2))/2;
// console.log(favoriteNumber);
// console.log(favoriteNumber / 2);
// var someonesFavoriteNumber = 13;
// someonesFavoriteNumber = 7;
// console.log(someonesFavoriteNumber - favoriteNumber);
// console.log(favoriteNumber * 26);
// var celsius = prompt("Type in a celsius temperature:");
// celsius = parseInt(celsius);
// while (isNaN(celsius))
//   {
//     alert("You have to type in a number for this to work!");
//     celsius = prompt("Type in a celsius temperature:");
//   }
//
// function convert ()
//   {
//     return (celsius*(9/5) + 32);
//   }
//
//   console.log(convert());
// function operation (num1, num2)
//   {
//     if(num2 != 0)
//     {
//       console.log(num1 - num2);
//       console.log(num1 * num2);
//       console.log(num1 / num2);
//     }
//   }
// operation(1,1);
// operation(1,0);
// var name = prompt("What\'s your name?");
// alert('Hello ' + name);

// var input = prompt("Type in a name!");
//  while (input === '')
//   {
//     alert("You didn't type anything! Try again please.");
//     input = prompt("Type in a name!");
//   }
//
//   for (var i=input.length; i >= 0; i--)
//     {
//       console.log(input[i]);
//     }

// var string = prompt ("Type in any string");
// function reverseCharAt ()
// {
//  while (string === '')
//   {
//     alert("You didn't type anything! Try again please.");
//     string = prompt("Type in a name!");
//   }
//     string[string.length-1] = string.charAt[0];
// }
// console.log(reverseCharAt ());

// Write a main method that
//
// First lets a user input both user ID and password,
// Then create methods corresponding to criteria above to evaluate the user ID and password
// Then output whether the combination the combination is acceptable or not.
// Run the program and test it for all criteria listed above by inputting different values.
// Hint: See how the javascript String class can help you.
// Stretch Goal
//
// Password has to contain at least one digit
// Super Stretch Goal
//
// Password has to contain a lower and an uppercase letter
// Hint: Cleverly use toUpperCase or toLowerCase
// Be sure to test with a password that have no letters


// var userId = "Thisuser1";
// var password = "12345";
//
// userId != password;
// userId.length >= 6 && user.password >= 6;
// !userId.includes("!") && !userId.includes("#") && !userId.includes("$");
// password.includes("!") && password.includes('#') && password.includes('$') && !password.includes("password");
//
// function checkId (id)
//   {
//     return id.length >= 6 && !id.includes("!") && !id.includes("#") && !id.includes("$");
//   }
//
// function checkPass (pw)
//   {
//     var reg = new RegExp('[0-9]');
//     return pw.length >= 6 && (pw.includes("!") || pw.includes('#') || pw.includes('$')) && !pw.includes("password") && (reg.test(pw));
//   }
//
// function credentials (user, pass)
//   {
//     user != pass
//     alert("You can't have the same user name and password!");
//     return checkId(user) && checkPass(pass);
//   }
//
// function validate ()
//   {
//     userId = prompt("Type in a username. Must be 6 or more characters and not include these: !#$");
//     password = prompt("Type in a password. It can't be the same as the user name, and it must be 6 or more characters and include one of these: !#$");
//     return checkId(userId) && checkPass(password);
//     alert("Your credentials passed!");
//   }
// validate();

// Drop the last digit from the number. The last digit is what we want to check against
// Reverse the numbers
// Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
// Add all the numbers together
// The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)

var cc = '1234567890123456';
var ogCC = cc;
cc = cc.slice(0, -1);
cc = cc.split('').reverse().join('');
for(i=0; i<cc.length; i+=2){
  cc[i] = cc[i] * 2;
  if(cc[i] > 9){
    cc[i]= cc[i] - 9;
  }
}
function addTotal(total, number){
  return total + number;
}
cc = cc.split('').reduce(addTotal);
cc= cc % 10;
console.log(cc);

// function redu(func) {
//   var total;
//   for (var i = 0; i < array.length; i++) {
//     total = func(total, array[i]);
//   }
//   return total;
// };

// var i = 0;
// do {
//   if (i % 2 === 1) {
//     console.log(i + 'is odd');
//   } else {
//     console.log(i + 'is even');
//   }
// } while (i <= 15);
