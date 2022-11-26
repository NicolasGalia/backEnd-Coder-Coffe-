import Pedidos from '../models/pedidos';
import{validationResult} from 'express-validator';

export const generarPedidos = async (req, res) => {
    try { 
      const errors = validationResult(req);
  if(!errors.isEmpty()){
  return res.status(400).json({
      errors: errors.array()
  })
  }
      const pedidoNuevo = new Pedidos(req.body);
      await pedidoNuevo.save();
  
      res.status(201).json({
        mensaje: "El pedido fue enviado correctamente",
      });
    } catch (error) {
      console.log(error);
      res
        .status(404)
        .json({ mensaje: "Error al enviar el pedido" });
    }
  };