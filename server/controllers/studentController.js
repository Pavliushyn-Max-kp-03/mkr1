const {Student} = require('../models/models')

class StudentController{
    async getAll(req, res) {
        try {
            const students = await Student.findAll();
            return res.json(students);
          } catch (err) {
            res.status(500).send(err.message);
          }
    }
    async token(req, res) {
        const { nick } = req.params;
    }
    async create(req, res){
        const {nick, name, lastname, token} = req.body
        const student = await Student.create({nick, name, lastname, token})
        return res.json(student)
    }

}

module.exports = new StudentController()