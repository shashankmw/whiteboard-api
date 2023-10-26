import { Router } from "express";
import { addData, getData } from "../controllers/canvas.controller";

const canvasRoute: Router = Router();

canvasRoute.get("/getData", getData);
canvasRoute.post("/addData", addData);

export  default canvasRoute ;