'use client'
import  {useEffect} from 'react'
import {useQuiz} from "@/context/QuizContext";
import { useRouter} from "next/navigation";

const QuizCheck = ({unit}:{unit:string}) => {
    const { progress } = useQuiz();
    const router = useRouter();
    const param= unit as keyof typeof progress;
    const activeUnit = progress===param;
    useEffect(() => {
        if (!activeUnit) {
            router.replace('/');

        }
    });

    // Render nothing or a loading state while redirecting
    return null;
};


export default QuizCheck
