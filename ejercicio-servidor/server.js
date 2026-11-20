import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cvRutas from "./rutas/cvRutas.js";
import { cvModelo } from "./modelos/cvModelo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "vistas"));

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", cvRutas);

app.use((req, res) => {
  res.status(404).render("errores", {
    cv: cvModelo,
    rutaSolicitada: req.originalUrl
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});