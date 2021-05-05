module.exports = function(sequelize, dataTypes){


    let alias = "Equipo"
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        nombre: {
            type : dataTypes.STRING
        },
        activo: {
        
            type : dataTypes.INTEGER
        },
        ceo_id:{
            type: dataTypes.INTEGER
        }
    }
    let config = {
        tableName : "equipos",
        underscored: true,
    }

    const Equipo = sequelize.define(alias, cols, config);

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

    return Equipo


}