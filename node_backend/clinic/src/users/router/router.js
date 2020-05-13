const express = require('express')
const router = express.Router();
const User = require('../../models/usermodel');
const auth = require('../../middleware/auth')


router.get('/admin',auth, async(req,res) =>{
    try{
        const user = await User.find({})
        res.send(user)
    }catch(e){return res.status(500).send(e)}
})
router.post('/createUser', async (req, res) => {

    const user = new User(req.body)
    try {
        await user.save()
        res.status(200).send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findUserByCredentials(req.body.userName, req.body.password)
        const token = await user.generateAuthToken()
        if (user) { res.send({user, token}) }
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

router.patch('/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['email', 'password', 'userName']
    const isValid = updates.every(item => allowedUpdates.includes(item))
    if (!isValid) { res.status(404).send('not a valid update') }

    try {
        const user = await User.findById(req.params.id)
        updates.forEach((update) => user[update] = req.body[update])
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        await user.save()
        res.status(200).send(user)

    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router