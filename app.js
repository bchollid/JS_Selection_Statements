// Exercise 1
let favoriteNumber = 23;
let userNumber = prompt("Input a number");
if(userNumber < favoriteNumber){
  alert("Your number is too low.")
}
else if(userNumber > favoriteNumber){
  alert("Your number is too high.")
}
else{
  alert("Congratulations!!!")
}

//Exercise 2
let birthMonth = prompt("What is your birth month?").toLowerCase();
switch(birthMonth){
  case "1" :
  case "january" :
  case "2" :
  case "february" :
  case "12" :
  case "December" :
    alert("You were born in the Winter!")
    break;
  case "3" :
  case "march" :
  case "4" :
  case "april" :
  case "may" :
  case "5" :
    alert("You were born in the Spring!")
    break;
  case "6" :
  case "june" :
  case "7" :
  case "july" :
  case "8" :
  case "august" :
    alert("You were born in the Summer!")
    break;
  case "9" :
  case "september" :
  case "10" :
  case "october" :
  case "11" :
  case "november" :
    alert("You were born in the Fall!");
    break;
  default:
    alert("Trying entering the name of the month you were born. (I.E. September");
}

//Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId){
  case "01" :
    type = "Tank top";
    break;
  case "02" :
    type = "T-Shirt";
    break;
  case "03" :
    type = "Long Sleeve";
    break;
  case "04" :
    type = "Sweat Shirt";
    break;
  default:
    type = "Other"
}

switch(colorId){
  case "BK" :
    color = "Black"
    break;
  case "BL" :
    color = "Blue";
    break;
  case "RD" :
    color = "Red";
    break;
  case "PU" :
    color = "Purple";
    break;
  default:
    color = "White";
}

switch(sizeId){
  case "S" :
    size = "Small";
    break;
  case "M" :
    size = "Medium";
    break;
  case "L" :
    size = "Large";
    break;
  case "XL" :
    size = "Extra Large";
    break;
  default :
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);

// if (typeId == "01") {
  //   type = "Tank top";
  // } else if (typeId == "02") {
  //   type = "T-Shirt";
  // } else if (typeId == "03") {
  //   type = "Long Sleeve";
  // } else if (typeId == "04") {
  //   type == "Sweat Shirt";
  // } else {
  //   type = "Other";
  // }

  // if (colorId == "BK") {
//   color = "Black";
// } else if (colorId == "BL") {
//   color = "Blue";
// } else if (colorId == "RD") {
//   color = "Red";
// } else if (colorId == "PU") {
//   color = "Purple";
// } else {
//   color = "White";
// }

// if (sizeId == "S") {
  //   size = "Small";
  // } else if (sizeId == "M") {
  //   size = "Medium";
  // } else if (sizeId == "L") {
  //   size = "Large";
  // } else if (sizeId == "XL") {
  //   size = "Extra Large";
  // } else {
  //   size = "One Size Fits All";
  // }