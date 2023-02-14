import { Router } from "express";

import { check } from "express-validator";
import {
  consultarPedido,
  consultarTodosPedido,
  editarPedido,
  generarPedido,
  limpiarPedido,
} from "../controllers/pedido.controladores";
import { generarPedidos } from "../controllers/pedidos.controladores";

const router = Router();

router
  .route("/")
  .get(consultarPedido)
  .post(generarPedidos
    
  );

router
  .route("/todos")
  .get(consultarTodosPedido);

router.route("/:id").put(editarPedido);

export default router;
