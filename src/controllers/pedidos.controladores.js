import PedidoEnviado from '../models/pedidoEnviado';
import{validationResult} from 'express-validator';

export const generarPedidos = async (req, res) => {
    try {
      const pedidoEnviadoNuevo = new PedidoEnviado(req.body);
      await pedidoEnviadoNuevo.save();
  
      res.status(201).json({
        mensaje: "El pedido fue enviado correctamente",
      });
    } catch (error) {
      
      res
        .status(404)
        .json({ mensaje: "Error al enviar el pedido" });
    }
  };

  export const consultarPedido = async (req, res) => {
    try {
      let pedidoBD = await PedidoEnviado.find();
      res.status(200).json(pedidoBD);
    } catch (error) {
    
      res.status(404).json({mensaje: 'Error al consultar pedido'})
    }
  };

  export const editarPedidos  = async (req, res) => {
    try {
    await Producto.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
        mensaje: 'El pedido fue editado correctamente'
    })
    } catch (error) {
       
        res.status(400).json({ 
            mensaje: 'Error al intentar editar pedido'
        })
    }
    };