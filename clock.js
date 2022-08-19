function Time(){
    var d = new Date();
    var t = d.toLocaleTimeString();
    
    document.getElementById('time').innerHTML=t;
}

setInterval(Time, 1000);
