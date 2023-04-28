const express = require("express");
const cvCtrl = require("../controllers/cv");
const router = express.Router();

const isAuth = require("../middelware/is-auth");

// récupérer la liste de toutes les personnes
router.get('/candidats', cvCtrl.getAllPersons);

//récupérer les infos sur une SEULE personne
router.get('/candidats/:id', cvCtrl.getPerson);

//création d'une nouvelle personne
router.post('/candidats', cvCtrl.createPerson);

//Update d'une personne
router.put('/candidats/:id', cvCtrl.updatePerson);

//suppression d'une personne
router.delete('/candidats/:id', cvCtrl.deletePerson);

module.exports = router;