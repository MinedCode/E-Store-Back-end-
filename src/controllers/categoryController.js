import prisma from "../utils/prismaInstance.js";

//function para buscar todas as categorias no banco de dados
export const getCategorys = async (req, res) => {
    try{
        const categorys = await prisma.category.findMany();
        res.status(200).json(categorys);
    }catch(error){
        res.status(500).json({error: "erro no servidor"});
    }
};

//function para buscar categoria especifica por id no banco de dados
export const getSpecificCategory = async (req, res) => {
    try {
        const{id} = req.params;
        const category = await prisma.category.findFirst({
            where: {
                id: parseInt(id)
            }
        })
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({erro: "Erro interno no servidor"});
        console.log(`erro: ${error.message}`);
    }
};

//function para buscar categoria especifica pelo nome no banco de dados
export const getSpecificCategoryByName = async (req, res) => {
    try {
        const{name} = req.params;
        const category = await prisma.category.findFirst({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive"
                }
            }
        });
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({erro: "Erro interno no servidor"});
        console.log(`erro: ${error.message}`);
    }
}

//function para inserir uma categoria no banco de dados
export const createCategory = async (req, res) =>{
    try{
        const{name} = req.body;
        const newCategory = await prisma.category.create({
            data:{
                name: name
            }
        });
        res.status(201).send("Categoria criada com exito!");
    }catch(error){
        res.status(500).send("erro ao inserir no banco de dados");
        console.log(`erro: ${error.message}`);
    }
};

//function para atualizar uma categoria
export const updateCategory = async (req, res) =>{
    try {
        const{id} = req.params;
        const{name} = req.body;
        const categoryUpdated = await prisma.category.update({
            where: { id: parseInt(id) },
            data: { name: name}
        });
        res.status(200).send("Categoria atualizada!");
    } catch (error) {
        res.status(500).send("Erro ao atualizar a categoria");
        console.log(`erro: ${error.message}`);
    }
};

//function para deletar uma categoria do banco de dados
export const deleteCategory = async (req, res) => {
  try{
    const{id} = req.params;
    const categoryDeleted = await prisma.category.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send("categoria deletada com sucesso");
  }catch(error){
    res.status(500).send("erro ao deletar a categoria");
    console.log(`erro: ${error.message}`);
  }
};