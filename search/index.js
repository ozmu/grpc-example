const express = require('express');
const app = express();
const { bookService } = require('./proto.client');

app.get('/', (request, response) => {
    let data = {
        id: 1
    }
    bookService.GetBook(data, (error, book) => {
        if (error) {
            return response.json({
                status: 500,
                message: error
            })
        } else {
            return response.send(book);
        }
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});