function gpa() {
  let num = Number(prompt("enter number of subjects:"));
  let total = 0;
  let credits = 0;
  for (let i = 1; i <= num; i++) {
      let grade = prompt(`enter the grade of subject${i}:`).toLowerCase();
      let c = Number(prompt(`enter the credits for subject${i}`));
      credits += c;
      total += marks(grade) * c;
  }
  console.log(`your gpa is ${((total) / (credits) / 10)}`);
}
function marks(g) {
  if (g == 'o') {
      return 100;
  }
  else if (g == 'a') {
      return 90;
  }
  else if (g == 'b') {
      return 80;
  }
  else if (g == 'c') {
      return 70;
  }
  else if (g == 'd') {
      return 60;
  }
  else if (g == 'f') {
      return 0;
  }
}





function foodCourtBill() {
  let total = Number(prompt("enter the total amount:"));
  console.log(`total-${total}`);
  console.log(`tax-${(18 / 100) * total}$`);
  console.log(`service charges-15$`);
  console.log(`your total bill amount is:${total + ((18 / 100) * total) + 15}$`);
}
function simpleInterest() {
  let principal = Number(prompt("enter the principal amount:"));
  let rate = Number(prompt("enter the rate of interest:"));
  let time = Number(prompt("enter the time:"));
  console.log(`the simple interest is ${(principal * rate * time) / 100} and the amount after adding the interest is ${((principal * rate * time) / 100) + principal}`);
}
function lateFees() {
  let lateDays = Number(prompt("enter number of late days:"));

  if (lateDays >= 1 && lateDays <= 5) {
      console.log(`the fine amount to pay is: ${lateDays * 2}`);
  }
  else if (lateDays >= 6 && lateDays <= 10) {
      console.log(`the fine amount to pay is: ${lateDays * 3}`);
  }
  else if (lateDays > 10) {
      console.log(`the fine amount to pay is: ${lateDays * 5}`);
  }

}

function hotelRoomRent() {
  let room = prompt("enter the type of rrom required(standard,delux,suite):").toLowerCase();
  let days = Number(prompt("enter number of days;"));
  switch (room) {
      case "standard":
          console.log(`the total amount is ${1000 * days}`);
          break;
      case "delux":
          console.log(`the total amount is ${2000 * days}`);
          break;
      case "delux":
          console.log(`the total amount is ${5000 * days}`);
          break;
      default:
          console.log(`invalid input`);
  }
}