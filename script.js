//get the hour ,min,sec

let hourEl = document.getElementById('hour');
let minuteEl = document.getElementById('minutes')
let secondEl = document.getElementById('seconds')

//formula for getting date

function updateTime() {
let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

//for change 1,2,3 etc.. to 01,02,03 etc..

h = (h<10)? '0'+h : h;
s = (s<10)? '0'+s : s;

hourEl.innerHTML = h;
minuteEl.innerHTML = m;
secondEl.innerHTML = s;

//update the time , 1000 - every one sec

setInterval(()=>{
  updateTime()
}, 1000)
}updateTime()
