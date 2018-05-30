const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        paranoid: false,
        freezeTableName: true,
        tableName: 'User',
        timestamps: false
    });

    User.associate = function(models) {
        User.belongsTo(models.UserType, {
            foreignKey: 'type_id',
            targetKey: 'id'
        });
    };


    return User;
};