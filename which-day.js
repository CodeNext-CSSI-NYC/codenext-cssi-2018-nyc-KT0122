// Declare a function whichDay that takes two parameters:
// A day of the week, and a number of days from now.
// It should return the day of the week it will be that many days from now.

function whichDay(DotW, dayCount) {
    var currentDayValue;

    if (dayCount > 7) {
      dayCount %= 7;
    }

    if (dayCount == 0) {
      return DotW;
    } else {
      switch (DotW) {
        case "Monday":
            currentDayValue = 1;
            break;
        case "Tuesday":
            currentDayValue = 2;
            break;
        case "Wednesday":
            currentDayValue = 3;
            break;
        case "Thursday":
            currentDayValue = 4;
            break;
        case "Friday":
            currentDayValue = 5;
            break;
        case "Saturday":
            currentDayValue = 6;
            break;
        case "Sunday":
            currentDayValue = 7;
            break;
      }

      dayCount += currentDayValue;
      dayCount %= 7;

      switch (dayCount) {
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        case 0:
            return "Sunday";
            break;
      }
  }
}

// Tests
console.log(whichDay("Thursday", 4) == "Monday");
console.log(whichDay("Tuesday", 100) == "Thursday");
