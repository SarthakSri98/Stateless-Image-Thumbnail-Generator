var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')
require('dotenv').load()



 exports.login = [
    
    //Validate user and password with express-validator
    body('username', 'Username required.').isLength({ min: 3 }).trim(),
    body('password', 'Password must atleast 6 characters.').isLength({ min:6 }),
    // Sanitize body with the wildcard.
    sanitizeBody('*'),

  (req,res)=>{
    const errors = validationResult(req)

    // Check if there were errors from the form.
    if (!errors.isEmpty()) {
      res.status(400).send({ errors: errors.array() })
    }
    else {
     username = req.body.username.toLowerCase();
     const token = jwt.sign({ username: req.body.username }, 'the_good_the_bad_and_the_uchihas',
     {
       expiresIn:"1h",
     });
     res.status(200).json({
         user : username,
         token : token,
         authorized : true
     });
    }
}

]
