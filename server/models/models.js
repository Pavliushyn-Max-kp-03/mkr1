const sequelize = require('../db')
const {DataTypes} = require('sequelize')


const Student = sequelize.define('student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    nick: {type: DataTypes.STRING, unique: true, allowNull: false},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
})

module.exports = {
    Student
} 