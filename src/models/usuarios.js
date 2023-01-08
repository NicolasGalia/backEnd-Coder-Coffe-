import mongoose, {Schema} from "mongoose";



const usuarioSchema = new Schema({

    nombre:{
        type: String,
        required: true,
        unique: true,
        maxLength: 100,
        minLength: 2
    },
    apellido:{
        type: String,
        required: true,
        unique: true,
        maxLength: 100,
        minLength: 2
    },
    email:{
        type: String ,
        required: true,
        lowercase: true,
        maxLength: 80,
        minLength: 2
    },
    userName:{
        type: String,
        required: true,
        unique: true,
        maxLength: 50,
        minLength: 2
    },

    password:{
        type: String,
        required: true,
        minLength: 8,
        maxLength: 61
    }
});

const Usuario = mongoose.model("usuario", usuarioSchema);
export default Usuario;