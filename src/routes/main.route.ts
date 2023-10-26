import { Request, Response, Router } from "express";
import { GenerateResponse } from "../utils/response.creator";
import canvasRoute from "./canvas.route";

const mainRouter: Router = Router();

mainRouter.use("/canvas", canvasRoute);

mainRouter.use((req: Request, res: Response) => {
    GenerateResponse(res, 404);
});

export { mainRouter };
