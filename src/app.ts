import express from 'express';

const app = express();
const port = 3000;

interface Request {
    // Add properties of the request object if needed
}

interface Response {
    send: (body?: any) => Response;
}

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});