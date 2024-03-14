const bcrypt = require("bcrypt")
const User = require("../models/users")

const register = async (req, res) => {
    try {
      const {
        name,
        email,
        password
      } = req.body;
  
      const user = await User.findOne({ email });
      if (user) return res.status(403).json({ msg: "User already exists" });

      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
  
      const newUser = new User({
        name,
        email,
        password: passwordHash
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  module.exports = register;
  