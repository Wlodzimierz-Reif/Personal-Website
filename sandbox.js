// var timeleft = 10;
// var downloadTimer = setInterval(function(){
//   document.getElementById("progressBar").value = 10 - timeleft;
//   timeleft -= 1;
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     showStuff();
//   }
// }, 1000);

function makeAlert(){ 
    alert("Popup window!");
};
// setTimeout(makeAlert, 5000);

let alert = setInterval(makeAlert, 2000);
clearInterval(alert);