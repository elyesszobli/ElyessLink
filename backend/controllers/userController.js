const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.login = async (req, res) =>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({where: {email} });
        if(!user) {
            return res.status(400).send("Email ou mot de passe invalide");
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.status(400).send("Email ou mot de passe invalide");
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);

        res.header('auth-token', token).send(token);
    }catch (error) {
        res.status(500).send('Erreur lors de la connexion');
      }
};