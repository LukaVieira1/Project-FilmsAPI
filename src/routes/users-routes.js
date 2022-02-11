import { validateRequest } from "../middleware/auth.js";
import * as UserController from "../controllers/user-controller.js";

export default {
  getAllUsers: {
    method: "GET",
    url: "/users",
    handler: UserController.getALL,
  },
  getUserByID: {
    method: "GET",
    url: "/users/:id",
    handler: UserController.getByID,
  },
};
