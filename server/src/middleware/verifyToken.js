import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  // console.log(authHeader);

  if (!authHeader) {
    res.status(404).json({ message: "No Token Provided" });
  }

  const token = authHeader.split(" ")[1];


  console.log("AUTH TRIGGER")
  //NEED TO ADD .ENV SECRET KEY INSTED OF MANUAL KEY
  jwt.verify(token, 'tempSecretKey', (err, decoded) => {
    if (err) {
      if (err.name === "JsonWebTokenError") {
        return res.status(403).json({ message: "Invalid token" });
      } else if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      } else {
        console.error("Error verifying token:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
    }
    req.user = decoded;
    console.log(req.user)
    next();

  });
};

export default verifyToken;
