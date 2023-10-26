/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable object-shorthand */
import { Request, Response, NextFunction } from "express";
import { GenerateResponse } from "../utils/response.creator";
import { canvasDBModalDto } from "../dtos/model.dto";
import { canvasDB } from "../models/canvas.model";

const getData = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const canvasData = await canvasDB.find({ roomId: req.query.roomId });
        
        return GenerateResponse(res, 200, { data: canvasData});
    } catch (error) {
        next(error);
    }
};

const addData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const dto: canvasDBModalDto = { ...req.body };

        await canvasDB.findOneAndUpdate(
            { roomId: dto.roomId }, // filter
            { canvasData: dto.canvasData }, // update
            { upsert: true, new: true } // options
        );

        return GenerateResponse(res, 200, {
            Message: "User data added successfully",
        });
    } catch (error) {
        next(error);
    }
};

export { getData, addData };
