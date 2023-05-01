const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient()

exports.getEdit = async(req,res) => {
  try {
    const student = await prisma.Student_Info.findUnique({ where: { id: req.params.id }});
    res.render('edit', { student });
  } catch (error) {
    console.log(error);
  }
}