const controller = {};
const db = require('../bd/mysql');

controller.show = (req,res) => {
    db.query('select * from articulos', (err, articulos) => {
        res.render('articulos', {
            articulos: articulos
        });
    });
};

controller.create = (req,res) => {
    const datos = req.body;
    db.query('insert into articulos set ?', [datos], (err, productos) => {
        res.redirect('/productos');
    });
};

controller.delete = (req,res) => {
    const { id } = req.params;
    db.query('delete from articulos where id = ?', [id], (err, productos) => {
        res.redirect('/productos');
    });
};

module.exports = controller;