const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient();

exports.getCreate = (req,res) => {
    res.render('create');
}
exports.postCreate = async(req,res) =>{
    try{
        const { name, program , yearlevel, gender, userlevel} = req.body;
        var student = await prisma.Student_Info.create({
            data:{
                name : name,
                program: program,
                yearlevel:yearlevel,
                gender: gender,
                userlevel: userlevel,
            }
        });
        console.log('Created user record successfully')
       } catch(error){
        console.error(error);
       }finally{
        await prisma.$disconnect();
       }
    res.redirect('create');
}
