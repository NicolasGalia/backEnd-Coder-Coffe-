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

export const obtenerProductos = async (req, res) => {
    try {
   
      //obtener el parametro 
  console.log(req.params.id);
      //pedirle a la base de datos el prdoucto que coincide con el parametro 
      const productoBuscado = await Producto.findById(req.params.id);
  
      //responder al frontEnd 
      res.status(200).json(productoBuscado);
  
    } catch (error) {
      console.log(error);
      //enviar una respuesta al frontEnd
      res.status(404).json({mensaje: 'error al busca los producto'})
    }
  };