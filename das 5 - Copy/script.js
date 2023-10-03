var matrix = [];
var n = 20;
var m = 30;
let side = 30;


for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}

function character(index, count) {
    for (let i = 0; i < count; i++) {
        var w = Math.floor(random(0, n));
        var v = Math.floor(random(0, m))
        matrix[w][v] = index;
    }
}
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var takardArr = [];
var kaycakArr = [];
function setup() {
    character(1,100)
    character(2,10)
    character(3,5)
    character(4,3)
    character(5,5)
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
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

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("blue")
            }

            rect(x * side, y * side, side, side);
        }
    }

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
}
