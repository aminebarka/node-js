import express from "express";
import categorieRouter from "./routes/categorie.route.js";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/categories", categorieRouter);
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
