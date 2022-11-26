import mongoose, {Schema} from "mongoose";

const pedidoSchema = new Schema({
    productos:{
        type: String,
        required: true,
    },
    usuarioId:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
        minLength: 2
    },
});

const Pedido = mongoose.model("pedido", pedidoSchema);

export default Pedido;