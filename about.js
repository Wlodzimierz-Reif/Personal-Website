function showStuff() {
    var history = setInterval(function(){ showHistory()}, 500);
    var history = setInterval(function(){ showPhotography()}, 1000);
    var history = setInterval(function(){ showParenting()}, 1500);
}

function showHistory() {
    document.querySelector('.history').style.display = 'block';
}
function showPhotography() {
    document.querySelector('.photography').style.display = 'block';
}
function showParenting() {
    document.querySelector('.parenting').style.display = 'block';
}
