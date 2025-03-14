import { Question } from "@/lib/quiz-schema";

type QuizProps = {
    questions: Question[];
    clearPDF: () => void;
    title: string;
};

export default function Questions({
    questions,
    clearPDF,
    title = "Quiz",
}: QuizProps) {
    return <div>{JSON.stringify(questions)}</div>;
}
