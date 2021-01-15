let line = 0;
let cnt = 0;
let cnt1 = 0;
let line1 = 0;
window.onload=function() { 
    var canvas = document.getElementById("canvars")
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