const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient();

exports.getEdit = async(req,res) => {
  try {
    const student = await prisma.Student_Info.findUnique({ where: { id: req.params.id }});
    res.render('edit', { student });
  } catch (error) {
    console.log(error);
  }
}
exports.postEdit = async (req, res) => {
  const { id,name, program, yearlevel, gender, userlevel } = req.body;
  try {
    const updatedStudent = await prisma.Student_Info.update({
      where: { id: Object(id) },
      data: { name, program, yearlevel, gender, userlevel },
    });
    res.redirect('/view');
  } catch (error) {
    console.log(error);
  }
};
