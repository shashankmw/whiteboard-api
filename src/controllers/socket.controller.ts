import { Socket } from "socket.io";
import { canvasDBModalDto } from "../dtos/model.dto";

const socketIO = (socket: Socket) => {
    socket.on("join_room", async (room: string) => {
        try {
            await socket.join(room);
        } catch (error) {
            // Handle any errors that occur during socket.join()
        }
    });

    socket.on("send_data", ({ roomId, canvasData }: canvasDBModalDto) => {
        socket.to(roomId).emit("receive_data", canvasData);
    });
};

export { socketIO };
