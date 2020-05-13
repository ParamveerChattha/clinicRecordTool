const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            unique: true
        },
        email: {
            type: String,
            validate(val) {
                if (!validator.isEmail(val)) { throw new Error('not a valid email') }
            }
        },
        password: {
            type: String,
            minLength: "5",
            maxLength: "255"
        },
        tokens: [{
            token:{
                type: String,
                required: true
            }
        }]
    }
)
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismyuser')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}
userSchema.statics.findUserByCredentials = async (userName, password) => {
    const user = await User.findOne({ userName });
    if (!user) { 
        throw new Error ('user not found')
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error (`unable to login`)
    }
    return user
}

userSchema.pre('save', async function (next) {
    const user = this

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next()
})

const User = mongoose.model('userDetail', userSchema)

module.exports = User