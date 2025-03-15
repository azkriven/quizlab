import { Button } from "@/components/ui/button";
import { Question } from "@/lib/quiz-schema";
import { CheckIcon, XIcon } from "lucide-react";

type Props = {
    question: Question;
    selectedAnswer: string | null;
    onSelectAnswer: (answer: string) => void;
    isSubmitted: boolean;
    showCorrectAnswer: boolean;
};
export default function QuestionCard({
    question,
    isSubmitted,
    onSelectAnswer,
    selectedAnswer,
    showCorrectAnswer,
}: Props) {
    const answerLabels = ["A", "B", "C", "D"];

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-semibold leading-tight">
                {question.question}
            </h2>
            <div className="grid grid-cols-1 gap-4">
                {question.options.map((option, index) => (
                    <Button
                        key={index}
                        variant={
                            selectedAnswer === answerLabels[index]
                                ? "secondary"
                                : "outline"
                        }
                        className={`h-auto py-6 px-4 justify-start text-left whitespace-normal ${
                            showCorrectAnswer &&
                            answerLabels[index] === question.answer
                                ? "bg-green-600 hover:bg-green-700"
                                : showCorrectAnswer &&
                                  selectedAnswer === answerLabels[index] &&
                                  selectedAnswer === question.answer
                                ? "bg-red-600 hover:bg-red-700"
                                : ""
                        }`}
                        onClick={() => onSelectAnswer(answerLabels[index])}
                    >
                        <span className="text-lg font-medium mr-4 shrink-0">
                            {answerLabels[index]}
                        </span>
                        <span className="flex-grow">{option}</span>
                        {(showCorrectAnswer &&
                            answerLabels[index] === question.answer) ||
                            (selectedAnswer === answerLabels[index] && (
                                <CheckIcon
                                    className="ml-2 shrink-0 text-white"
                                    size={20}
                                />
                            ))}
                        {showCorrectAnswer &&
                            selectedAnswer === answerLabels[index] &&
                            selectedAnswer !== question.answer && (
                                <XIcon
                                    className="ml-2 shrink-0 text-white"
                                    size={20}
                                />
                            )}
                    </Button>
                ))}
            </div>
        </div>
    );
}
