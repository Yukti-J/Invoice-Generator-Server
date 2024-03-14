const User = require("../models/users")
const bcrypt = require("bcrypt")


const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) return res.status(400).json({ msg: "User does not exist. " });
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });
  
      delete user.password;
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log(err);
    }
  };

  module.exports = login;