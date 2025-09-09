import prisma from "../utils/prismaInstance.js";

//buscar todas as categorias
export const getCategorys = async (req, res) => {
    try{
        const categorys = await prisma.category.findMany();
        res.status(200).json(categorys);
    }catch(error){
        res.status(500).json({error: "erro no servidor"});
    }
};

//buscar categoria especifica por id
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