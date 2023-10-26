import { Model, model, Schema } from "mongoose";
import { canvasDBModalDto } from "../dtos/model.dto";


const canvasData: Schema<canvasDBModalDto> = new Schema(
    {
        roomId: String,
        canvasData: String,
    }
);


const canvasDB: Model<canvasDBModalDto> = model("canvasData", canvasData);

export { canvasDB };