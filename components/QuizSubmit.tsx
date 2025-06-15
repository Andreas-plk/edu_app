'use client';
import React, {useEffect} from 'react'
import {useQuiz} from "@/context/QuizContext"






const QuizSubmit = ({Id}:{Id:string}) => {
    const {answers} = useQuiz()
    const score = () => {
        if(answers>=100) return answers-100;
        if (answers >= 36) return answers - 36;
        if (answers >= 18) return answers - 18;
        return answers;
    };
    useEffect(() => {
        const sendQuizResult = async () => {
            const userId = Id;
            if (userId !== undefined) {
                await fetch('/api/saveResults', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ userId, answers }),
                });
                console.log("saving quiz result");
            }
        };
        sendQuizResult();

    }, [answers,Id]);
    return (
        <div className="flex items-center justify-center text-3xl">Τελικό αποτέλεσμα: {score()} {answers<100 ? (<span>/15</span>) :(<span>/6</span>)}</div>


    )
}
export default QuizSubmit
