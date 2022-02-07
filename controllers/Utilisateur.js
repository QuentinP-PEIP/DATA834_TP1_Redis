function createUtilisateur(req, res) {
    let Utilisateur = require('../models/Utilisateur');
    let newUtilisateur = Utilisateur ({
        name: req.body.name,
        nbAppel : req.body.nbAppel,
    });
  
    newUtilisateur.save()
    .then((savedUtilisateur) => {

        //send back the created Todo
        res.json(savedUtilisateur);
            
    }, (err) => {
        res.status(400).json(err)
    });

}

function readUtilisateurs(req, res) {

    let Utilisateur = require("../models/Utilisateur");

    Utilisateur.find({name : req.params.id})
    .then((Utilisateurs) => {
        res.status(200).json(Utilisateurs);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function readUtilisateur(req, res) {

    let Utilisateur = require("../models/Utilisateur");

    Utilisateur.findById({_id : req.params.id})
    .then((Utilisateur) => {
        res.status(200).json(Utilisateur);
    }, (err) => {
        res.status(500).json(err);
    });
 }

function updateUtilisateur(req, res) {

    let Utilisateur = require("../models/Utilisateur");

    Utilisateur.findByIdAndUpdate({_id: req.params.id}, 
        {name : req.body.name, 
        nbAppel : req.body.nbAppel,}, 
        {new : true})
    .then((updatedUtilisateur) => {
        res.status(200).json(updatedUtilisateur);
    }, (err) => {
        res.status(500).json(err);
    });
}

function deleteUtilisateur(req, res) {

    let Utilisateur = require("../models/Utilisateur");

    Utilisateur.findOneAndRemove({_id : req.params.id})
    .then((deletedUtilisateur) => {
        res.status(200).json(deletedUtilisateur);
    }, (err) => {
        res.status(500).json(err);
    });
 }


module.exports.create = createUtilisateur;
module.exports.reads = readUtilisateurs;
module.exports.read = readUtilisateur;
module.exports.delete = deleteUtilisateur;
module.exports.update = updateUtilisateur;

