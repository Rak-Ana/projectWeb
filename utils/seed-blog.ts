import prisma from "@/utils/db"
// const prisma = require("@/utils/db")
import hashPassword from "./hashPassword"
// const hashPassword = require("./hashPassword")

export default async function seed() {
    const password = await hashPassword('password');

    const user1 = await prisma.user.upsert({
        where: { email: 'warodom@prisma.io' },
        update: {}, 
        create: {
            email: 'warodom@prisma.io',
            name: 'wwarodom',
            password,
        },
    });

    const user2 = await prisma.user.upsert({
        where: { email: 'ariadne@prisma.io' },
        update: {},
        create: {
            email: 'ariadne@prisma.io',
            name: 'Ariadne',
            password,
            posts: {
                create: [
                    {
                        subject: 'Subject',
                        favorite: 0,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScCHzUKwiWc03RWlEyXrmGCiYVxFKzxbWSbg&s",
                        detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt, vel eum!',
                        like: 0,
                    },
                    {
                        subject: 'Subject 2',
                        favorite: 0,
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffaHM6qE8GHVWbD0kPx2Pna6xxKody2MdGA&s",
                        detail: 'Lorem ipsum dol epturi! Fugit numquam, veritatis cumque nobis minima at. Deserunt 2',
                        like: 0,
                    },
                ],
            },
        },
    });

    console.log(user1);
    console.log(user2);
}
