let canvas, ctx;
let pens = document.querySelector("#pens");
let pen = document.querySelector("#pen");
let box = document.querySelector("#box");
function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
 
    ctx.lineWidth = 10; // 선 굵기를 2로 설정
    ctx.strokeStyle = "black";
    ctx.lineCap = "round"
 
    // 마우스 리스너 등록. e는 MouseEvent 객체
    canvas.addEventListener("mousemove", function (e) { move(e) }, false);
    canvas.addEventListener("mousedown", function (e) { down(e) }, false);
    canvas.addEventListener("mouseup", function (e) { up(e) }, false);
    canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}
 
let startX=0, startY=0; // 드래깅동안, 처음 마우스가 눌러진 좌표
let drawing=false;
let penMode = 1;
let curX = 0;
let curY = 0;

function Pens(){
    penMode = 1;
    console.log('펜');
}
function Pen(){
    penMode = 2;
}
function Box(){
    penMode = 3;
}
function Psdraw(curX, curY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(curX, curY);
    ctx.stroke();
}
function Pdraw(curX, curY) {
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(curX, curY);
    ctx.stroke();
}
function Bdraw(curX, curY) {
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, curY);
    ctx.lineTo(curX, curY);
    ctx.lineTo(curX, startY);
    ctx.lineTo(startX, startY);
    ctx.stroke();
}

function Todraw(curX,curY){
    ctx.arc((curX+startX)/2,(curY+startY)/2,curX+curY-startX-startY,0,Math.PI * 2);
    ctx.stroke();
}

function down(e) {
    startX = e.offsetX; startY = e.offsetY;
    drawing = true;
}
function up(e) {
     drawing = false; 
     if(penMode===3){
        Bdraw(curX,curY);
     }
    if(penMode===2){
            Pdraw(curX,curY);
    }
    }
function move(e) {
    if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
    curX = e.offsetX; 
    curY = e.offsetY;
    if(penMode===1){
        Psdraw(curX,curY);
        startX = curX; startY = curY;
    }
    
}
function out(e) { drawing = false; }

/*
ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX, curY);
    ctx.lineTo(curX, curY);
    ctx.lineTo(curX, startY);
    ctx.lineTo(startX, startY);
    ctx.stroke(); 
    */