module.exports = function(sequelize, dataTypes){


    let alias = "Linea"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        nombre: {
            type : dataTypes.STRING
        }
    }
    let config = {
        tableName : "lineas",
        timestamps:false,
    }

    const Linea = sequelize.define(alias, cols, config);

    Linea.associate= function(models){
        Linea.hasMany(models.Usuario, {
            foreignKey:'linea_id',
            as:'usuario'
        })
    }
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

    return Linea


}