var exec = require("child_process").exec;


function start(response) {
    console.log("Request handler 'start' was called");

    exec("|s-|ah", function (error, stdout, stderr) {
        response.writeHEad(200, { "Content-Type": "text/plain" });
        response.write(stdout);
        response.end();
    });
}

function upload(response) {
    console.log("Request handler 'upload' was called");
    response.writeHEad(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;