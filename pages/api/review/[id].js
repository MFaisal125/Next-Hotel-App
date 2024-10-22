import {
  modifyReview,
  removeFromReview,
} from "@/controllers/review.controller";
import authorization from "@/middleware/authorization.middleware";
import verify from "@/middleware/verify.middleware";

export const config = {
  api: {
    bodyParser: true,
    externalResolver: true,
  },
};

export default async function handler(req, res) {
  switch (req.method) {
    case "PATCH":
      try {
        verify(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          authorization("admin", "user")(req, res, async (err) => {
            if (err) {
              return res.send({
                success: false,
                error: err.message,
              });
            }

            const result = await modifyReview(req);
            res.send(result);
          });
        });
      } catch (error) {
        res.send({
          success: false,
          message: error.message,
        });
      }
      break;

    case "DELETE":
      try {
        verify(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          authorization("admin", "user")(req, res, async (err) => {
            if (err) {
              return res.send({
                success: false,
                error: err.message,
              });
            }

            const result = await removeFromReview(req);
            res.send(result);
          });
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
