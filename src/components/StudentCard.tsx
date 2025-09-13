import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, GraduationCap } from "lucide-react";

interface StudentCardProps {
  name: string;
  rollNumber: string;
  delay?: string;
}

export const StudentCard = ({ name, rollNumber, delay = "0s" }: StudentCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-student/10 to-academic/10 border-student/20 hover:shadow-student/20 hover:shadow-lg transition-all duration-300 animate-slide-up" 
          style={{ animationDelay: delay }}>
      <CardContent className="p-6 text-center">
        <div className="mb-4 flex justify-center">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-student to-academic rounded-full flex items-center justify-center animate-pulse-glow">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
              <GraduationCap className="w-4 h-4 text-success-foreground" />
            </div>
          </div>
        </div>
        <h3 className="text-xl font-bold text-student mb-2">{name}</h3>
        <Badge variant="outline" className="border-student text-student">
          Roll No: {rollNumber}
        </Badge>
      </CardContent>
    </Card>
  );
};