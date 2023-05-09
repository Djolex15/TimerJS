let daysInput = document.getElementById("days");
let hoursInput = document.getElementById("hours");
let minutesInput = document.getElementById("minutes");
let secondsInput = document.getElementById("seconds");
let timerDisplay = document.getElementById("timerDisplay");

let alarmSound = document.getElementById("alarmSound");

let totalSeconds = 0;
let intervalId;

function startTimer()
{
    totalSeconds = (parseInt(daysInput.value) * 86400) + (parseInt(hoursInput.value) * 3600) + (parseInt(minutesInput.value) * 60) + parseInt(secondsInput.value);
    timerDisplay.style.color = "#6d5672";
    timerDisplay.innerHTML = "00:00:00:00";
    intervalId = setInterval(updateTimer, 1000);
}

function updateTimer()
{
    
    let days = Math.floor((totalSeconds / 86400));
    let hours = Math.floor((totalSeconds - (days * 86400)) / 3600);
    let minutes = Math.floor(Math.round((totalSeconds - (days * 86400)) - (hours * 3600)) / 60);
    let seconds = totalSeconds % 60;
    timerDisplay.innerHTML = "";
    if(days >= 10){
        timerDisplay.innerHTML += days + ":";
    }
    else{
        timerDisplay.innerHTML += "0" + days + ":";
    }
    if(hours >= 10){
        timerDisplay.innerHTML += hours + ":";
    }
    else{
        timerDisplay.innerHTML += "0" + hours + ":";
    }
    if(minutes >= 10){
        timerDisplay.innerHTML += minutes + ":";
    }
    else{
        timerDisplay.innerHTML += "0" + minutes + ":";
    }
    if(seconds >= 10){
        timerDisplay.innerHTML += seconds;
    }
    else{
        timerDisplay.innerHTML += "0" + seconds;
    }
    totalSeconds--;

    if(totalSeconds < 0)
    {
        clearInterval(intervalId);
        timerDisplay.style.color = "red";
        timerDisplay.innerHTML = "Vreme je isteklo!"
        alarmSound.play();
    }
}

function resetTimer()
{
    clearInterval(intervalId);
    daysInput.value = 0;
    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
    timerDisplay.innerHTML = "00:00:00:00";
    timerDisplay.style.color = "#6d5672";
}