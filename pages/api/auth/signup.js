import { signUpUser } from "@/controllers/auth.controller";
import upload from "@/middleware/upload.middleware";

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export default function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        upload.single("avatar")(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              message: err.message,
            });
          }

          const result = await signUpUser(req);
          res.send(result);
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }
      break;

    default:
      res.send({
        success: false,
        message: "Method not allowed",
      });
      break;
  }
}
