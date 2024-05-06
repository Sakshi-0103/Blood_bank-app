const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // Check if the authorization header exists -> gpt
    if (!req.headers["authorization"]) {
      return res.status(401).send({
        success: false,
        message: "Authorization header is missing",
      });
    }

    const token = req.headers["authorization"].split(" ")[1];

    // jo token header me he use pass krenge 
    //and then decrypt krenge by jwt scerret key
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Auth Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failed",
    });
  }
};