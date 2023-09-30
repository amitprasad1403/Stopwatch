let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let displayTimer = document.getElementById('displayTime');
let interval = null;
 

document.getElementById('startBtn').addEventListener('click',()=>{
    if(interval != null){
        clearInterval(interval);
    }
    interval = setInterval(showTime,10);
});
 

document.getElementById('stopBtn').addEventListener('click',()=>{  
    startBtn.innerHTML='RESUME';
    clearInterval(interval);   
}); 

document.getElementById('resetBtn').addEventListener('click',()=>{
    startBtn.innerHTML='START';
    clearInterval(interval);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    
    displayTimer.innerHTML='00 : 00 : 00 : 000';
   
}); 

function showTime(){ 

    milliseconds+=10; 

    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

    
 let h = hours < 10 ? "0" + hours : hours;
 let m = minutes < 10 ? "0" + minutes : minutes;
 let s = seconds < 10 ? "0" + seconds : seconds;
 let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

 displayTimer.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;}