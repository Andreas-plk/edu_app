import React from 'react'
import {auth} from "@/auth";
import {PrismaClient} from "@/app/generated/prisma"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {redirect} from "next/navigation";


const prisma=new PrismaClient();

const Page = async () => {
    const session = await auth();
    if (!session) redirect("/");
    const email =session?.user?.email;
    if (!email) return null;
    const user = await prisma.user.findFirst({
        select:{id:true},
        where:{email},});
    if (!user) return null;
    const results = await prisma.quizResult.findMany({
        where:{userId:user.id}
    })
    const bestResult = await prisma.quizResult.findFirst({
        select:{score: true},
        where: { userId: user.id },
        orderBy: { score: 'desc' },
    });
    const maxScore=bestResult?.score||null;
    const score = (answers:number) => {
        if(answers >= 100) return answers - 100;
        if (answers >= 36) return answers - 36;
        if (answers >= 18) return answers - 18;
        return answers;}
    const diff = (answers:number) => {
        if(answers >= 100) return "SECRET";
        if (answers >= 36) return "HARD";
        if (answers >= 18) return "MEDIUM";
        return "EASY";}
    if (results.length === 0) return <div className="flex flex-col items-center justify-center text-5xl  font-bold"><h2 className="my-10">Δεν υπάρχουν ακόμα προσπάθειες</h2>
        <Button className="button-style"><Link href="/quiz/section-1/info">ΑΣ ΞΕΚΙΝΗΣΕΙ ΤΟ ΤΑΞΙΔΙ</Link></Button>

    </div>;
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="font-extrabold underline text-3xl my-4 text-shadow-lg/20">ΑΠΟΤΕΛEΣΜΑΤΑ</h2>
            {maxScore && maxScore>=51?(
                <p className="flex flex-col text-center items-center justify-center">Ωπ.. σαν να τα πηγαίνεις πολύ καλά.<br/> Φαίνεται πως ξεκλύδωσες ένα μυστικό Quiz.<br/> Τολμάς να το δοκιμάσεις;
                <Button className="button-style my-5"><Link href="/quiz/secretQuiz">Μυστικό Quiz</Link></Button></p>)

                :<></>}
            <ul className="border bg-green-200 px-10 py-5 font-bold rounded-md shadow-2xl  text-lg">
            {results.map((r) => (
                    <li key={r.id}>
                        Αποτέλεσμα {score(r.score)} {r.score<100 ? (<span>/15</span>) :(<span>/6</span>)} σε τέστ δυσκολίας {diff(r.score)} ({r.createdAt.toLocaleDateString()})
                        <hr className="border-black border-2 rounded-b-3xl opacity-70"/>
                    </li>


            ))}
                </ul>


            <Button className={"button-style my-5"} ><Link href="/">Πίσω στην αρχική</Link></Button>
        </div>
    )
}
export default Page
