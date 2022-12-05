import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  obtenerProductos,
  editarProducto,
  borrarProducto,
} from "../controllers/productos.controladores";
import { check } from "express-validator";
import { consultarPedido } from "../controllers/pedido.controladores";
// import validarJWT from "../helpers/validar-jwt";

const router = Router();

router
  .route("/cafe")
  .get(listarProductos)
  .post(
    [ 
      check("nombreProducto", "el nombre del producto es obligatario")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("el producto debe tener entre 2 y 50 caracteres"),
      check("precio", "el precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("el precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("el precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen", "la imagen del producto es obligatoria")
      .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("debe enviar una URL valida"),
      check("categoria", "la categoria del producto es obligatoria")
      .notEmpty()
        .isIn(["Bebidas", "Almuerzos/Cenas", "Desayunos/Meriendas", "Postres"])
        .withMessage("La categoria debe ser valida"),
    ],
    crearProducto
  );
router
  .route("/cafe/:_id")
  .get(obtenerProductos)
  .put([
    check("nombreProducto", "el nombre del producto es oblitario")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("el producto debe tener entre 2 y 50 caracteres"),
      check("precio", "el precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("el precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("el precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen", "la imagen del producto es obligatoria")
      .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("debe enviar una URL valida"),
      check("categoria", "la categoria del producto es obligatoria")
      .notEmpty()
        .isIn(["Bebidas", "Almuerzos/Cenas", "Desayunos/Meriendas", "Postres"])
        .withMessage("La categoria debe ser valida"),
  ],editarProducto)
  .delete(borrarProducto);

export default router;