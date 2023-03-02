import { Router } from "express";
import { generarPedidos, consultarPedido } from "../controllers/pedidos.controladores";

const router = Router();

router
  .route("/")
  .get(consultarPedido)
  .post(generarPedidos);

export default router;
