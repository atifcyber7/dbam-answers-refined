import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface AssignmentSectionProps {
  title: string;
  children: React.ReactNode;
  delay?: string;
}

export const AssignmentSection = ({ title, children, delay = "0s" }: AssignmentSectionProps) => {
  return (
    <Card className="mb-8 border border-border/50 shadow-sm hover:shadow-md hover:shadow-academic/10 transition-all duration-300 animate-fade-in" 
          style={{ animationDelay: delay }}>
      <CardHeader className="bg-gradient-to-r from-academic-light/40 to-student-light/20 border-b border-academic/10">
        <CardTitle className="text-academic font-semibold text-xl flex items-center gap-2">
          <div className="w-2 h-2 bg-gradient-to-r from-academic to-student rounded-full animate-pulse"></div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};