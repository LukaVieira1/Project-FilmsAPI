import { prisma } from "../helpers/utils.js";

export const create = async (req, reply) => {
  try {
    const { title, description, gender_id } = req.body;
    const movie = await prisma.movie.create({
      data: {
        title,
        description,
        gender_id: Number(gender_id),
        user_id: req.user.id,
      },
    });
    return reply.status(201).send(movie);
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};

export const del = async (req, reply) => {
  const { id } = req.params;
  try {
    const movie = await prisma.movie.delete({
      where: {
        id: Number(id),
      },
    });
    reply.status(200).send("Filme deletado com sucesso");
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};

export const getAll = async (req, reply) => {
  try {
    const movies = await prisma.movie.findMany();
    return reply.send({ data: { movies } });
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};

export const getByID = async (req, reply) => {
  const { id } = req.params;
  try {
    const movie = await prisma.movie.findMany({
      where: {
        id: Number(id),
      },
    });
    return reply.send({ data: { movie } });
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};

export const update = async (req, reply) => {
  const { id } = req.params;
  let data = {};

  if (req.body.title) {
    data.title = req.body.title;
  }

  if (req.body.description) {
    data.description = req.body.description;
  }

  if (req.body.grender_id) {
    data.grender_id = Number(req.body.grender_id);
  }

  try {
    const movie = await prisma.movie.update({
      where: { id: Number(id) },
      data: data,
    });
    return reply.status(200).send(movie);
  } catch (error) {
    reply.status(500).send(error);
  }

  try {
    const movie = await prisma.movie.update({
      where: { id: Number(id) },
      data: { title, description, gender_id: Number(gender_id) },
    });
    return reply.status(201).send(movie);
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};
