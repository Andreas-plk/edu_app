import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/app/generated/prisma';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId, answers } = body;

        if (!userId || typeof answers !== 'number') {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
        }

        await prisma.quizResult.create({
            data: {
                userId: userId,
                score:answers,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to save result' }, { status: 500 });
    }
}