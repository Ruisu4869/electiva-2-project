const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("../utils/jwt");

//funcion de registro
const register = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    if (!email) return res.status(400).send({ msg: "El email es necesario"});
    if (!password) return res.status(400).send({ msg: "La contraseña es necesaria"});

    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = new User({
        firstname,
        lastname,
        email: email.toLowerCase(),
        role: "user",
        active: false,
        password: hashPassword,
    });

    try {
        const userStorage = await user.save();
        res.status(201).send(userStorage);
    } catch (error) {
        res.status(400).send({ msg: "Error al crear el usuario" });
    }
};

//funcion de login
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            throw new Error("El email y la contraseña son obligatorios");
        }
        const emailLowerCase = email.toLowerCase();
        const userStore = await User.findOne({ email: emailLowerCase }).exec();
        if (!userStore) {
            throw new Error("El usuario no existe");
        }
        const check = await bcrypt.compare(password, userStore.password);
        if (!check) {
            throw new Error("Contraseña incorrecta");
        }
        const checkActive = await userStore.active;
        if (checkActive == false) {
            throw new Error("El usuario no esta activo");
        }
        res.status(200).send({
            access: jwt.createAccessToken(userStore),
            refresh: jwt.createRefreshToken(userStore),
        });
    } catch (error) {
        res.status(400).send({ msg: error.message });
    }
};

function refreshAccessToken(req, res) {
    const { token } = req.body;
    if (!token) res.status(400).send({ msg: "Token requerido" });
    const { user_id } = jwt.decoded(token);
    User.findOne({ _id: user_id }, (error, userStorage) => {
        if (error) {
            res.status(500).send({ msg: "Error del servidor"});
        } else {
            res.status(200).send({
                accessToken: jwt.createAccessToken(userStorage),
            });
        }
    });
};

module.exports = {
    register,
    login,
    refreshAccessToken,
};