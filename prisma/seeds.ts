import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function AddUserToDatabase() {
    const addUserOne = await prisma.user.upsert({
        where: { id: "cafa03b5-d2b5-47dd-a59f-173b2edecd14" },
        update: {},
        create: {
            id: "cafa03b5-d2b5-47dd-a59f-173b2edecd14",
            email: "Bot1@hotmail.com",
            name: "Bot 1",
            created_at: new Date("2022-11-01 21:01:43.215"),
            updated_at: new Date("2022-11-01 21:01:43.215"),
        },
    });

    const addUserTwo = await prisma.user.upsert({
        where: { id: "e9f032cc-2d1c-4d17-b12a-12c97f017396" },
        update: {},
        create: {
            id: "e9f032cc-2d1c-4d17-b12a-12c97f017396",
            email: "Bot2@hotmail.com",
            name: "Bot 2",
            created_at: new Date("2022-11-02 21:01:43.215"),
            updated_at: new Date("2022-11-02 21:01:43.215"),
        },
    });

    const addUserThree = await prisma.user.upsert({
        where: { id: "1e1d6279-c81c-49c2-b3d7-cbe5468b3f90" },
        update: {},
        create: {
            id: "1e1d6279-c81c-49c2-b3d7-cbe5468b3f90",
            email: "Bot3@hotmail.com",
            name: "Bot 3",
            created_at: new Date("2022-11-03 21:01:43.215"),
            updated_at: new Date("2022-11-03 21:01:43.215"),
        },
    });

    const addUserFour = await prisma.user.upsert({
        where: { id: "0c15fd15-bc1b-4874-abf4-76438ed60db8" },
        update: {},
        create: {
            id: "0c15fd15-bc1b-4874-abf4-76438ed60db8",
            email: "Bot4@hotmail.com",
            name: "Bot 4",
            created_at: new Date("2022-11-04 21:01:43.215"),
            updated_at: new Date("2022-11-04 21:01:43.215"),
        },
    });

    const addUserFive = await prisma.user.upsert({
        where: { id: "8a0fefac-c081-4d47-8652-c1c0bb1c6207" },
        update: {},
        create: {
            id: "8a0fefac-c081-4d47-8652-c1c0bb1c6207",
            email: "Bot5@hotmail.com",
            name: "Bot 5",
            created_at: new Date("2022-11-05 21:01:43.215"),
            updated_at: new Date("2022-11-05 21:01:43.215"),
        },
    });

    console.log({
        addUserOne,
        addUserTwo,
        addUserThree,
        addUserFour,
        addUserFive,
    });
}

AddUserToDatabase()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

async function AddBookToDatabase() {
    const addBookOne = await prisma.book.upsert({
        where: { id: "cafa03b5-d2b5-47dd-a59f-173b2edecd14" },
        update: {},
        create: {
            id: "cafa03b5-d2b5-47dd-a59f-173b2edecd14",
            title: "Neuroci??ncia para l??deres: Como liderar pessoas e empresas para o sucesso",
            description:
                "Aprenda a dominar e aperfei??oar os mecanismos do seu c??rebro com experts em neuroci??ncia e lideran??a e transforme seu comportamento despertando o melhor l??der que h?? em voc??.",
            bar_code: "6969",
        },
    });

    const addBookTwo = await prisma.book.upsert({
        where: { id: "e9f032cc-2d1c-4d17-b12a-12c97f017396" },
        update: {},
        create: {
            id: "e9f032cc-2d1c-4d17-b12a-12c97f017396",
            title: "Lideran??a T??xica: Voc?? ?? um l??der contagiante ou contagioso?",
            description:
                "Lideran??a T??xica ?? toda lideran??a capaz de gerar uma toxina que cause dor de qualquer tipo, seja ela f??sica ou psicol??gica. O que transforma dor emocional em toxicidade, por??m, ?? a resposta dada ?? dor de maneira nociva e n??o curativa.",
            bar_code: "8080",
        },
    });

    const addBookThree = await prisma.book.upsert({
        where: { id: "1e1d6279-c81c-49c2-b3d7-cbe5468b3f90" },
        update: {},
        create: {
            id: "1e1d6279-c81c-49c2-b3d7-cbe5468b3f90",
            title: "Cercado de Idiotas: Conhe??a os Quatro Tipos de Comportamento Humano",
            description:
                "Ap??s uma entrevista desastrosa com um empreendedor de sucesso ??? genuinamente convencido de estar ???cercado de idiotas??? ???, o especialista em comunica????o Thomas Erikson passou a se dedicar ?? miss??o de entender como as pessoas funcionam e por que temos dificuldade de desenvolver uma conex??o com certos tipos de indiv??duo.",
            bar_code: "7474",
        },
    });

    const addBookFour = await prisma.book.upsert({
        where: { id: "0c15fd15-bc1b-4874-abf4-76438ed60db8" },
        update: {},
        create: {
            id: "0c15fd15-bc1b-4874-abf4-76438ed60db8",
            title: "A Troca",
            description:
                "Leena Cotton tem 29 anos e sente que j?? n??o ?? mais a mesma. Eileen Cotton tem 79 e est?? em busca de um novo amor. Tudo de que neta e av?? precisam no momento ?? p??r em pr??tica uma mudan??a radical. Ent??o, para colocar suas respectivas vidas de volta nos trilhos, as duas t??m uma ideia inusitada: trocar de lugar uma com a outra",
            bar_code: "3333",
        },
    });

    const addBookFive = await prisma.book.upsert({
        where: { id: "8a0fefac-c081-4d47-8652-c1c0bb1c6207" },
        update: {},
        create: {
            id: "8a0fefac-c081-4d47-8652-c1c0bb1c6207",
            title: "Imperfeitos",
            description:
                "Olive se sente como a g??mea azarada da casa: dos acidentes estranhamente inexplic??veis ao fracasso na vida profissional e amorosa ??? nada d?? certo para ela. Por??m, parece que o jogo vira quando sua alergia a frutos do mar a protege de um desastre, j?? que todos os convidados da festa de casamento da irm?? sofrem com intoxica????o alimentar.",
            bar_code: "0303",
        },
    });

    console.log({
        addBookOne,
        addBookTwo,
        addBookThree,
        addBookFour,
        addBookFive,
    });
}

AddBookToDatabase()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
