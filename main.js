let currSeconds = new Date().getSeconds();
const seconds = document.getElementById('seconds');
seconds.style.transform = `rotate(${currSeconds*6-90}deg)`;

let currMinutes = new Date().getMinutes();
const minutes = document.getElementById('minutes');
minutes.style.transform = `rotate(${currMinutes*6-90}deg)`;

let currHours = new Date().getHours();
const hours = document.getElementById('hours');
if (currHours > 12) currHours-=12;
hours.style.transform = `rotate(${currHours*30-90}deg)`;

const currDay = new Date().getDate();
let currWeekDay = new Date().getDay();

if (currWeekDay === 1) currWeekDay = "Mon";
if (currWeekDay === 2) currWeekDay = "Tue";
if (currWeekDay === 3) currWeekDay = "Wed";
if (currWeekDay === 4) currWeekDay = "Thu";
if (currWeekDay === 5) currWeekDay = "Fri";
if (currWeekDay === 6) currWeekDay = "Sat";
if (currWeekDay === 7) currWeekDay = "Sun";

document.getElementById("date").innerHTML = `${currDay} ${currWeekDay}`;

setInterval(() => {
	let currSeconds = new Date().getSeconds();
	seconds.style.transform = `rotate(${currSeconds*6-90}deg)`;

	let currMinutes = new Date().getMinutes();
	minutes.style.transform = `rotate(${currMinutes*6-90}deg)`;

	let currHours = new Date().getHours();
	if (currHours > 12) currHours-=12;
	hours.style.transform = `rotate(${currHours*30-90}deg)`;

}, 1000);