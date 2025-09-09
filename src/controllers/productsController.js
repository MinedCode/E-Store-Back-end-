import prisma from "../utils/prismaInstance.js";

// Neste arquivo deverá ficar a lógica de consulta aos dados

//function para buscar todos os produtos do banco de dados
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro ao buscar os produtos." });
    console.log(`erro: ${error.message}`);
  }
};

//function para buscar um produto especifico do banco de dados
export const getSpecificProduct = async (req, res) => {
  try{
    const{id} = req.params;
    const product = await prisma.product.findFirst({
      where:{
        id: parseInt(id)
      }
    });
    res.status(200).json(product)
  }catch(error){
    res.status(404).json({error: "Produto não encontrado!"});
    console.log(`erro: ${error.message}`);
  }
};

//function para inserir um produto no banco de dados
export const createProduct = async (req, res) => {
  const{
    image_url,
    name,
    price,
    description,
    category_id,
    stock
  } = req.body;

  try {
    const newProduct = await prisma.product.create({
      data: {
        image_url: image_url,
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        stock: stock
      }
    });
    res.status(201).send("produto criado com exito!")
  } catch (error) {
    res.status(500).json({Erro: "erro ao inserir no banco de dados"});
    console.log(`erro: ${error.message}`);
  }
}

//demais funções ainda serão criadas (post, put, patch, delete)
