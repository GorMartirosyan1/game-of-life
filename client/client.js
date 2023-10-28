let Winter = document.getElementById("Winter")
let Spring = document.getElementById("Spring")
let Summer = document.getElementById("Summer")
let Autumn = document.getElementById("Autumn")
let Boom = document.getElementById("BOOM")


Winter.style.backgroundColor = "#ABD1DD"
Winter.style.color = "blue"
Spring.style.backgroundColor = "red"
Summer.style.backgroundColor = "yellow"
Autumn.style.backgroundColor = "purple"

let colorObj = {
    green: "green",
    yellow: "yellow",
    red: "red",
    blue: "blue",
    black: "black"
}




var socket = io();


socket.on("esim", myDraw)

function handleInfo(esim) {
    console.log(esim);

}

n = 50
m = 50
side = 20

let WinterState = false

function setup() {
    createCanvas(600, 400);
    background('#acacac');
}

function myDraw(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(colorObj.green);
            }
            else if (matrix[y][x] == 2) {
                fill(colorObj.yellow)
            }
            else if (matrix[y][x] == 3) {
                fill(colorObj.red)
            }
            else if (matrix[y][x] == 4) {
                fill(colorObj.black)
            }

            else if (matrix[y][x] == 5) {
                fill(colorObj.blue)
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
            }
            rect(x * side, y * side, side, side);
        }
    }
}




Winter.addEventListener("click", clickHandler);
Spring.addEventListener("click", clickHandler);
Summer.addEventListener("click", clickHandler);
Autumn.addEventListener("click", clickHandler);


function clickHandler(evt) {
    console.log(evt.srcElement)
    if (evt.srcElement.innerText == "Winter") {
        colorObj = {
            green: "white",
            yellow: "blue",
            red: "purple",
            blue: "cyan",
            black: "brown"
        }
    } else if (evt.srcElement.innerText == "Spring") {
        colorObj = {
            green: "#7FFF00",
            yellow: "yellow",
            red: "purple",
            blue: "blue",
            black: "#778899"
        }
    }
    else if (evt.srcElement.innerText == "Summer") {
        colorObj = {
            green: "#86DC3D",
            yellow: "#FFA500",
            red: "red",
            blue: "blue",
            black: "black"
        }
    }
    else if (evt.srcElement.innerText == "Autumn") {
        colorObj = {
            green: "#F0E68C",
            yellow: "orange",
            red: "#8B4513",
            blue: "#3F0003",
            black: "black"
        }
    }
}


const pause = document.getElementById('Pause')
const Start = document.getElementById('Start')

pause.addEventListener('click', handlePauseGame)
Start.addEventListener('click', handleStartGame)

let ifPaused = false

function handlePauseGame(){
    ifPaused = true
    socket.emit('pause game', ifPaused)
}

function handleStartGame(){
    ifPaused = false
    socket.emit('pause game', ifPaused)
}



