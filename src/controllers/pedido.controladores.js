import Pedido from "../models/pedido";
import{validationResult} from 'express-validator';

export const consultarPedido = async (req, res) => {
    try {
  
  const PedidoBD = await Pedido.find();
      res.status(200).json(PedidoBD);
    } catch (error) {
      console.log(error);
      res.status(404).json({mensaje: 'Errir al consultar pedido'})
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
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje: 'El pedido fue editado correctamente'
        })
        } catch (error) {
            console.log(error);
            res.status(400).json({ 
                mensaje: 'Error al intentar editar pedido'
            })
        }
        };

