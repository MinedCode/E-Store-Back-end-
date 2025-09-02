import { Router } from "express";
import { getProdutos } from "../controllers/productsController.js";

const productsRouter = Router();

//Definição das rotas aqui

productsRouter.get("/", getProdutos);

/* Demais rotas a serem criadas 
Exemplo: 

produtosRouter.post("/", createProdutos)
*/
export default productsRouter;
