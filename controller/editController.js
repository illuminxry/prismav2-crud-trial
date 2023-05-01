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
  const { name, program, yearlevel, gender, userlevel } = req.body;
  const {id} = req.params;
  try {
    const updatedStudent = await prisma.Student_Info.update({
      where: { id : id},
      data: { name, program, yearlevel, gender, userlevel },
    });
    const student = await prisma.Student_Info.findUnique({ where: { id: id }});
    // res.redirect('view', { student });
    res.redirect('/view/' + id);
  } catch (error) {
    console.log(error);
  }
};
