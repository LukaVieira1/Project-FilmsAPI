import { prisma } from "../helpers/utils.js";

export const create = async (req, reply) => {
  try {
    const { name } = req.body;
    const gender = await prisma.gender.create({
      data: {
        name,
      },
    });
    return reply.status(201).send(gender);
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};

export const del = async (req, reply) => {
  const { id } = req.params;
  try {
    const gender = await prisma.gender.delete({
      where: {
        id: Number(id),
      },
    });
    reply.status(200).send("Genero deletado com sucesso");
  } catch (error) {
    if (error.code === "P2025") {
      reply.status(500).send({ error: "Genenero não existe" });
    } else {
      reply.status(500).send({ error: "Deu problema mermão" });
    }
  }
};

export const getAll = async (req, reply) => {
  try {
    const genders = await prisma.gender.findMany();
    return reply.send({ data: { genders } });
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};

export const getByID = async (req, reply) => {
  const { id } = req.params;
  try {
    const gender = await prisma.gender.findMany({
      where: {
        id: Number(id),
      },
    });
    return reply.send({ data: { gender } });
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};

export const update = async (req, reply) => {
  const { id } = req.params;
  let data = {};

  if (req.body.name) {
    data.name = req.body.name;
  }

  try {
    const gender = await prisma.gender.update({
      where: { id: Number(id) },
      data: data,
    });
    return reply.status(200).send(gender);
  } catch (error) {
    reply.status(500).send(error);
  }

  try {
    const gender = await prisma.gender.update({
      where: { id: Number(id) },
      data: { name },
    });
    return reply.status(201).send(gender);
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};
