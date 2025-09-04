import prisma from "../utils/prismaInstance.js";

// Neste arquivo deverá ficar a lógica de consulta aos dados
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.produto.findMany();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Ocorreu um erro ao buscar os produtos." });
  }
};
