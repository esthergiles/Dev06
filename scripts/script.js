/*
Name: Esther Brown
Dev 06 script.js
CIS 376
Spring 2020
*/

$(document).ready(function() {
  console.log("Waiting for input");

  var submitButton = document.getElementsByTagName("button");

  submitButton[0].onclick = function() { //handles submit button click event
    console.log("User clicked Submit");
    countChars(getInput());
  };
});



/**************Functions ******************/

/***************************************
Name: getInput
Purpose: Grabs input from the user
Input: NA
Output: Console logs progress
Return: dataIn.Value
****************************************/
function getInput() {
  console.log("Grabbing input from user");
  var dataIn = document.getElementById("dataIn");
  console.log("User input: " + dataIn);

  return dataIn.value;
}

/***************************************
Name: countChars
Purpose: Counts how many letters are in a  word
Input: dataIn passed as parameter
Output: div element 
Return: NaN
****************************************/
function countChars(dataIn) {
 // calculateUnicode(dataIn);
  console.log("Counting how many letters are in the word");
  
  console.log("Creating a output container");
  var outputContainer = document.createElement("div");
  outputContainer.innerHTML =
   '<div class="card col-md-4"><div class="card-body"><p class="card-text">' +
    dataIn +
    " has " + dataIn.length + " letters. </p></div></div>";
   console.log("Appending container to body");
  document.body.appendChild(outputContainer);
}