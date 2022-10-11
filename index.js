const ageInput = document.querySelector("#ageInput");
const ageBtnStart = document.querySelector("#ageBtnStart");

 ageBtnStart.addEventListener("click", function () {
  let yourDate = new Date().getFullYear();

  yourDate = 90 - Number(ageInput.value) + yourDate;
    console.log(yourDate);
     localStorage.setItem("age", yourDate);
     getAge(yourDate)

 });

function getAge(x) {
    
let age = localStorage.getItem("age")

getRemaindingTime(age)


}


function getRemaindingTime(yourDate) {

  let futureDate = new Date(yourDate, 10, 30, 23, 60, 60);

  const futureTime = futureDate.getTime();

  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneYear = 365 * 24 * 60 * 60 * 1000;
  const onemoth = 29 * 24 * 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
    const onesecs = 1000;
    
  let year = t / oneYear;
  year = Math.floor(year);

  let moths = t / onemoth;
  moths = Math.floor(moths);

  let days = t / oneDay;
  days = Math.floor(days);
  let hour = t / oneHour;
  hour = Math.floor(hour);
  let mins = t / oneMinute;
  mins = Math.floor(mins);
  let secs = t / onesecs;
    secs = Math.floor(secs);
    
  let month = Math.floor((t % oneYear) / onemoth);
  let dayss = Math.floor((t % onemoth) / oneDay);

  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);
  const yearText = document.querySelector(".year");
  const monthText = document.querySelector(".month");
  const daysText = document.querySelector(".days");
  const hourText = document.querySelector(".hour");
  const minsText = document.querySelector(".mins");
  const secText = document.querySelector(".sec");
  yearText.innerHTML = year;
  monthText.innerHTML = month;
  daysText.innerHTML = dayss;
  hourText.innerHTML = hours;
  minsText.innerHTML = minutes;
  secText.innerHTML = seconds;

  console.log(year);
  console.log(moths);
  console.log(dayss);
  console.log(hours);
  console.log(minutes);
    console.log(seconds);
}
setInterval(getAge,1000)
