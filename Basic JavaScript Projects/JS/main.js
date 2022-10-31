window.alert("Hello, World!");

var x = "This is the beginning of the string \\backslash and \"qutation\" marks."; // Setting a string variable to the following text
var y = "and this is the end of the string "; // Setting a string variable to the following text
var sentence = "\n This string will be concatenated with x and y" // Setting a string variable to the following text
var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro"; // Setting a string variable to the following String array with key/values

document.write(x.concat(y)); // printing and concatenating x and y string variables to the document body
document.write(sentence.concat(x+y)); // printing and concatenating sentence, x and y string variables to the document body

document.write(Mom); // printing string value assigned to Mom to the document body

document.write(3+3); // printing integer values 3 + 3 to the document body which displays as 6