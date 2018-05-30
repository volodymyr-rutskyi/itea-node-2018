const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    const UserType = sequelize.define('UserType', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    UserType.associate = function(models) {
        UserType.hasMany(models.User, {
            foreignKey: 'type_id',
            sourceKey: 'id'
        })
    };

    return UserType;
};