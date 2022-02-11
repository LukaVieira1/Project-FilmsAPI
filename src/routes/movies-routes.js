import * as MovieController from "../controllers/movie-controller.js";
import { validateRequest } from "../middleware/auth.js";

export default {
  Create: {
    method: "POST",
    url: "/movies",
    preHandler: [validateRequest],
    handler: MovieController.create,
  },
  Delete: {
    method: "DELETE",
    url: "/movies/:id",
    preHandler: [validateRequest],
    handler: MovieController.del,
  },
  GetAll: {
    method: "GET",
    url: "/movies",
    handler: MovieController.getAll,
  },
  GetByID: {
    method: "GET",
    url: "/movies/:id",
    handler: MovieController.getByID,
  },
  UpdateMovie: {
    method: "PATCH",
    url: "/movies/:id",
    preHandler: [validateRequest],
    handler: MovieController.update,
  },
};
