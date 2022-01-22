const express = require('express')

const router = express.Router()

router.get('/home',function (req,res,next) {
	res.json({title:'Home',desc:'Welcome to react-ssr-demo'})
})

router.get('/user',function (req,res,next) {
	res.json({ name: 'RewLuo', age: '24', id: '001' })
})

module.exports = router