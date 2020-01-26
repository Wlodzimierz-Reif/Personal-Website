//PROGRESS BAR
const date1 = new Date();
const date2 = new Date('2020/04/17');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// console.log(diffDays);
let percent = 100 - diffDays;
// console.log(percent);

const progress = document.querySelector('#me > div > span');
progress.style.width = `${percent}%`;

const completed = document.querySelector('#completion');
completed.textContent = `${percent}% completed`;

const incompleted = document.querySelector('#incompletion');
incompleted.textContent = `${100 - percent}% still to go`;


