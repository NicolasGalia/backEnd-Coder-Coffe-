import mongoose, {Schema} from "mongoose";

const pedidoEnviadoSchema = new Schema({
    email: {
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2,
      },
    
      pedido: [
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