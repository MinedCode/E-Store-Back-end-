import prisma from "../utils/prismaInstance.js";

// Neste arquivo deverá ficar a lógica de consulta aos dados

//function para buscar todos os produtos do banco de dados
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.produto.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro ao buscar os produtos." });
  }
};

//function para buscar um produto especifico do banco de dados
export const getSpecificProduct = async (req, res) => {
  try{
    const{id} = req.params;
    const product = await prisma.produto.findFirst({
      where:{
        id: parseInt(id)
      }
    });
    res.status(200).json(product)
  }catch(error){
    res.status(404).json({error: "Produto não encontrado!"})
  }
};

//demais funções ainda serão criadas (post, put, patch, delete)
