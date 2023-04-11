const {Student} = require('../models/models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
        const student = await Student.findOne({ where: {nick} });
        if (!student) {
            res.sendStatus(404);
            return;
          }
        const token = jwt.sign({nick}, process.env.SECRET_KEY, {expiresIn: '24h'})
        return res.json({token})
    }

    async create(req, res){
      const { nick } = req.params;
      const student = await Student.findOne({ where: {nick} });
      const authHeader = req.headers.authorization;
      const [scheme, token] = authHeader.split(' ');
      const decoded = jwt.verify(token, process.env.SECRET_KEY)
      if(decoded.nick != nick) {
        return res.status(401).json({message: "Неправильний нік"})
      }
      if(student){
        const {nick, name, lastname} = req.body
        const newStudent = await Student.create({nick, name, lastname})
        return res.json(newStudent)
      }
    }

}

module.exports = new StudentController()