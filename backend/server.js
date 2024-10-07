
const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());


sequelize.sync({ force: false })
  .then(() => {
    console.log('connexion avec la base de donnée reussit');
  })
  .catch((err) => {
    console.error('impossible de se connecter à la base de donnée:', err);
  });


app.use('/users', userRoutes);


app.listen(port, () => {
  console.log(`Le Serveur est sur http://localhost:${port}`);
});
