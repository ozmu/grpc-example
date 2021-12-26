const grpc = require('@grpc/grpc-js');

var Server = new grpc.Server();

Server.bindAsync('0.0.0.0:3001', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        throw err;
    }
    console.log('Server listening on', port);
    Server.start();
});