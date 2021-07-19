import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

//utils imports
import Storage from './utils/Storage.js';

//controllers
import shortnerController from './controllers/shortener.js';
import redirectController from './controllers/redirect.js';

//app init/config
const app = express();
const PORT = process.env.port || 8080;

//register middlewares
app.use('/assets', express.static('./client/build'));
app.use('/static', express.static('./client/public'));
app.use(bodyParser.json());
app.use(cors());

//Routes
app.get('/', (req, res) => {
    res.sendFile(path.resolve('client','public','index.html'))
});
app.post('/shortn', shortnerController);
app.get('/[a-f0-9]{6}', redirectController)


app.listen(PORT, () => console.log(`Server Started On Port::${PORT}`));