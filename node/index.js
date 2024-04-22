import express from 'express';

const app = express();
app.get('/', (req, res) => {
    console.log(req);
    res.send('Hello World!')
})

app.listen(3200, () => console.log('server on: 3200'));