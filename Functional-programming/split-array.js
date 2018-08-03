/* Functional Programming: Split a String into an Array Using the split Method */

function splitify(str) {
  // Add your code below this line
  let re = /[\s,-.]+/;
  return str.split(re);
  
  // Add your code above this line
}
splitify("Hello World,I-am code");