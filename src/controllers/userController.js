import prisma from "../utils/prismaInstance.js";

//function para buscar todos os usuarios do banco de dados
export const getUsers = async (req, res) => {
    try{
        const users = await prisma.users.findMany();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({error: "erro no servidor"});
    }
};

//function para buscar usuario especifico por id no banco de dados
export const getSpecificUser = async (req, res) => {
    try {
        const{id} = req.params;
        const user = await prisma.users.findFirst({
            where: {
                id: parseInt(id)
            }
        })
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({erro: "Erro interno no servidor"});
        console.log(`erro: ${error.message}`);
    }
};

//function para inserir um usuario no banco de dados
export const createUser = async (req, res) =>{
    try{
        const{
            name,
            age,
            email,
            password
        } = req.body;
        const newUser = await prisma.users.create({
            data:{
                name: name,
                age: age,
                email: email,
                password: password
            }
        });
        res.status(201).send("Usuario criado com exito!");
    }catch(error){
        res.status(500).send("erro ao inserir no banco de dados");
        console.log(`erro: ${error.message}`);
    }
};

//function para atualizar um usuario
export const updateUser = async (req, res) =>{
    try {
        const{id} = req.params;
        const{
            name,
            age,
            email,
            password
        } = req.body;
        const userUpdated = await prisma.users.update({
            where: { id: parseInt(id) },
            data: { 
                name: name,
                age: age,
                email: email,
                password: password
            }
        });
        res.status(200).send("usuario atualizado!");
    } catch (error) {
        res.status(500).send("Erro ao atualizar o usuario");
        console.log(`erro: ${error.message}`);
    }
};

//function para deletar um usuario do banco de dados
export const deleteUser = async (req, res) => {
  try{
    const{id} = req.params;
    const userDeleted = await prisma.users.delete({
      where: { id: parseInt(id) }
    });
    res.status(204).send("Usuario deletada com sucesso");
  }catch(error){
    res.status(500).send("erro ao deletar o usuario");
    console.log(`erro: ${error.message}`);
  }
};