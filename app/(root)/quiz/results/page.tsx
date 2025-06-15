import {auth} from "@/auth";
import QuizSubmit from "@/components/QuizSubmit";
import {PrismaClient} from "@/app/generated/prisma"
import {Button} from "@/components/ui/button";
import Link from "next/link";

const prisma = new PrismaClient()
const Page = async () => {
    const session= await auth();
    if (!session) return null;
    const email =session?.user?.email;
    if (!email) return null;
    const user = await prisma.user.findFirst({
        select:{id:true},
        where:{email},});
    if (!user) return null;
    return (
        <div className="flex flex-col my-5 items-center justify-center">
            <QuizSubmit Id={user.id} />
            <Button className={"button-style my-5"} ><Link href="/">Πίσω στην αρχική</Link></Button>
        </div>
    )
}
export default Page
