//Access the router on Express 
const router = require('express').Router();

//Access the controllers
const controllerUtilisateur = require('../controllers/Utilisateur');

//CREATE
router.post("/utilisateur", (req, res) => {

    controllerUtilisateur.create(req, res);

});

//READ
router.get("/utilisateurs", (req, res) => {
    
    controllerUtilisateur.reads(req, res);

});

router.get("/utilisateur/:id", (req, res) => {

    controllerUtilisateur.read(req, res);

});

//UPDATE
router.put("/utilisateur/:id", (req, res) => {
    
    controllerUtilisateur.update(req, res);

});

//DELETE
router.delete("/utilisateur/:id", (req, res) => {
    
    controllerUtilisateur.delete(req, res);

});

module.exports = router;