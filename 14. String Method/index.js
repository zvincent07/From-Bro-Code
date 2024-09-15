// string methods = allow you to manipulate and work with text (strings)

let userName = " Bro Code ";

console.log(userName.charAt(0));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("o"));
console.log(userName.length);
console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));

console.log(userName.startsWith(" "));
if(userName.startsWith(" "))
{
    console.log("Your username can't begin with ' '");
}
else
{
    console.log(userName);
}

console.log(userName.endsWith(" "));
if(userName.startsWith(" "))
{
    console.log("Your username can't end with ' '");
}
else
{
    console.log(userName);
}

console.log(userName.includes(" "));
if(userName.startsWith(" "))
{
    console.log("Your username can't include ' '");
}
else
{
    console.log(userName);
}

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);


phoneNumber = phoneNumber.padStart(15, "0");

console.log(phoneNumber);


phoneNumber = phoneNumber.padEnd(15, "0"); // remove the padStart at line 51 this will work

console.log(phoneNumber);