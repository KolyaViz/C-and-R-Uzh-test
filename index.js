import http from "http";

const port = process.env.PORT || 8181;

const server = http.createServer();

server.listen(port);

server.on("listening", onListening);
server.on("error", onError);
process.on("unhandledRejection", onUnhandledRejection);
process.on("uncaughtException", onUncaughtException);


function onListening(){
    console.log(`Server start on port ${port}`);
}
function onError(e){
    console.log(e);
}
function onUnhandledRejection(promise, reason){
    console.log(`Unhandled rejection at: ${promise}\n Reason: ${reason}`)
}
function onUncaughtException(err, origin){
    console.log(`Exception: ${err}\n Exception origin: ${origin}`)
}