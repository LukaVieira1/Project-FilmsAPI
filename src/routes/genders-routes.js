import * as GenderController from "../controllers/gender-controller.js";
import { validateRequest } from "../middleware/auth.js";

export default {
  Create: {
    method: "POST",
    url: "/genders",
    preHandler: [validateRequest],
    handler: GenderController.create,
  },
  Delete: {
    method: "DELETE",
    url: "/genders/:id",
    preHandler: [validateRequest],
    handler: GenderController.del,
  },
  GetAll: {
    method: "GET",
    url: "/genders",
    handler: GenderController.getAll,
  },
  GetByID: {
    method: "GET",
    url: "/genders/:id",
    handler: GenderController.getByID,
  },
  UpdateMovie: {
    method: "PATCH",
    url: "/genders/:id",
    preHandler: [validateRequest],
    handler: GenderController.update,
  },
};
