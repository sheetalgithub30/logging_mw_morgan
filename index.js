import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 1000;

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
