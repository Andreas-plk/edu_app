import React from 'react'
import QuizForm from "@/components/Quiz_form";

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="heading">Σςςς... δεν πρεπει να σε ακουσει κανεις.</h1>
            <QuizForm category={"SECRET"} difficulty={"SECRET"}></QuizForm>


        </div>
    )
}
export default Page
