// let timeLeft = 60;
//     let timerId;

//     const timer = document.getElementById("timer");
//     const otpInput = document.getElementById("otpInput");
//     const resendBtn = document.getElementById("resendBtn");

//     function startOtpTimer() {
//         timeLeft = 60;
//         timer.innerText = "01:00";
//         otpInput.disabled = false;
//         resendBtn.disabled = true;

//         timerId = setInterval(function () {
//             let minutes = Math.floor(timeLeft / 60);
//             let seconds = timeLeft % 60;

//             seconds = seconds < 10 ? "0" + seconds : seconds;

//             timer.innerText = `0${minutes}:${seconds}`;

//             if (timeLeft === 0) {
//                 clearInterval(timerId);
//                 timer.textContent = "OTP Expired";
//                 timer.classList.add("expired");
//                 otpInput.disabled = true;
//                 resendBtn.disabled = false;
//             }

//             timeLeft--;
//         }, 1000);
//     }

//     resendBtn.addEventListener("click", function () {
//         startOtpTimer();
//     });

//     // Start timer on page load
//     startOtpTimer();



let timeLeft = 60;
let timerId;

let timer = document.querySelector('#timer');
let otpInput = document.querySelector('#otpInput');
let resendBtn = document.querySelector('#resendBtn');

function startOtpTimer(){
    timeLeft = 60;
    timer.textContent = '01:00';
    timer.classList.remove('expired');
    otpInput.disabled = false;
    resendBtn.disabled = true;

    timerId = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer.textContent = `0${minutes}:${seconds}`;

        if(timeLeft === 0){
            clearInterval(timerId);
            timer.textContent = 'OTP Expired';
            timer.classList.add('expired');
            otpInput.disabled = true;
            resendBtn.disabled = false;
        }

        timeLeft--;
    }, 1000)
}

resendBtn.addEventListener('click', () => {
    startOtpTimer();
})

startOtpTimer()