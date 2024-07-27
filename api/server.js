import express from "express";
import cors from "cors";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import testRoute from "./routes/test.route.js";
import chatRoute from "./routes/chat.route.js";
import messageRoute from "./routes/message.route.js";
import path from "path";
import { Server } from "socket.io";
import http from "http";

dotenv.config();

const app = express();
const __dirname = path.resolve();
// app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);
app.use("/api/chats", chatRoute);
app.use("/api/messages", messageRoute);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

const server = http.createServer(app);
export const io = new Server(server);
server.listen(process.env.PORT || 8800, () => {
  console.log("server is running!");
});
