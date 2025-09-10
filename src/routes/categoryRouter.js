import { Router } from "express";
import { 
    getCategorys,
    getSpecificCategory,
    createCategory,
    updateCategory,
    deleteCategory
 } from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.get("/", getCategorys);
categoryRouter.get("/:id", getSpecificCategory);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;