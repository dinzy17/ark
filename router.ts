import * as mongoose from'mongoose'
import * as passport from'passport'
import * as config from './config/globalConfig'
import * as express from'express'
import * as jwt from'jsonwebtoken'
const router = express.Router()
// const User from"../models/user")
// const Book from"../models/book")


router.post('/signup', function(req, res) {
  res.send("Signup")
})

router.post('/signin', function(req, res) {
  res.send("signin")
})

router.post('/book', passport.authenticate('jwt', { session: false}), function(req, res) {
  res.send("book")
})

export = router
