import React from 'react'
import Navbar from "@/components/Navbar";
import QuizReset from "@/components/QuizReset";
import {QuizProvider} from "@/context/QuizContext";



const Layout = ({children}: { children: React.ReactNode }) => {
    return (<>
        <Navbar/>
        <main >
            <QuizProvider>
            <QuizReset/>
            {children}
        </QuizProvider></main>
    </>)
}
export default Layout
