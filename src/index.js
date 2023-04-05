import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import productoRuter from "./routes/productos.routes";
import authRouter from "./routes/usuarios.routes";
import pedidoRuter from "./routes/pedidos.routes";
import "./database/database";

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
 
});
//middlewears:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')))

app.use("/apicodercoffe/productos", productoRuter);
app.use("/apicodercoffe/auth", authRouter);
app.use("/apicodercoffe/pedidos", pedidoRuter);

