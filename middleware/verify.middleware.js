import jwt from "jsonwebtoken";
import { promisify } from "util";

export default async function verify(req, res, next) {
  try {
    const token = req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.send({
        acknowledgement: false,
        message: "Unauthorized, No token found",
      });
    }

    const decoded = await promisify(jwt.verify)(
      token,
      process.env.TOKEN_SECRET
    );
    req.user = decoded;

    next();
  } catch (error) {
    return res.send({
      acknowledgement: false,
      message: "Unauthorized, Invalid token",
    });
  }
}
