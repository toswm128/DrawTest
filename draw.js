let line = 0;
let cnt = 0;
let cnt1 = 0;
let line1 = 0;
window.onload=function() { 
    var canvas = document.getElementById("canvas1"); 
    var context = canvas.getContext("2d"); 
    for(cnt=0;cnt<=100;cnt++){
        context.moveTo(0,line);
        context.lineTo(line,1000);
        context.moveTo(1000,line);
        context.lineTo(line,0);
        context.moveTo(1000,1000-line);
        context.lineTo(line,1000);
        context.moveTo(0,1000-line);
        context.lineTo(line,0);
        line = line+20;
        cnt++;
    }
    context.stroke(); 
    context.closePath(); 
};