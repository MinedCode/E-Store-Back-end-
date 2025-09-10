import prisma from "../utils/prismaInstance.js";

// Neste arquivo deverá ficar a lógica de consulta aos dados

//function para buscar todos os produtos do banco de dados
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send("Ocorreu um erro ao buscar os produtos.");
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
    res.status(404).send("Produto não encontrado!");
    console.log(`erro: ${error.message}`);
  }
};

//function para inserir um produto no banco de dados
export const createProduct = async (req, res) => {
  try {
    const{
      image_url,
      name,
      price,
      description,
      category_id,
      stock
    } = req.body;
    
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
    res.status(500).send("erro ao inserir no banco de dados");
    console.log(`erro: ${error.message}`);
  }
}

//function para atualizar um produto por completo
export const updateProduct = async (req, res) => {
  try {
    const{id} = req.params;
    const{
      image_url,
      name,
      price,
      description,
      category_id,
      stock    
    } = req.body;
    
    const productUpdated = await prisma.product.update({
      where: { id: parseInt(id)},
      data:{
        image_url: image_url,
        name: name,
        price: price,
        description: description,
        category_id: category_id,
        stock: stock
      }
    });
    res.status(200).send("Produto atualizado!");
  } catch (error) {
    res.status(500).send("Erro ao atualizar o produto");
    console.log(`erro: ${error.message}`);
  }
}

//function para deletar um produto do banco de dados
export const deleteProduct = async (req, res) => {
  try{
    const{id} = req.params;
    const productDeleted = await prisma.product.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send("Produto deletado com sucesso");
  }catch(error){
    res.status(500).send("erro ao deletar o produto");
    console.log(`erro: ${error.message}`);
  }
}

