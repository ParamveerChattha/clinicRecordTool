const jwt = require('jsonwebtoken')
const User = require('../models/usermodel')

const auth = async (req, res, next) =>{
    try{
const token = req.header('Authorization').replace('Bearer ','');
const decoded = jwt.verify(token, 'thisismyuser')
const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

 if(!user) { throw new Error}
res.user = user
next()
    }catch(e){res.status(401).send('unable to authenticate')}
}

module.exports = auth