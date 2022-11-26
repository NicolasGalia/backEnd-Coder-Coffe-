import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  obtenerProductos,
  editarProducto,
  borrarProducto,
} from "../controllers/productos.controladores";
import { check } from "express-validator";

const router = Router();

router
  .route("/productos")
  .get(listarProductos)
  .post(
    [
      check("nombreProducto", "El nombre del producto es obligatario")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("El producto debe tener entre 2 y 50 caracteres"),
      check("precio", "El precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("El precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen", "La imagen del producto es obligatoria")
      .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe enviar una URL valida"),
      check("categoria", "La categoria del producto es obligatoria")
      .notEmpty()
        .isIn(["bebida-fria", "bebida-caliente", "dulce", "salado"])
        .withMessage("La categoria debe ser valida"),
    ],
    crearProducto
  );
router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put([
    check("nombreProducto", "El nombre del producto es obligatorio")
        .notEmpty()
        .isLength({ min: 2, max: 50 })
        .withMessage("El producto debe tener entre 2 y 50 caracteres"),
      check("precio", "El precio del producto es obligatorio")
        .notEmpty()
        .isNumeric()
        .withMessage("El precio debe ser numerico")
        .custom((value) => {
          if (value >= 1 && value <= 10000) {
            return true;
          } else {
            throw new Error("El precio debe estar entre 1 y 10000");
          }
        }),
      check("imagen", "La imagen del producto es obligatoria")
      .notEmpty()
        .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
        .withMessage("Debe enviar una URL valida"),
      check("categoria", "La categoria del producto es obligatoria")
      .notEmpty()
        .isIn(["bebida-fria", "bebida-caliente", "dulce", "salado"])
        .withMessage("La categoria debe ser valida"),
  ],editarProducto)
  .delete(borrarProducto);

export default router;