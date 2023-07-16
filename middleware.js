require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('./userModel');


const verifyToken =  (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(401).json({message: 'You are not authorized'});
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = User.findById(decoded.user_id);
        console.log(user);
    
        if (!user) {
          return res.status(401).json({ error: 'Invalid token.' });
        }
    
        req.user = user;
        next();
}
catch(err){
    console.log("hello");
    res.status(400).json({err});

}
}

module.exports = verifyToken;