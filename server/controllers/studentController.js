const {Student} = require('../models/models')

class StudentController{
    async getAll(req, res) {
        const students = await Student.findAll()
        return res.json(students)
    }
    async token(req, res) {

    }
    async create(req, res){
        const {nick, name, lastname, token} = req.body
        const student = await Student.create({nick, name, lastname, token})
        return res.json(student)
    }

}

module.exports = new StudentController()