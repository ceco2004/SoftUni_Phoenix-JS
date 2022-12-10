function stopwatch() {
    let startBtn = document.getElementById("startBtn");
    startBtn.addEventListener("click", start);

    let stopBtn = document.getElementById("stopBtn");
    stopBtn.addEventListener("click", stop);

    let taimer;
    let seconds = 0;

    function start(){
        startBtn.setAttribute("disabled", "true");
        stopBtn.removeAttribute("disabled");
        taimer = setInterval(increseWithSecond, 1000);
    }

    function increseWithSecond(){
        seconds++;
        let time = convertToTime();
        timeToDOM(time);
    }

    function convertToTime(){
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60 ;

        if(min < 10){
            min = "0"+ min;
        }

        if(sec < 10){
            sec = "0" + sec;
        }

       return `${min}:${sec}`;
    }

    function timeToDOM(time){
        console.log(time)
        document.getElementById("time").textContent = time;

    }

    function stop(){
        clearInterval(taimer);
        seconds = 0;
        timeToDOM("00:00");
        stopBtn.setAttribute("disabled", "true");
        startBtn.removeAttribute("disabled");
    }
}