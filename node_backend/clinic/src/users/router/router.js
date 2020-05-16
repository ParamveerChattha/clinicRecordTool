const express = require('express')
const router = express.Router();
const User = require('../../models/usermodel');
const auth = require('../../middleware/auth')

// login
router.get('/admin', auth, async (req, res) => {
    try {
        const user = await User.find({})
        res.send(user)
    } catch (e) { return res.status(500).send(e) }
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
        if (user) { res.send({ user, token }) }
    } catch (e) {
        res.status(500).send(e)
    }
})
//logging out
router.post('/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return (token.token !== req.token)
        })
        await req.user.save()
        res.send('logged out');
    } catch (e) { 
        console.log(e)
        res.status(500).send(e) }
})
//update
router.patch('/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['email', 'password', 'userName','temp']
    const isValid = updates.every(item => allowedUpdates.includes(item))
    if (!isValid) { res.status(404).send('not a valid update') }

    try {
        // const user = await User.findById(req.params.id)

        updates.forEach((update) => req.user[update] = req.body[update])
        // const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        await req.user.save()
        // await user.save()
        res.status(200).send(req.user)

    } catch (e) {
        console.log(e);
                res.status(500).send(e)
    }
})

module.exports = router