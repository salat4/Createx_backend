const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const { SECRET_KEY } = process.env;

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      token:uuidv4(),
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
  }
});


router.post("/login", async (req, res) => {
  
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    !validPassword && res.status(400).json("wrong password")
    const payload = {
      id: user._id,
      name:user.name
    }
    const token = jwt.sign(payload,SECRET_KEY)
     res.json({
      status: 'success',
      code: 200,
      data: {
        token,
      },
    });
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;