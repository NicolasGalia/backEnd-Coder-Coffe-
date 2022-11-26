import Producto from "../models/productos";
import{validationResult} from 'express-validator';

export const listarProductos = async (req, res) => {
  try {

const Productos = await Producto.find();
    res.status(200).json(Productos);
  } catch (error) {
    res.status(404).json({mensaje: 'error al busca los productos'})
  }
};

export const obtenerProductos = async (req, res) => {
    try {
        const id = req.params._id;
      const productoBuscado = await Producto.findById(id);
      console.log(productoBuscado)
      res.status(200).json(productoBuscado);
  
    } catch (error) {
      res.status(404).json({mensaje: 'error al busca los producto'})
    }
  };


  export const crearProducto = async (req, res) => {
    try { 
      const errors = validationResult(req);
  if(!errors.isEmpty()){
  return res.status(400).json({
      errors: errors.array()
  })
  }
      const productoNuevo = new Producto(req.body);
      await productoNuevo.save();
  
      res.status(201).json({
        mensaje: "el producto fue creado correctamente",
      });
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ mensaje: "error al intentar agregar un nuevo producto" });
    }
  };

  export const editarProducto  = async (req, res) => {
    try {
    await Producto.findByIdAndUpdate(req.params._id, req.body)
    res.status(200).json({
        mensaje: 'el producto fue editado correctamente'
    })
    } catch (error) {
        console.log(error);
        res.status(400).json({ 
            mensaje: 'error al intentar editar un producto'
        })
    }
    };

export const borrarProducto  = async (req, res) => {
        try {
        await Producto.findByIdAndDelete(req.params._id);
        res.status(200).json({
            mensaje: 'el producto fue borrado exitosamente'
        })
        } catch (error) {
            console.log(error);
            res.status(404).json({ 
                mensaje: 'error al intentar borrar un producto'
            })
        }
        }