import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {

  const res = await prisma.user.create({
    data: {
        email: username,
        password,
        firstName,
        lastName
    }
  })

  console.log(res)
}

// insertUser('somdeb@gmail.com', 'hello', 'som', 'datt')

interface UpdateParams {
    firstName: string,
    lastName: string
}

async function updateUser (username: string, {
    firstName, lastName
}: UpdateParams) {
    
    const res = await prisma.user.update({
        where: {
            email: username,
        },
        data: {
            firstName,
            lastName
        }
    })

    console.log(res)
}

// updateUser("somdeb@gmail.com", {firstName: "somdeb", lastName: "datta"});

async function getUser(username: string) {
    const res = await prisma.user.findFirst({
        where:{
            email: username,
        },
    })

    console.log(res);
}

getUser("somdeb@gmail.com");