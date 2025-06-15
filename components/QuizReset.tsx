"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useQuiz } from "@/context/QuizContext"; 

const QuizReset = () => {
    const pathname = usePathname();
    const { reset } = useQuiz();

    useEffect(() => {
        if (pathname === "/") {
            reset();
        }
    }, [pathname]);

    return null; // it's just a logic component
};

export default QuizReset;