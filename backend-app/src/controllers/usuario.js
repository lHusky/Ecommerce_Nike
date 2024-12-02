import dotenv from 'dotenv';
import repository from "../repositories/usuario.js";
import nodemailer from 'nodemailer';

dotenv.config();

const findAll = (req, res) => {
    const usuarios = repository.findAll();
    return res.status(200).json(usuarios);
};

const findOneEmail = (req, res) => {
    const Email = req.params.Email;
    const result = repository.findOneEmail(Email);

    if (!result) {
        // Usuario no encontrado
        return res.status(200).json({ exists: false });
    }

    // Usuario encontrado
    return res.status(200).json({ exists: true, user: result });
};

const create = (req, res) => {
    const usuario = req.body;

    // Generar ID único para el nuevo usuario
    const usuarios = repository.findAll();
    const newId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuario.id = newId;

    const usuarioCreated = repository.create(usuario);
    return res.status(201).json(usuarioCreated);
};

const findOne = (req, res) => {
    const id = req.params.id;
    const result = repository.findOne(id);
    return res.status(200).json(result);
};

const update = (req, res) => {
    const usuario = req.body;
    const result = repository.update(usuario);
    return res.status(200).json(result);
};

const remove = (req, res) => {
    const id = req.params.id;
    const result = repository.remove(id);
    return res.status(200).json(result);
};

// Almacén temporal para códigos de verificación
let verificationCodes = {};

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true,
});

// Enviar código de verificación
const sendVerificationCode = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email es requerido' });
    }

    try {
        // Genera el código y envía el correo
        const code = Math.floor(100000 + Math.random() * 900000);
        verificationCodes[email] = {
            code,
            expiresAt: Date.now() + 5 * 60 * 1000, // Expira en 5 minutos
        };

        await transporter.sendMail({
            from: 'Nike <nike.peruvian@gmail.com>',
            to: email,
            subject: 'Código de verificación',
            text: `Tu código de verificación es: ${code}`,
            html: `<p>Tu código de verificación es: <b>${code}</b></p>`,
        });

        return res.status(200).json({ message: 'Código enviado con éxito' });
    } catch (error) {
        console.error('Error enviando correo:', error);
        return res.status(500).json({ message: 'Error enviando correo', details: error.message });
    }
};

// Verificar código
const verifyCode = (req, res) => {
    const { email, code } = req.body;

    if (!email || !code) {
        return res.status(400).json({ message: 'Email y código son requeridos' });
    }

    const record = verificationCodes[email];
    if (!record || Date.now() > record.expiresAt) {
        return res.status(400).json({ message: 'Código incorrecto o expirado' });
    }

    if (record.code.toString() === code.toString()) {
        delete verificationCodes[email];
        return res.status(200).json({ message: 'Código verificado con éxito' });
    }

    return res.status(400).json({ message: 'Código incorrecto' });
};
const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { nuevaContraseña } = req.body;
  
    // Validar que la nueva contraseña sea válida
    if (!nuevaContraseña || nuevaContraseña.length < 6) {
      return res.status(400).json({ message: "La contraseña debe tener al menos 6 caracteres." });
    }
  
    try {
      // Buscar el usuario por ID
      const usuario = await repository.findOne(id);
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
  
      // Actualizar la contraseña en la base de datos
      usuario.contraseña = nuevaContraseña;
      const actualizado = await repository.update(usuario);
      
      if (actualizado) {
        return res.status(200).json({ message: "Contraseña actualizada correctamente" });
      } else {
        return res.status(500).json({ message: "Error al actualizar la contraseña" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Error al procesar la solicitud", error: error.message });
    }
  };
  

const controller = {
    findAll,
    create,
    findOne,
    update,
    remove,
    findOneEmail,
    sendVerificationCode,
    verifyCode,
    updatePassword
};

export default controller;
