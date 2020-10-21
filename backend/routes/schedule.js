const router = require("express").Router();
let Schedule = require("../models/schedule.model");

//get all plants
router.route("/").get((req, res) => {
    Schedule.find()
        .then((schedule) => res.json(schedule))
        .catch((err) => res.status(400).json("Error: " + err));
});

//add a plant - won't add
router.route("/add").post((req, res) => {

    const Taskid = req.body.Taskid;
    const Name = req.body.Name;
    const Datetimefrom = req.body.Datetimefrom;
    const Datetimeto = req.body.Datetimeto;
    const Empid = req.body.Empid;
    const State = req.body.State;

    const newSchedule = new Schedule({

        Taskid,
        Name,
        Datetimefrom,
        Datetimeto,
        Empid,
        State,

    });

    newSchedule
        .save()
        .then(() => res.json("Schedule added!"))
        .catch((err) => res.status(400).json("Error: " + err));
});

//update a plant

router.route('/update/:id').post((req, res) => {
    Schedule.findById(req.params.id)
        .then(schedule => {
            schedule.Taskid = req.body.Taskid;
            schedule.Name = req.body.Name;
            schedule.Datetimefrom = req.body.Datetimefrom;
            schedule.Datetimeto = req.body.Datetimeto;
            schedule.Empid = req.body.Empid;
            schedule.State = req.body.State;
            schedule.save()
                .then(() => res.json('schedule updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Schedule.findById(req.params.id)
        .then(schedule => res.json(schedule))
        .catch(err => res.status(400).json('Error: ' + err));
});




//delete a plant
router.route('/:id').delete((req, res) => {
    Schedule.findByIdAndDelete(req.params.id)
        .then(() => res.json('Schedule deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;