require("dotenv").config();
const JWT_SECRET = process.env.JWT;
const jwt = require("jsonwebtoken");
console.log(JWT_SECRET);
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(403).json({ msg: "Authorization failed" });
  }
};

module.exports = { authMiddleware };
