import { addToFavorite, getFavorites } from "@/controllers/favorite.controller";
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
    case "POST":
      try {
        verify(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          authorization("user", "admin")(req, res, async (err) => {
            if (err) {
              return res.send({
                success: false,
                error: err.message,
              });
            }

            const result = await addToFavorite(req);
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

    case "GET":
      try {
        verify(req, res, async (err) => {
          if (err) {
            return res.send({
              success: false,
              error: err.message,
            });
          }

          authorization("user", "admin")(req, res, async (err) => {
            if (err) {
              return res.send({
                success: false,
                error: err.message,
              });
            }

            const result = await getFavorites(req);
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
