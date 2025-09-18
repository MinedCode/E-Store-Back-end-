import { Router } from "express";
import {
  getProducts,
  getSpecificProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const productsRouter = Router();

//Definição das rotas aqui

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getSpecificProduct);
productsRouter.post("/", authMiddleware, createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);

export default productsRouter;
