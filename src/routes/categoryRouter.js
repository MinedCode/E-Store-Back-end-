import { Router } from "express";
import { 
    getCategorys,
    getSpecificCategory,
    getSpecificCategoryByName,
    createCategory,
    updateCategory,
    deleteCategory
 } from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.get("/", getCategorys);
categoryRouter.get("/:id", getSpecificCategory);
categoryRouter.get("/nome/:name", getSpecificCategoryByName);
categoryRouter.post("/", createCategory);
categoryRouter.put("/:id", updateCategory);
categoryRouter.delete("/:id", deleteCategory);

export default categoryRouter;