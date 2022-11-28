import { Router } from "express";

import { check } from "express-validator";
import {
  consultarPedido,
  editarPedido,
  generarPedido,
  limpiarPedido,
} from "../controllers/pedido.controladores";
import { generarPedidos } from "../controllers/pedidos.controladores";

const router = Router();

router
  .route("/pedidos")
  .get(consultarPedido)
  .post(
    [
      check("nombre", "Nombre invalido").notEmpty(),
      check("apellido", "Apellido invalido").notEmpty(),
      check("email", "Email invalido").notEmpty(),
      check("productos", "Debe poseer productos").notEmpty(),
      check("total", "El total del pedido es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El total debe ser numèrico")
        .custom((value) => {
          if (value >= 1 && value <= 100000) {
            return true;
          } else {
            throw new Error("El total debe estar entre 1 y 100000");
          }
        }),
      check("estado", "El estado del pedido es obligatorio")
        .notEmpty()
        .isIn(["pendiente", "entregado"])
        .withMessage("El estado del pedido no es valido (pendiente/entregado)"),
    ],
    generarPedidos
  );

router
  .route("/pedido")
  .post(
    [
      check("producto", "El pedido debe tener productos").notEmpty(),
      check("usuarioId", "El pedido debe tener un comprador").notEmpty(),
    ],
    generarPedido
  )
  .put(
    [
      check("productos", "El pedido debe tener productos").notEmpty(),
      check("usuarioId", "El pedido debe tener un comprador").notEmpty(),
      check("total", "El total del pedido es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El total debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 100000) {
            return true;
          } else {
            throw new Error("El total debe estar entre 1 y 100000");
          }
        }),
      check("idPedido", "El id del pedido es obligatorio").notEmpty(),
      check("estado", "El estado del pedido es obligatorio")
        .notEmpty()
        .isIn(["pendiente", "entregado"])
        .withMessage("El estado del pedido no es valido (pendiente/entregado)"),
    ],
    editarPedido
  )
  .delete(limpiarPedido);

export default router;
