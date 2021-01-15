let line = 0;
let cnt = 0;
let cnt1 = 0;
let line1 = 0;
window.onload=function() { 
        const canvas = document.getElementById("canvars");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let ctxW = canvas.width;
        let ctxY = canvas.height;
        let y1 = 500;
        let y2 = 400;
        let y3 = 300;
        let y4 = 200;
        let y5 = 100;
        let yy1 = 30;
        let yy2 = 30;
        let yy3 = 30;
        let yy4 = 30;
        let yy5 = 30;
        //quadraticCurveto
        let W1 =ctxW/1.25;
        let W2 =ctxW/1.538;
        let W3 =ctxW/2;
        let W4 =ctxW/2.857;
        let W5 =ctxW/5;
       
        function animation1(){
            ctx.clearRect(0,0,ctxW,ctxY);
            ctx.fillStyle = "black";
            ctx.strokeStyle="black"
            ctx.beginPath();
            ctx.moveTo(ctxW,ctxY/2);
            ctx.lineTo(W1,y1);
            ctx.lineTo(W2,y2);
            ctx.lineTo(W3,y3);
            ctx.lineTo(W4,y4);
            ctx.lineTo(W5,y5);
            ctx.lineTo(0,ctxY/2);
            ctx.stroke();
            ctx.fill();
            y1+=yy1;
            y2+=yy2;
            y3+=yy3;
            y4+=yy4;
            y5+=yy5;

            if(y1>ctxY-100){
                yy1*=-1;
            }
            if(y1<100){
                yy1*=-1;
            }
            if(y2>ctxY-100){
                yy2*=-1;
            }
            if(y2<100){
                yy2*=-1;
            }
            if(y3>ctxY-100){
                yy3*=-1;
            }
            if(y3<100){
                yy3*=-1;
            }
            if(y4>ctxY-100){
                yy4*=-1;
            }
            if(y4<100){
                yy4*=-1;
            }
            if(y5>ctxY-100){
                yy5*=-1;
            }
            if(y5<100){
                yy5*=-1;
            }
        }
        setInterval(animation1,25);
        
};