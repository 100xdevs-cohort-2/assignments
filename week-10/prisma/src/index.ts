import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
    select: {
      id: true,
      password: true,
    },
  });
  console.log("CREATE:", res);
}
// insertUser("admin1", "123456", "harkirat", "singh");

interface UpdateParams {
  firstName: string;
  lastName: string;
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams
) {
  const res = await prisma.user.update({
    where: {
      username,
    },
    data: {
      firstName,
      lastName,
    },
  });
  console.log("UPDATE:", res);
}
// updateUser("admin1", {
//   firstName: "new name",
//   lastName: "singh",
// });

async function getUser(username: string) {
  const res = await prisma.user.findFirst({
    where: {
      username,
    },
  });
  console.log("GET:", res);
}
// getUser("admin1");
