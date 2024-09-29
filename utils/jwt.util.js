import jwt from "jsonwebtoken";

export default function generateAccessToken({ _id, name, email, role }) {
  const token = jwt.sign(
    {
      _id,
      name,
      email,
      role,
    },
    process.env.TOKEN_SECRET
  );

  return token;
}
