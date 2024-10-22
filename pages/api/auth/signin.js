import { signInUser } from "@/controllers/auth.controller";

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const result = await signInUser(req);
        res.send(result);
      } catch (error) {
        res.send({
          success: false,
          error: error.message,
        });
      }
      break;

    default:
      res.send({
        success: false,
        error: "Method not allowed",
      });
      break;
  }
}
