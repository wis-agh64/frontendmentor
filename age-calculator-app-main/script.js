const dateDiff = (startDay, startMonth, startYear, endDay, endMonth, endYear) => {
    let yearDiff = endYear - startYear;
    let monthDiff = endMonth - startMonth;
    let dayDiff = endDay - startDay;
    
    if (monthDiff < 0) {
      yearDiff -= 1;
      monthDiff = 12 + monthDiff;
    }
    
    if (dayDiff < 0) {
      monthDiff -= 1;
      dayDiff = 30 + dayDiff;
    }
    
    return { "years": yearDiff , "months" : monthDiff, "days" : dayDiff }
}

let activeError = 0;
let daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const fieldRequiredError = "This field is required";
const invalidYearError = "Must be in the past";
const invalidMonthError = "Must be a valid month";
const invalidDayError = "Must be in a valid day"

const dayErrorDiv = document.getElementById("dayError");
const monthErrorDiv = document.getElementById("monthError");
const yearErrorDiv = document.getElementById("yearError");

const dayInput = document.getElementById("startDay");
const monthInput = document.getElementById("startMonth");
const yearInput = document.getElementById("startYear");

const dayLabel = document.getElementById("dayLabel");
const monthLabel = document.getElementById("monthLabel");
const yearLabel = document.getElementById("yearLabel");

const yearOutput = document.getElementById("yearOutput");
const monthOutput = document.getElementById("monthOutput");
const dayOutput = document.getElementById("dayOutput");

const resetErrorStyling = () => {
  dayErrorDiv.innerText = "Placeholder";
  monthErrorDiv.innerText = "Placeholder";
  yearErrorDiv.innerText = "Placeholder";

  dayErrorDiv.classList.add("invisible");
  monthErrorDiv.classList.add("invisible");
  yearErrorDiv.classList.add("invisible");

  dayLabel.classList.remove("text-custom-red");
  dayInput.classList.remove("border-custom-red");
  
  monthLabel.classList.remove("text-custom-red");
  monthInput.classList.remove("border-custom-red");
  
  yearLabel.classList.remove("text-custom-red");
  yearInput.classList.remove("border-custom-red");

  activeError = 0;
}

const setError = (error, label, input, message) => {
  error.textContent = message;
  error.classList.remove("invisible");
  label.classList.add("text-custom-red");
  input.classList.add("border-custom-red");
  activeError = 1;
}

const animateOutput = (outputElement) => {
  outputElement.classList.remove("apply-animation");
  void outputElement.offsetWidth; // force the browser to refresh the layout
  outputElement.classList.add("apply-animation");
}

document.getElementById("submitButton").onclick = () => {
  // reset error messages
  if (activeError == 1) {
    resetErrorStyling();
  }

  let startDay = dayInput.value;
  let startMonth = monthInput.value;
  let startYear = yearInput.value;

  // check inputs not empty
  if (startDay.length < 1) {
    setError(dayErrorDiv, dayLabel, dayInput, fieldRequiredError);
  }

  if (startMonth.length < 1) {
    setError(monthErrorDiv, monthLabel, monthInput, fieldRequiredError);
  }

  if (startYear.length < 1) {
    setError(yearErrorDiv, yearLabel, yearInput, fieldRequiredError);
  }

  // check inputs valid
  startDay = parseInt(startDay);
  startMonth = parseInt(startMonth);
  startYear = parseInt(startYear);

  if (startMonth < 1 || startMonth > 12) {
    setError(monthErrorDiv, monthLabel, monthInput, invalidMonthError);
  }

  if (startDay < 1 || startDay > 31 || startDay > daysInMonth[startMonth - 1]) {
    setError(dayErrorDiv, dayLabel, dayInput, invalidDayError);
  }

  const now = new Date();
  const endDay = now.getDate();
  const endMonth = now.getMonth() + 1;
  const endYear = now.getFullYear();

  if (startYear > endYear) {
    setError(yearErrorDiv, yearLabel, yearInput, invalidYearError);
  }

  if (activeError == 1) {
    return;
  };

  // compute results
  const result = dateDiff(startDay, startMonth, startYear, endDay, endMonth, endYear);

  yearOutput.innerText = result["years"];
  monthOutput.innerText = result["months"];
  dayOutput.innerText = result["days"];

  animateOutput(yearOutput);
  animateOutput(monthOutput);
  animateOutput(dayOutput);  
};