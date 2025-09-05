import { Router } from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  partialUpdateProduct,
  deleteProduct,
} from "../controllers/productsController.js";

const productsRouter = Router();

//Definição das rotas aqui

productsRouter.get("/", getProducts);
productsRouter.post("/", createProduct);
productsRouter.put("/:id", updateProduct);
productsRouter.patch("/:id", partialUpdateProduct);
productsRouter.delete("/:id", deleteProduct);


export default productsRouter;
