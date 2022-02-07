var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var UtilisateurSchema = new Schema({
  
  name : String,
  nbAppels : Number,
});

module.exports = mongoose.model('Utilisateur', UtilisateurSchema);