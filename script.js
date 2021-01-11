
setInterval(clock, 1000);

function clock()
{
    var now =new Date();

    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();
    
    if(second<10)
    {
        second="0"+second;
    }
    if(minute<10)
    {
        minute="0"+minute;
    }
    if(hour<10)
    {
        hour="0"+hour;
    }

    document.getElementById("hour").innerHTML=""+hour;
    document.getElementById("minute").innerHTML=""+minute;
    document.getElementById("second").innerHTML=""+second;
    

}



