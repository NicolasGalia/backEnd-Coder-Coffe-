import mongoose, {Schema} from "mongoose";

const pedidoEnviadoSchema = new Schema({
    nombreUsuario: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2,
      },
    
      pedido: [
        {
          nombre: {
            type: String,
            maxLength: 60,
            minLength: 2,
          },
          precio: {
            type: Number,
            min: 20,
            max: 10000,
          },
          cantidad: {
            type: Number,
            min: 1,
            max: 10000
          }
        },
      ],
      total: {
        type: Number,
        required: true,
        min: 0,
        max: 200000,
      },
    });

const PedidoEnviado = mongoose.model("pedidoEnviado", pedidoEnviadoSchema);

export default PedidoEnviado;