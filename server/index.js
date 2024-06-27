import express from 'express';
import logger from 'morgan';
import path from 'path';

const port = process.env.PORT ?? 3000;

const app = express();
app.use(logger('dev'));


app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'client', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
