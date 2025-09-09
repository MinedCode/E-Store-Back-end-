import prisma from "../utils/prismaInstance.js";

//buscar todas as categorias
export const getCategorys = async (req, res) => {
    try{
        const categorys = await prisma.category.findMany();
        res.status(200).json(categorys);
    }catch(error){
        res.status(500).json({error: "erro no servidor"});
    }
}