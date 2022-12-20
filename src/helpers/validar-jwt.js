import jwt from 'jsonwebtoken';

const validarJWT = (req, res, next)=>{

    const token = req.header('x-token');
    // si el token no vino en el header
    if(!token){
        return res.status(401).json({
            mensaje: 'No hay token en la peticion'
        })
    }
// pruebo si el token es valido
    try{
        const payload = jwt.verify(token, process.env.SECRET_JWT)
        //extraer los datos del payload
        req.id= payload.uid;
        req.nombre= payload.nombre;

    }catch(error){
        console.log(error)
        return res.status(401).json({
            mensaje: 'El token no es valido'
        })
    }

    next()
}

export default validarJWT