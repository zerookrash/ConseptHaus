const express = require('express');
const router = express.Router();

const Calif = require('../models/calificaciones');

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await Calif.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/', async (req, res) => {
    const calificaciones = await Calif.find()
    res.render('index', {
        calificaciones
    });
});


router.post('/add', async (req, res) => {
    const calif = new Calif(req.body);
    await calif.save();
    res.redirect('/');
});

router.get('/turn/:id', async (req, res) => {
    const { id } = req.params;
    const califica = await Calif.findById(id);
    califica.status = !califica.status;
    await califica.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const editar = await Calif.findById(id);
    res.render('edit', {
        editar
    });
});



router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Calif.remove({_id: id});
    res.redirect('/');
});

module.exports = router;