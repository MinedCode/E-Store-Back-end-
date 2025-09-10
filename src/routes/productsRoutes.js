import { Router } from "express";
import {
  getProducts,
  getSpecificProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const productsRouter = Router();

//Definição das rotas aqui

productsRouter.get("/", getProducts);
productsRouter.get("/:id", getSpecificProduct);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.delete("/:id", deleteProduct);


export default productsRouter;
