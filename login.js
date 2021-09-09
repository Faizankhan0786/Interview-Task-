var express = require('express');
var router = express.Router();
var upload=require("./multer")
/* GET home page. */
router.get('/logininterface', function(req, res, next) {
  res.render('login');
});


router.post(
"/logininterface", 
upload.single("picture"), 
function(req, res, next) {
  console.log("BODY", req.body);
  console.log("FILE:",  req.file);
 var name=req.body.firstname + " " + req.body.lastname;  
 pool.query(
   "insert into customer(firstname,lastname,emailid,gender,dob,mob,state,city,image,password,address)values(?,?,?,?,?,?,?,?,?,?,?)",
   [
     name,
     req.body.gender,
     req.body.birthdate,
     req.body.emailid,
     req.body.mob,
     req.body.address,
     req.body.state,
     req.body.city,
     req.file.originalname,
     req.body.password,
   ],
   function(error,result){
    if (error) {
       res.render('/login',{msg:'Server Error:Fail to Submit Record'});
     } else {
       res.render('login',{msg:'Record Submitted.....'});
     }
    }
   );
 

}
);

module.exports = router;
