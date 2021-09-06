import router from "./routes.js";
import express from "express";
const app = express();

app.listen(3000, () => {
  console.log(`listening at port 3000`);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header({
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "POST, PUT, GET, OPTIONS",
  });
  next();
});

app.use(`/`, router);