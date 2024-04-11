const Mongoose = require('mongoose');
const Annonce = require('../models/Annonce');

exports.createAnnonce = async (req, res) => {
    try {
        const newAnnonce = await new Annonce({...req.body});
        newAnnonce.save();
        res.status(201).json({newAnnonce}); // objet renvoyé pour le test
    } catch (error) {
        res.status(500).json({ message: "Failed to create annonce", error: error.message });
    }
}

exports.updateAnnonce = async (req, res) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const updatedAnnonce = await Annonce.findByIdAndUpdate(req.params.id, req.body, { new : true });
        if (!updatedAnnonce) {
             return res.status(404).json({ message: "Annonce not found" });
        }
        res.status(200).json(updatedAnnonce);
    } catch (error) {
        res.status(500).json({ message: "Failed to update annonce", error: error.message });
    }
}

exports.getAllAnnonces = async (req, res) => {
    try {
        const annonces = await Annonce.find();
        if (!annonces) {
             return res.status(404).json({ message: "Annonces not found" });
        }
        res.status(200).json(annonces);
    } catch (error) {
        res.status(500).json({ message: "Failed to get annonces", error: error.message });
    }
}

exports.getOneAnnonce = async (req, res) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const annonce = await Annonce.findById(req.params.id);
        if (!annonce) {
            return res.status(404).json({ message: "Annonce not found" });
        }
        res.status(200).json(annonce);
    } catch (error) {
        res.status(500).json({ message: "Failed to get the annonce", error: error.message });
    }
}

exports.deleteAnnonce = async (req, res) => {
    try {
        if (!Mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid ID" });
        }
        const deletedAnnonce = await Annonce.findByIdAndDelete(req.params.id);
        if (!deletedAnnonce) {
            return res.status(404).json({ message: "Annonce not found" });
        }
        res.status(200).json({ message: 'Annonce deleted' }); // ou sans retour et 204
    } catch (error) {
        res.status(500).json({ message: "Failed to delete annonce", error: error.message });
    }
}