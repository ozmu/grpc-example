const grpc = require('@grpc/grpc-js');
const { findBook } = require('./books');
const { bookProto } = require('./proto');

function getBook(call, callback) {
    callback(null, findBook(call.request.id));
}

var server = new grpc.Server();
server.addService(bookProto.BookService.service, { getBook });
server.bindAsync('0.0.0.0:3001', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        throw err;
    }
    console.log('Server listening on', port);
    server.start();
});