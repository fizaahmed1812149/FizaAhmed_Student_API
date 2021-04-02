const Student = require('../models/student.model');
//http://localhost:3000/products/test
exports.test =(req, res)=>{
    res.send('Hey! Greetings from the Test controller!')
};

exports.student_create=(req,res)=>{
let student= new Student({
name:req.body.name,
gender:req.body.gender,
city:req.body.city
});
student.save((err)=>{
    if(err) {
    return next(err);
    }
    res.send('Student Create Successfully')
});
}
exports.student_details=(req,res)=> {
    Student.findById(req.params.id,(err,student)=>{
        if (err) return next(err);
        res.send(student);
    })
}
exports.student_update=(req,res)=>{
    Student.findByIdAndUpdate(req.params.id,{$set: req.body},(err,student)=>{
        if (err) return next(err);
        res.send('Student updated.');
    });
}
exports.student_delete=(req,res)=>{
    Student.findByIdAndRemove(req.params.id,(err)=>{
        if (err) return next(err);
        res.send('Deleted.');
    })
}
exports.list=(req,res)=>{
Student.find((err,students)=>{
    if(!err){res.render('student',{page:'Student List', menuId:'list',students:students})}
    else{console.log('Error in retrieving students:' +JSON.stringify(err,undefined,2))}
})
    }