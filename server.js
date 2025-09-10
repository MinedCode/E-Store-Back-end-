import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/productsRoutes.js";
import categoryRouter from "./src/routes/categoryRouter.js";
import userRouter from "./src/routes/usersRoutes.js";

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Aqui vai os prefixos da rota
app.use("/produtos", productsRouter);
app.use("/categorias", categoryRouter);
app.use("/usuarios", userRouter);

app.listen(PORT, () => {
  console.log(`Serivdor rodando na porta ${PORT}`);
});
