import { Router } from "express";
import { getProducts } from "../controllers/productsController.js";

const productsRouter = Router();

//Definição das rotas aqui

productsRouter.get("/", getProducts);

/* Demais rotas a serem criadas 
Exemplo: 


produtosRouter.post("/", createProdutos)
*/

export default productsRouter;
