import Producto from "../models/productos";
import{validationResult} from 'express-validator';

export const listarProductos = async (req, res) => {
  try {
    //buscar los productos 
const Productos = await Producto.find();
    //responder al frontEnd con el arreglo de productos 
    res.status(200).json(Productos);

  } catch (error) {
    console.log(error);
    //enviar una respuesta al frontEnd
    res.status(404).json({mensaje: 'error al busca los productos'})
  }
};