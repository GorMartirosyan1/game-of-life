var express = require("express");
var app = express();
random = require("./random");



var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static("../client"));

app.get("/", function(req, res){

res.redirect("index.html");

    });

server.listen(3000, function(){

    console.log("Example is running on port 3000");

    });

io.on('connection', function (socket) {

    socket.emit("name", "Gor");
    socket.on("pause game", handlePauseOrStartGame)
});

Grass = require('./class')
GrassEater = require('./GrassEater.js')
Predator = require('./Predator.js')
Takard = require('./takard.js')
Kaycak = require('./kaycak.js')
matrix = [];
n = 20
m = 30
STopGame = false;

function matrixEditor() {

    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
        }
    }
        character(1,1000)
        character(2,20)
        character(3,5)
        character(4,3)
        character(5,5)
        return matrix
    }
    

function character(index,count) {
    for (let i = 0; i < count; i++) {
        var w = Math.floor(random(n));
        var v = Math.floor(random(m));
        matrix[w][v] = index;
    }
}
  grassArr = [];
  grassEaterArr = [];
  predatorArr = [];
  takardArr = [];
  kaycakArr = [];

matrix = matrixEditor()

function createObj() {
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var gre = new GrassEater(x, y, 2)
                grassEaterArr.push(gre)
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3)
                predatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                var tak = new Takard(x, y, 4)
                takardArr.push(tak)
            }
            else if (matrix[y][x] == 5) {
                var kayc = new Kaycak(x, y, 5)
                kaycakArr.push(kayc)
            }
        } 
    }
}

createObj()


function start() {

    if(!STopGame){
        for (var i in grassArr) {
            grassArr[i].mul();
        }
    
        for (var i in grassEaterArr) {
            grassEaterArr[i].eat();
        }
    
        for (var i in predatorArr) {
            predatorArr[i].eat();
        }
        for (var i in takardArr) {
            takardArr[i].eat();
        }
        for (var i in kaycakArr) {
            // kaycakArr[i].eat();
            kaycakArr[i].move();
        }
        // console.log(matrix)
        io.sockets.emit("esim", matrix);
    }
    statics = {
        "Grass": grassArr.length,
        "GrassEater": grassEaterArr.length,
        "Predator": predatorArr.length,
        "Takard": takardArr.length,
        "Kaycak": kaycakArr.length
    }
    
    json = JSON.stringify(statics);

fs.writeFileSync("statics.json", json);

}


setInterval(start, 1000)


function handlePauseOrStartGame(ifPaused) {
    STopGame = ifPaused;
}



var fs = require('fs');

let statics = {
    "Grass": grassArr.length,
    "GrassEater": grassEaterArr.length,
    "Predator": predatorArr.length,
    "Takard": takardArr.length,
    "Kaycak": kaycakArr.length
}




setInterval(sendState, 3000)

function sendState(){
      let text =   fs.readFileSync("statics.json").toString()
      io.sockets.emit("statics", text)
}
