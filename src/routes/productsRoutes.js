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

/* Demais rotas a serem criadas 
Exemplo: 


produtosRouter.post("/", createProdutos)
*/

export default productsRouter;
