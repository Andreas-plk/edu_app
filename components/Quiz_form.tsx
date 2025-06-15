'use client'

import { useEffect, useState } from 'react';
import React from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {Button} from "@/components/ui/button";
import { useForm } from "react-hook-form"
import { Loader } from "lucide-react";


import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {useQuiz} from "@/context/QuizContext";
import {useRouter} from "next/navigation";
import QuizCheck from "@/components/QuizCheck";


type Option = {
    id: number;
    text: string;
    isCorrect: boolean;
};

type Question = {
    id: number;
    text: string;
    difficulty: string;
    options: Option[];
    imageUrl: string;
}




const  QuizForm = ({category,difficulty}:{category:string, difficulty:string}) => {

    const [isLoading, setIsLoading] = useState(true);
    const bias=(difficulty:string) => {
        if (difficulty==='EASY') {
            return 0;
        } else if (difficulty === 'MEDIUM') {
            return 6;
        } else if (difficulty === 'HARD') {
            return 12;
        }
        return 0;
    }

    useEffect(() => {
        setIsLoading(true);
        const unit=findUnit(category);
        <QuizCheck unit={unit}/>
        fetch(`/api/questions?category=${category}&difficulty=${difficulty}`)
            .then(res => res.json())
            .then(data=>{
                setQuestions(data);
                const defaults: Record<string, string> = {};
                const schemaShape: Record<string, z.ZodTypeAny> = {};
                data.forEach((q: Question) => {
                    defaults[q.id] = '';
                    schemaShape[q.id]=z.string().min(1,"Απάντησε στην ερώτηση")
                });
                setFormSchema(z.object(schemaShape));
                form.reset(defaults);

            }).finally(()=>{
                setIsLoading(false);
        });

    },[category, difficulty]);

    const [formSchema, setFormSchema] = useState<z.ZodObject<any> | null>(null);
    const [questions, setQuestions] = useState<Question[]>([]);
    const form = useForm({
        resolver: formSchema ? zodResolver(formSchema) : undefined,
        defaultValues: {},
    });


    const { setAnswers, setProgress } = useQuiz();
    const router = useRouter();
    const nextPage = (category:string) => {
        switch (category) {
            case "Ζάππειο":
                setProgress("unit2");
                setTimeout(() => {
                    router.push("/quiz/section-2/info");
                }, 0);
                break;
            case "Εθνικός Κήπος":
                setProgress("unit3");
                setTimeout(() => {
                    router.push("/quiz/section-3/info");
                }, 0);
                break
            case "Καλλιμάρμαρο":
                router.push("/quiz/results");
        }
    }
    const findUnit=(category:string) => {
        switch (category) {case "Ζάππειο":
            return "unit1";
            case "Εθνικός Κήπος":
                return "unit2";
            case "Καλλιμάρμαρο":
                return "unit3";
        }
        return "";
    }
    const onSubmit = (values:Record<string, string>) => {

        const score = questions.reduce((acc, q) => {
            const selected = values[q.id];
            const correct = q.options.find((o) => o.isCorrect)?.id.toString();
            return acc + (selected === correct ? 1 : 0);
        }, 0);

        setAnswers(score+bias(difficulty));
        nextPage(category);

    };
    if (isLoading || !formSchema) {
        return (
            <div className="flex justify-center items-center gap-2 py-10">
                <Loader className="h-6 w-6 animate-spin text-emerald-600" />
                <span className="text-emerald-700 text-lg">Φόρτωση ερωτήσεων...</span>
            </div>
        );
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-5 mb-10 border-2 border-green-300 rounded-xl bg-emerald-50 w-3/5">
                {questions.map((question) => (
                    <FormField
                        key={question.id}
                        control={form.control}
                        name={`${question.id}`}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-lg">{question.text}</FormLabel>
                                {question.imageUrl?<img className="rounded-2xl shadow-xl my-4" src={question.imageUrl} alt={`${question.id}`} /> : <></>}
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="space-y-2"
                                    >
                                        {question.options.map((option) => (
                                            <FormItem
                                                key={option.id}
                                                className="flex items-center space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <RadioGroupItem value={option.id.toString()} />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {option.text}
                                                </FormLabel>
                                            </FormItem>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                ))}

                <Button className="cursor-pointer w-full" type="submit">Υποβολή</Button>
            </form>
        </Form>
    )
}
export default QuizForm
