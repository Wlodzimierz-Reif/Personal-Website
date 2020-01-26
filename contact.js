//SUBMIT FORM
let user = {
    name: '',
    email: '',
    message: ''
}

//SUBMIT BUTTON
const submit = document.querySelector('input.submit');
const submitTitle = document.querySelector('#message');

submit.addEventListener('click', myFunction);
function myFunction() {
    submitTitle.textContent = "You've sent me a message! Thank you!";
    submit.style.backgroundColor = 'green';
    submit.style.borderColor = 'green';
    user.name = document.querySelector('#name').value;
    user.email = document.getElementById('email').value;
    user.message = document.getElementById('text').value;
    console.log(user);
};

// //PROGRESS BAR
// const date1 = new Date();
// const date2 = new Date('2020/04/17');
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
// // console.log(diffDays);
// let percent = 100 - diffDays;
// // console.log(percent);

// const progress = document.querySelector('#me > div > span');
// progress.style.width = percent;
// alert(percent);