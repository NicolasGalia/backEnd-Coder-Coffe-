import Pedido from "../models/pedido";
import{validationResult} from 'express-validator';

export const consultarPedido = async (req, res) => {
    try {
  
      let pedidoBD = await Pedido.findOne(req.body);
      res.status(200).json(pedidoBD);
    } catch (error) {
      console.log(error);
      res.status(404).json({mensaje: 'Error al consultar pedido'})
    }
  };



export const limpiarPedido = async (req, res)=>{
    try {
      await Pedido.findByIdAndDelete(req.params.id)
      res.status(200).json({
        mensaje: "El pedido fue limpiado correctamente"
      })
      
    } catch (error) {
      console.log(error)
      res.status(404).json({
        mensaje: "El pedido no pudo ser limpiado"
      })
    }}
    

    export const editarPedido  = async (req, res) => {
        try {
        await Pedido.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({
            mensaje: 'El pedido fue editado correctamente'
        })
        } catch (error) {
            console.log(error);
            res.status(400).json({ 
                mensaje: 'Error al intentar editar el pedido'
            })
        }
        };


        // AGREGAR PRODUCTO

        export const generarPedido = async (req, res) => {
          try { 
            const errors = validationResult(req);
        if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
        }
            const pedidoNuevo = new Pedido(req.body);
            await pedidoNuevo.save();
        
            res.status(201).json({
              mensaje: "El producto fue enviado correctamente",
            });
          } catch (error) {
            console.log(error);
            res
              .status(404)
              .json({ mensaje: "Error al enviar el producto" });
          }
        };
