import { prisma } from "../helpers/utils.js";

export const getALL = async (req, reply) => {
  try {
    let users = await prisma.user.findMany({
      select: { name: true, email: true },
    });
    return reply.send({ data: { users } });
  } catch (error) {
    console.error("users", error);
    reply.status(500).send({ error: `Cannot fetch users` });
  }
};

export const getByID = async (req, reply) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findMany({
      where: {
        id: Number(id),
      },
      select: { name: true, email: true },
    });
    return reply.send({ data: { user } });
  } catch (error) {
    reply.status(500).send({ error: "Deu problema mermão" });
  }
};
