import repository from "../repositories/usuario.js";
import nodemailer from 'nodemailer';

const findAll = (req, res) => {
    const productos = repository.findAll();
    return res.status(200).json(productos);
};

const findOneEmail = (req, res) => {
    const Email = req.params.Email;
    const result = repository.findOneEmail(Email);
    return res.status(200).json(result);
};

const create = (req, res) => {
    const producto = req.body;
    const productoCreated = repository.create(producto);
    return res.status(201).json(productoCreated);
};

const findOne = (req, res) => {
    const id = req.params.id;
    const result = repository.findOne(id);
    return res.status(200).json(result);
};

const update = (req, res) => {
    const producto = req.body;
    const result = repository.update(producto);
    return res.status(200).json(result);
};

const remove = (req, res) => {
    const id = req.params.id;
    const result = repository.remove(id);
    return res.status(200).json(result);
};

// Almacén temporal para códigos de verificación
let verificationCodes = {};

// Enviar código de verificación
const sendVerificationCode = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email es requerido' });
    }

    const code = Math.floor(100000 + Math.random() * 900000); // Generar código de 6 dígitos
    verificationCodes[email] = {
        code,
        expiresAt: Date.now() + 5 * 60 * 1000 // Expira en 5 minutos
    };

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'tu-email@gmail.com', // Cambia a tu correo
                pass: 'tu-contraseña-de-aplicación', // Contraseña de aplicación
            },
        });

        await transporter.sendMail({
            from: 'Nike <tu-email@gmail.com>',
            to: email,
            subject: 'Código de verificación',
            text: `Tu código de verificación es: ${code}`,
            html: `<p>Tu código de verificación es: <b>${code}</b></p>`,
        });

        return res.status(200).json({ message: 'Código enviado con éxito' });
    } catch (error) {
        console.error('Error enviando correo:', error);
        return res.status(500).json({ message: 'Error enviando correo' });
    }
};

// Verificar código de verificación
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
        delete verificationCodes[email]; // Eliminar el código tras la verificación
        return res.status(200).json({ message: 'Código verificado con éxito' });
    }

    return res.status(400).json({ message: 'Código incorrecto' });
};

const controller = {
    findAll,
    create,
    findOne,
    update,
    remove,
    findOneEmail,
    sendVerificationCode,
    verifyCode
};

export default controller;
