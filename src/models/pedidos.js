import mongoose, {Schema} from "mongoose";

const pedidosSchema = new Schema({
    productos:{
        type: String,
        required: true,
    },
    usuarioId:{
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2
    },
    total:{
        type: Number,
        required: true,
    },
    idPedido:{
        type: String,
        required: true,
        unique: true,
        maxLength: 60,
        minLength: 2
    },
    estado:{
        type: String,
        required: true,
    }
});

const Pedidos = mongoose.model("pedidos", pedidosSchema);

export default Pedidos;