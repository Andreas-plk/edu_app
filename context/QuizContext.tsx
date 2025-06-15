"use client";

import React, { createContext, useContext, useState } from "react";

type QuizProgress = 'unit1' | 'unit2' | 'unit3' | null;


type QuizContextType = {
    progress: QuizProgress;
    answers: number;
    setAnswers: (answers: number) => void;
    setProgress: (progress: QuizProgress) => void;
    reset: () => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
    const [progress, setProgress] = useState<QuizProgress>('unit1');

    const [answers, setAnswers] = useState(0);

    const addAnswers = (count: number) => {
        setAnswers((prev) => prev + count);
    };





    const reset = () => {
        setProgress("unit1");
        setAnswers(0);
    };

    return (
        <QuizContext.Provider
            value={{ progress, answers, setAnswers:addAnswers , setProgress, reset }}
        >
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) throw new Error("useQuiz must be used within a QuizProvider");
    return context;
};
