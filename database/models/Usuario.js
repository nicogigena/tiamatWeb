module.exports = function(sequelize, dataTypes){


    let alias = "Usuario"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        nombre: {
            type : dataTypes.STRING
        },
        apellido: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
    }
    let config = {
        tableName : "usuarios",
        underscored: true,
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.Linea, {
        foreignKey: 'linea_id',
        as: 'linea'
        })
    }

    return Usuario


}