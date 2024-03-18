import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = async (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // ms
    httpOnly: true, // prevent XSS attack
    sameSite: "strict", // CSRF attack prevention (https://owasp.org/www-community/SameSite)
    secure: process.env.NODE_ENV === "production" ? true : false, // cookie only works in https in production
  });
};

export default generateTokenAndSetCookie;
