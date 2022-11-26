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


  export const crearProducto = async (req, res) => {
    try {
      //manejar los errores de la validacion 
      const errors = validationResult(req);
      // console.log(errors.isEmpty()) devuelve false si hay errores 
  if(!errors.isEmpty()){
  return res.status(400).json({
      errors: errors.array()
  })
  }
      // console.log(req.body);
      //validar los datos del objeto
  
      const productoNuevo = new Producto(req.body);
      //guarda ese objeto en la base de datos
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
      
        //obtener el parametro: (req.params.id)   
        //obtener los datos del body validados (req.body)
        //actualizar el producto en mi base de datos 
    await Producto.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        mensaje: 'el producto fue editado correctamente'
    })
    } catch (error) {
        console.log(error);
        res.status(400).json({ 
            mensaje: 'error al intentar editar un producto'
        })
    }
    }

export const borrarProducto  = async (req, res) => {
        try {
           //obtener el parametro (req.params.id)
        
           //borrar el producto de mi base de datos 
        await Producto.findByIdAndDelete(req.params.id);
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