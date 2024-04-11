require('dotenv').config(); // Permet de charger les variables d'environnement
const port = process.env.PORT;
const connectDatabase = require('./config/database');
const express = require("express");
const app = express();

// Middlewares express pour les fichiers statics
app.use(express.json()); // Pour le support des JSON dans le corps (body) des requêtes
app.use(express.urlencoded({ extended: true })); // Pour le support des formulaires

// Connexion à la base de données
connectDatabase();

// Routes
const annoncesRouter = require("./routes/annonces")
app.use("/annonces", annoncesRouter);

// Ecoute du port
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

module.exports = app;