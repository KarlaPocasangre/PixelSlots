const { DataTypes } = require('sequelize');
const sequelize = require('./bd');

const User = sequelize.define('usuario', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },

     email: {
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false,
    },

     edad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            min:18
        }
    },

    usuario: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    pass: {
        type: DataTypes.TEXT,
        unique: true, 
        allowNull: false,
    },

    fichas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 5
    }

} , {

    timestamps: false,
    freezeTableName: true
});

module.exports = User;