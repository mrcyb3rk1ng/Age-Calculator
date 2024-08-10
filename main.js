const calculateBtn = document.getElementById("calculateBtn");
const inputDate = document.getElementById("getInputDate");

const showYears = document.getElementById("showYears");
const showMonths = document.getElementById("showMonths");
const showDays = document.getElementById("showDays");

const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

let year = 0;
let month = 0;
let date = 0;

calculateBtn.addEventListener('click', () => {
   
   const getCurrentDate = new Date();
   const currentYear = getCurrentDate.getFullYear();
   const currentMonth = getCurrentDate.getMonth();
   const currentDate = getCurrentDate.getDate();
   
   const getInputDate = new Date(inputDate.value);
   const getYear = getInputDate.getFullYear();
   const getMonth = getInputDate.getMonth() + 1;
   const getDate = getInputDate.getDate();
   
   if (
      getYear > currentYear || 
      (getYear == currentYear && getMonth > currentMonth) ||
      (getYear == currentYear && getMonth > currentMonth && getDate > currentDate)
      ) {
         
      alert("Please Enter a valid Date!");
      
   } else if (inputDate.value == "") {
      
      alert("Please Enter a Date!");
      
   } else {
      year = currentYear - getYear;
      
      if (getMonth > currentMonth) {
         year--;
         month = (12 - getMonth) + currentMonth;
      
         if (month > 12) {
            year++;
            month = month - 12;
         }
      
      } else {
         month = currentMonth - getMonth;
      }
      
      if (getDate > currentDate) {
        
         date = (daysOfMonths[getMonth - 1] - getDate) + currentDate;
      
         if (date > 30) {
            month++;
            date = date - 30;
            showDMY();
         }
      
         showDMY();
      
      } else {
         date = currentDate - getDate;
         showDMY();
      }
      
   }
   
});

const showDMY = () => {
   
   year = year < 10 ? "0" + year : year ;
   month = month < 10 ? "0" + month : month ;
   date = date < 10 ? "0" + date : date ;
   
   showYears.textContent = year;
   showMonths.textContent = month;
   showDays.textContent = date;
   
};