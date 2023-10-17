var socket = io();


socket.on("name", handleInfo)

function handleInfo(esim){
    console.log(esim);

}