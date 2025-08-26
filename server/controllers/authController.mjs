import jwt from "jsonwebtoken";

// Create token for user login
const createToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
};

// Route for user login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    if (!user.isActive) {
      return res.json({ success: false, message: "Account is deactivated" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // Update last login
      user.lastLogin = new Date();
      await user.save();

      const token = createToken(user);
      res.json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        message: "User logged in successfully",
      });
    } else {
      res.json({ success: false, message: "Invalid credentials, try again" });
    }
  } catch (error) {
    console.log("User Login Error", error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login (now uses role-based authentication)
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    if (user.role !== "admin") {
      return res.json({ success: false, message: "Admin access required" });
    }

    if (!user.isActive) {
      return res.json({ success: false, message: "Account is deactivated" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      // Update last login
      user.lastLogin = new Date();
      await user.save();

      const token = createToken(user);
      res.json({
        success: true,
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
        message: "Welcome admin",
      });
    } else {
      res.json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Admin Login Error", error);
    res.json({ success: false, message: error.message });
  }
};

export { createToken, userLogin, adminLogin };