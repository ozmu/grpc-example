const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const BOOK_PROTO_PATH = __dirname + '/protos/book.proto';

var packageDefinition = protoLoader.loadSync(
    BOOK_PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
});

var bookProto = grpc.loadPackageDefinition(packageDefinition).book;

var bookService = new bookProto.BookService('localhost:3001', grpc.credentials.createInsecure());

module.exports = {
    bookService
}