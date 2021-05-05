module.exports = function(sequelize, dataTypes){


    let alias = "Pais"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        iso: {
            type : dataTypes.STRING
        },
        name: {
        
            type : dataTypes.STRING
        },
        nicename: {
        
            type : dataTypes.STRING
        },
        iso3: {
        
            type : dataTypes.STRING
        },
        numcode: {
        
            type : dataTypes.INTEGER
        },
        phonecode: {
        
            type : dataTypes.INTEGER
        },
    }
    let config = {
        tableName : "paises",
        timestamps: false
    }

    const Pais = sequelize.define(alias, cols, config);

   /* Comentario.associate = function(models){
        Comentario.belongsTo(models.Postear, {
        foreignKey: 'post_id',
        as: 'postear'
        }),
        Comentario.belongsTo(models.Usuario, {
            foreignKey: 'usuario_id',
            as: 'usuario'
        })
        
    }   */

    return Pais


}