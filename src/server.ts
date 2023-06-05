import express, { Application, Request, Response } from "express";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Olá Dev!" });
});

app.listen(3000, () => {
  console.log("🏆 Server is running on port 3000");
});
