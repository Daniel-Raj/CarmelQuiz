var sec = 19;
    
setInterval(() => {
    
    if(sec === 0) 
        document.getElementById("send").click();    
    else {
        document.querySelector(".timer").innerHTML = sec;
        sec--;
    }

}, 1000);