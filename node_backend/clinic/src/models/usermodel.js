const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
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
            minLength: "5"
        }
    }
)

userSchema.statics.findUserByCredentials = async (userName, password) => {
    const user = await User.findOne({ userName });
    if (!user) { res.status(404).send('user not found') }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { res.status(404).send('unable to login') }
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