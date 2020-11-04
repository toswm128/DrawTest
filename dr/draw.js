let line = 0;
let cnt = 0;
let cnt1 = 0;
let line1 = 0;
window.onload=function() { 
    var canvas = document.getElementById("canvas1"); 
    var context = canvas.getContext("2d"); 
    context.beginPath();
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
    
    context.fill();
    context.stroke();

    context.beginPath(); 
    context.moveTo(100,100); 
    context.arcTo(200,100,200,200,100); 
    context.lineTo(200,200); 
    context.lineTo(100,200); 
    context.quadraticCurveTo(50,200,50,150); 
    context.bezierCurveTo(50,100,75,75,50,50);

     var canvas = document.getElementById("canvas2"); 
    var context = canvas.getContext("2d"); 

    context.beginPath();
    context.fillstyle = "red";
    context.moveTo(100,100);
    context.lineTo(100,200);
    context.closePath();
    context.stroke();
    var canvas = document.getElementById("canvas2");
        var ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        var ctxW = canvas.width;
        var ctxY = canvas.height;
        var y = 0;
        var yy = 10;

       
        function animation1(){
            ctx.clearRect(0,0,ctxW,ctxY);
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(ctxW,ctxY/2);
            ctx.lineTo(ctxW/1.5,y);
            ctx.lineTo(ctxW/2,y);
            ctx.lineTo(ctxW/3,y);
            ctx.lineTo(ctxW/4,y);
            ctx.lineTo(0,ctxY/2);
            ctx.stroke();
            y+=yy;

            if(y>ctxY){
                yy*=-1;
            }
            if(y<0){
                yy*=-1;
            }
        }
        setInterval(animation1,25);
        
};
function draw(){
};
/*
function animation3(){
            setInterval(animation1, 25);
            setInterval(animation2, 30);
        }
        */