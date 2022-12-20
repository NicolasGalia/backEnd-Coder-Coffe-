import mongoose, {Schema} from "mongoose";

const pedidosSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2
    },
    apellido:{
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2
    },
    email:{
        type: String,
        required: true,
        maxLength: 50,
        minLength: 2
    },
    productos:{
        type: String,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    },
    estado:{
        type: String,
        required: true,
    }
});

const Pedidos = mongoose.model("pedidos", pedidosSchema);

export default Pedidos;