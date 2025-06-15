import {Difficulty, PrismaClient, Question} from '@/app/generated/prisma'
import {NextResponse} from "next/server";

const prisma = new PrismaClient();
function shuffleArray<T>(array: T[]): T[] {
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}

export async function GET(req:Request)
{
    const {searchParams} = new URL(req.url);
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty')||"";

    if (!category || !["EASY",'MEDIUM','HARD'].includes(difficulty)) {

        return NextResponse.json({ error: 'Invalid query' }, { status: 400 });
    }
    const getRandomQuestions = async (level: Difficulty, take: number) => {
        const all = await prisma.question.findMany({
            where: {
                category: { name: category },
                difficulty: level,
            },
            include: { options: true },
        });

        return shuffleArray(all).slice(0, take);
    };

    let questions: Question[] = [];

    if (difficulty === "EASY") {
        questions = await getRandomQuestions('EASY', 5);
    } else if (difficulty === "MEDIUM") {
        const easy = await getRandomQuestions('EASY', 2);
        const medium = await getRandomQuestions('MEDIUM', 2);
        const hard = await getRandomQuestions('HARD', 1);
        questions = [...easy, ...medium,...hard];
    } else if (difficulty === "HARD") {
        const medium = await getRandomQuestions('MEDIUM', 3);
        const hard = await getRandomQuestions('HARD', 2);
        questions = [...medium, ...hard];
    }

    // Τυχαία τελική σειρά
    return NextResponse.json(shuffleArray(questions));
}