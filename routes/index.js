var express = require('express');
var router = express.Router();
const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient

router.get('/', async function(req, res) {
  var students = await prisma.Student_Info.findMany()
  res.render('index', { title: 'Express', students: students });
});

module.exports = router;
