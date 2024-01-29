function setReminder() {
  var inputTime = new Date(
    document.getElementById("reminderTime").value
  ).getTime();

  if (isNaN(inputTime)) {
    alert("Please enter a valid date and time.");
    return;
  }

  var countdownInterval = setInterval(function () {
    var now = new Date().getTime();
    var distance = inputTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").value = days;
    document.getElementById("hours").value = hours;
    document.getElementById("minutes").value = minutes;
    document.getElementById("seconds").value = seconds;

    if (distance < 0) {
      clearInterval(countdownInterval);
      alert("Time's up! Don't forget your task.");
    }
  }, 1000);
}

// const endDate = "22 Jan 2024 11:38 PM";

// document.getElementById("end-date").innerText = endDate;
// const inputs = document.querySelectorAll("input");

// function clock() {
//   const end = new Date(endDate);
//   const now = new Date();
//   const diff = (end - now) / 1000;

//   if (diff < 0) return;
//   //   console.log(diff);
//   inputs[0].value = Math.floor(diff / 3600 / 24);
//   inputs[1].value = Math.floor(diff / 3600) % 24;
//   inputs[2].value = Math.floor(diff / 60) % 60;
//   inputs[3].value = Math.floor(diff) % 60;
// }

// clock();

// setInterval(() => {
//   clock();
// }, 1000);
