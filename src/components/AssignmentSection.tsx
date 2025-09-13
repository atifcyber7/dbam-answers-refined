import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AssignmentSectionProps {
  title: string;
  children: React.ReactNode;
}

export const AssignmentSection = ({ title, children }: AssignmentSectionProps) => {
  return (
    <Card className="mb-8 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="bg-academic-light/30">
        <CardTitle className="text-academic font-semibold text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};