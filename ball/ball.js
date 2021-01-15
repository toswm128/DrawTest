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
        let yy1 = 1;
        let x1 = 0;
        let xx1 = 1;
       
        function animation1(){
            ctx.clearRect(0,0,ctxW,ctxY);
            ctx.fillStyle = "black";
            ctx.beginPath();
            ctx.moveTo(ctxW,ctxY/2);
            ctx.lineTo(x1,y1);
            ctx.stroke();
            y1+=yy1;
            x1+=xx1;

            if(y1>ctxY){
                yy1*=-1;
            }
            if(y1<0){
                yy1*=-1;
            }
            if(x1>ctxW){
                xx1*=-1;
            }
            if(x1<0){
                xx1*=-1;
            }
        }
        setInterval(animation1,1);
        
};