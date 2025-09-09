import { Router } from "express";
import { getCategorys, getSpecificCategory } from "../controllers/categoryController.js";

const categoryRouter = Router();

categoryRouter.get("/", getCategorys);
categoryRouter.get("/:id", getSpecificCategory);

export default categoryRouter;