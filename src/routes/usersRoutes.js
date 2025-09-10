import { Router } from "express";
import { 
    getUsers,
    getSpecificUser,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getSpecificUser);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;