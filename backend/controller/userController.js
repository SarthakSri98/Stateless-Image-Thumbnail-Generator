var jwt = require('jsonwebtoken');

 exports.login = function(req,res,next){
     const token = jwt.sign({ username: req.body.username }, 'the_good_the_bad_and_the_uchihas',
     {
       expiresIn:"1h",
     });
     res.status(200).json({
         token : token
     });
 }
