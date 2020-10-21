const router = require("express").Router();
let Plant = require("../models/plant.model");

//get all plants
router.route("/").get((req, res) => {
    Plant.find()
        .then((plant) => res.json(plant))
        .catch((err) => res.status(400).json("Error: " + err));
});

//dbname
router.route("/add").post((req, res) => {

    const plantId = req.body.plantId;
    const commanName = req.body.commanName;
    const botName = req.body.botName;
    const partused = req.body.partused;
    const usage = req.body.usage;
    const avaiplants = req.body.avaiplants;


    const newPlant = new Plant({
        plantId,
        commanName,
        botName,
        partused,
        usage,
        avaiplants,
    });

    newPlant
        .save()
        .then(() => res.json("Plant added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//update a plant


router.route('/update/:id').post((req, res) => {
    Plant.findById(req.params.id)
        .then(plant => {
            plant.plantId = req.body.plantId;
            plant.commanName = req.body.commanName;
            plant.botName = req.body.botName;
            plant.partused = req.body.partused;
            plant.usage = req.body.usage;
            plant.avaiplants = req.body.avaiplants;
            plant.save()
                .then(() => res.json('palnt updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Plant.findById(req.params.id)
        .then(plant => res.json(plant))
        .catch(err => res.status(400).json('Error: ' + err));
});


//delete a plant
router.route('/:id').delete((req, res) => {
    Plant.findByIdAndDelete(req.params.id)
        .then(() => res.json('Plant deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;