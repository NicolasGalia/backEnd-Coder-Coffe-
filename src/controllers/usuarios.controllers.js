import Usuario from "../models/usuarios";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import generarJWT from "../helpers/jwt";
import Pedido from "../models/pedido";

export const login = async (req, res) => {
  console.log(req.body)
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    //verificar si existe un mail como el recibido
    const { email, password } = req.body;

    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    if (!usuario) {

      //si el usuario existe
      return res.status(400).json({
        mensaje: "Correo o password invalido - correo",
      });
    }

    // desencriptar el password
    const passwordValido = bcrypt.compareSync(password, usuario.password);
    // si no es valido el password
    if (!passwordValido) {
      return res.status(400).json({
        mensaje: "Correo o password invalido - password",
      });
    }
    //generar el token
    // const token = await generarJWT(usuario._id, usuario.nombre);

    //responder que el usuario es correcto
    res.status(200).json({
      mensaje: "El usuario existe",
      usuario: usuario
      // token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "usuario o contraseña invalido",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    // manejar los errores de la validacion
    const errors = validationResult(req);
    // errors.isEmpty() devuelve false si hay errores
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    //verificar si el email ya existe
    // let usuario = await Usuario.findOne({ email: req.body.email }); //devulve un null
    let usuario = await Usuario.findOne({ email }); //devulve un null
    if (usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }

    //guardamos el nuevo usuario en la BD
    usuario = new Usuario(req.body);
    //encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    

    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombre,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }

  const { email } = req.body;

  let pedido = new Pedido({
    email: email,
    pedido: [],
    total: 0,
  });
  await pedido.save()
};

export const listarUsuarios = async (req, res) => {
  try {

const Usuarios = await Usuario.find();
    res.status(200).json(Usuarios);
  } catch (error) {
    res.status(404).json({mensaje: 'Error al busca los usuarios'})
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
      const id = req.params._id;
    const usuarioBuscado = await Usuario.findById(id);
    console.log(usuarioBuscado)
    res.status(200).json(usuarioBuscado);

  } catch (error) {
    res.status(404).json({mensaje: 'error al buscar los usuarios'})
  }
};


export const borrarUsuarios  = async (req, res) => {
  try {
  await Usuario.findByIdAndDelete(req.params._id);
  res.status(200).json({
      mensaje: 'el usuario fue borrado exitosamente'
  })
  } catch (error) {
      console.log(error);
      res.status(404).json({ 
          mensaje: 'error al intentar borrar un usuario'
      })
  }
  }