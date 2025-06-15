import QuizForm from "@/components/Quiz_form";
import React from "react";
import {auth} from "@/auth";
import prisma from "@/prisma";


const Page = async () => {
    const session= await auth();
    if(!session) return <div>NOt authenticated 404 your brain</div>
    if (!session?.user?.email) return null;
    const userEmail = session?.user?.email;
    const user = await prisma.user.findUnique({
        where: { email: userEmail },
        select: { id: true }, // or include more fields if needed
    });

    const userId = user?.id;
    const bestResult = await prisma.quizResult.findFirst({
        select:{score: true},
        where: { userId: userId },
        orderBy: { score: 'desc' }, // highest score first
    });
    const bestScore= bestResult?.score||null;
    const selectDifficulty=(bestScore:number|null)=>{
        if(bestScore==null){
            return "EASY";
        }
        else if(bestScore>=31){
            return 'HARD'
        }else if(bestScore>=13){
            return "MEDIUM"
        }else{
            return 'EASY'
        }
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <h1 className="heading">Quiz Ενότητας 2</h1>
                <QuizForm category={"Εθνικός Κήπος"} difficulty={selectDifficulty(bestScore)}></QuizForm>


            </div>


        </>
    )
}
export default Page
