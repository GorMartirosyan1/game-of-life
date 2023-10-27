Winter = document.getElementById("Winter")
Spring = document.getElementById("Spring")
Summer = document.getElementById("Summer")
Autumn = document.getElementById("Autumn")

var socket = io();


socket.on("esim", myDraw)

function handleInfo(esim){
    console.log(esim);

}

n = 20
m = 30
side = 20

let WinterState = false

function setup() {
    createCanvas(400,400);
    background('#acacac');
}

function myDraw(matrix) {
    console.log(matrix)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && WinterState == false) {
                fill("green");
            }
            else if (matrix[y][x] == 1 && WinterState == true) {
                fill("#F0FFFF");
            }
            else if (matrix[y][x] == 2 && WinterState == false) {
                fill("yellow")
            }
            else if (matrix[y][x] == 2 && WinterState == true) {
                fill("#FFFACD")
            }
            else if (matrix[y][x] == 3 && WinterState == false) {
                fill("red")
            }
            else if (matrix[y][x] == 3 && WinterState == true) {
                fill("#800080")
            }
            else if (matrix[y][x] == 4 && WinterState == false) {
                fill("black")
            }
            else if (matrix[y][x] == 4 && WinterState == true) {
                fill("#708090")
            }
            else if (matrix[y][x] == 5 && WinterState == false) {
                fill("blue")
            }
            else if (matrix[y][x] == 5 && WinterState == true) {
                fill("blue")
            }
            else if (matrix[y][x] == 0){
                fill("#acacac")
            } 
            rect(x * side, y * side, side, side);
        }
    }
}

        var winterbtn = document.getElementById("Winter");

        winterbtn.addEventListener("click", clickHandler);
