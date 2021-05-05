const db = require('../database/models')
const equipos = db.Equipo; 
const lineas = db.Linea;
const usuarios = db.Usuario;
const op = db.Sequelize.Op;
const url = require('url');



const database ={
    index: (req, res)=>{
        usuarios.findAll({
            include:[{association: 'linea'}],
            order:[['id', 'ASC']]
        })
        .then(resultados=>{
            return res.send(resultados)
        })
        return res.render('database/dbIndex')
    },
    add: (req, res)=>{
        res.render('database/dbAdd')
    },
    addUsuario: (req, res)=>{
        lineasPromise = lineas.findAll({ order:[['id', "ASC"]]})
        equiposPromise = equipos.findAll({ order:[['nombre', "ASC"]]})
        Promise.all([lineasPromise, equiposPromise])
            .then(([lineas, equipos])=>{
                return res.render('database/dbAddUsuario', {lineas:lineas, equipos:equipos})
            })
        //res.render('database/dbAddUsuario')
    },
    addEquipo: (req, res)=>{
        res.send('add equipo')
    },
    addTorneo: (req, res)=>{
        res.send('add torneo')
    }
}
module.exports=database