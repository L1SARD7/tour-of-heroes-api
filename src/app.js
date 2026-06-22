import express from "express";
import { heroesRouter } from "./routes/hero-router.js";
import cors from "cors"


export const app = express();

const BodyJsonMiddleware = express.json();
app.use(BodyJsonMiddleware);

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use('/heroes', heroesRouter)

app.get('/', (req, res) => {
    res.send('Express server is successfully running!');
});


