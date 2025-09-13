interface QuestionAnswerProps {
  question: string;
  answer: React.ReactNode;
}

export const QuestionAnswer = ({ question, answer }: QuestionAnswerProps) => {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="font-semibold text-foreground mb-2">{question}</h3>
      <div className="text-muted-foreground leading-relaxed">
        {answer}
      </div>
    </div>
  );
};