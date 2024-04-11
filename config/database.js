const mongoose = require("mongoose");
const databaseUrl = process.env.DATABASE_URL;

const connectDatabase = async () => {
    try {
        const co = await mongoose.connect(databaseUrl);

        console.log(`MongoDB Connected: ${co.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        // Arrêter le processus avec échec en cas d'erreur de connexion
        process.exit(1);
    }  
};

module.exports = connectDatabase;