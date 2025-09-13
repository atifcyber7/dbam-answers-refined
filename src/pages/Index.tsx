import { AssignmentSection } from "@/components/AssignmentSection";
import { QuestionAnswer } from "@/components/QuestionAnswer";
import { StudentCard } from "@/components/StudentCard";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary via-student to-academic py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            DBAM Assignment 01 
          </h1>
          <p className="text-primary-foreground/90 text-2xl md:text-3xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Introduction to Dynamic Web Content
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              <Award className="w-5 h-5 mr-2" />
              Academic Assignment
            </Badge>
            <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
              <Users className="w-5 h-5 mr-2" />
              Group Submission
            </Badge>
          </div>

          {/* Student Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <StudentCard 
              name="Maroof Raees" 
              rollNumber="215" 
              delay="0.6s"
            />
            <StudentCard 
              name="Rahim" 
              rollNumber="301" 
              delay="0.8s"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        
        <AssignmentSection title="Task 1.1 - Web Development Fundamentals" delay="0.1s">
          <QuestionAnswer
            question="Q1: What are the four main components of dynamic web development?"
            answer="HTML, CSS, JavaScript, and a server-side language like PHP with a database (MySQL)."
          />
          
          <QuestionAnswer
            question="Q2: What does HTML stand for?"
            answer="HTML stands for HyperText Markup Language."
          />
          
          <QuestionAnswer
            question="Q3: Why does MySQL have 'SQL' in its name?"
            answer="MySQL includes 'SQL' because it uses Structured Query Language for database commands and operations."
          />
          
          <QuestionAnswer
            question="Q4: What's the main difference between PHP and JavaScript?"
            answer="PHP runs on the server and handles data processing and backend operations, while JavaScript runs in the browser to make web pages interactive and dynamic."
          />
          
          <QuestionAnswer
            question="Q5: What does CSS stand for?"
            answer="CSS stands for Cascading Style Sheets."
          />
          
          <QuestionAnswer
            question="Q6: Name three HTML5 semantic elements."
            answer={
              <div>
                Three HTML5 semantic elements are:
                <ul className="list-disc ml-6 mt-2">
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">&lt;nav&gt;</code> - for navigation sections</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">&lt;footer&gt;</code> - for page footers</li>
                  <li><code className="bg-muted px-2 py-1 rounded text-sm">&lt;video&gt;</code> - for video content</li>
                </ul>
              </div>
            }
          />
          
          <QuestionAnswer
            question="Q7: How are bugs handled in open source software?"
            answer="In open source projects, bugs can be reported to the community through issue trackers or forums. Since the source code is publicly available, developers from the community can identify, fix, and contribute solutions back to the project."
          />
          
          <QuestionAnswer
            question="Q8: Self-evaluation of this assignment"
            answer="This assignment helped me understand how different web technologies work together to create dynamic websites. I learned the basics of PHP, MySQL, HTML, CSS, and JavaScript, and how they each play a role in web development. I now feel more confident about web development fundamentals and how these technologies connect."
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.2 - PHP Frameworks" delay="0.2s">
          <QuestionAnswer
            question="What is a framework?"
            answer="A framework is a ready-made structure that provides developers with pre-built tools and guidelines to build applications faster and more efficiently."
          />
          
          <QuestionAnswer
            question="Top 3 PHP frameworks and their benefits:"
            answer={
              <div>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-academic">Laravel:</strong> Offers modern development tools, built-in security features, and easy routing system.
                  </li>
                  <li>
                    <strong className="text-academic">CodeIgniter:</strong> Lightweight framework that's simple to learn and use for beginners.
                  </li>
                  <li>
                    <strong className="text-academic">Symfony:</strong> Powerful and robust framework ideal for large, complex projects.
                  </li>
                </ul>
                <p className="mt-4 font-medium text-student">These frameworks save development time and guide developers with established best practices.</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.3 - Library vs Framework" delay="0.3s">
          <QuestionAnswer
            question="What's the difference between a library and a framework?"
            answer={
              <div className="space-y-2">
                <p><strong className="text-academic">Library:</strong> A collection of functions and tools that you can call when needed in your code.</p>
                <p><strong className="text-student">Framework:</strong> Provides the overall structure and architecture, and calls your code at specific points.</p>
                <p><strong className="text-success">Key difference:</strong> Libraries are optional tools you use, while frameworks control the flow and structure of your entire program.</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.4 - PHP MVC Framework" delay="0.4s">
          <QuestionAnswer
            question="What is a PHP MVC framework?"
            answer={
              <div>
                <p className="mb-3">A PHP MVC framework follows the Model-View-Controller design pattern:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong className="text-academic">Model:</strong> Handles data processing and database operations</li>
                  <li><strong className="text-student">View:</strong> Manages the user interface and presentation</li>
                  <li><strong className="text-success">Controller:</strong> Acts as a bridge, connecting models and views</li>
                </ul>
                <p className="mt-3"><strong>Examples:</strong> Laravel, CodeIgniter, CakePHP</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.5 - SQL vs NoSQL" delay="0.5s">
          <QuestionAnswer
            question="What are the key differences between SQL and NoSQL databases?"
            answer={
              <div className="space-y-4">
                <div className="p-4 bg-academic-light/30 rounded-lg border-l-4 border-academic">
                  <h4 className="font-semibold text-academic mb-2">SQL Databases:</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Use tables with rows and columns</li>
                    <li>Have fixed schema structure</li>
                    <li>Use SQL queries for data operations</li>
                    <li>Best for transactions and strong data consistency</li>
                  </ul>
                </div>
                <div className="p-4 bg-student-light/30 rounded-lg border-l-4 border-student">
                  <h4 className="font-semibold text-student mb-2">NoSQL Databases:</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Use flexible schema (JSON, documents, graphs)</li>
                    <li>Better scalability for large datasets</li>
                    <li>Ideal for unstructured or semi-structured data</li>
                  </ul>
                </div>
                <p className="font-medium"><strong>Examples:</strong> SQL - MySQL, Oracle | NoSQL - MongoDB, Cassandra</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.6 - Web Hosting and Domains" delay="0.6s">
          <QuestionAnswer
            question="What is web hosting and what is a domain?"
            answer={
              <div className="space-y-4">
                <p><strong className="text-academic">Web hosting:</strong> A service that stores your website files on servers and makes them accessible on the internet.</p>
                <p><strong className="text-student">Domain:</strong> Your website's unique address or name on the internet (like google.com).</p>
                <div className="bg-gradient-to-r from-academic-light/20 to-student-light/20 p-4 rounded-lg">
                  <p className="font-medium mb-3 text-success">Popular hosting providers:</p>
                  <div className="flex flex-wrap gap-2">
                    {["HostGator", "Bluehost", "GoDaddy", "SiteGround", "Namecheap", "Hostinger"].map((provider, index) => (
                      <Badge key={provider} variant="outline" className="hover:bg-academic/10 transition-colors" style={{ animationDelay: `${index * 0.1}s` }}>
                        {provider}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
        </AssignmentSection>

        {/* Footer */}
        <div className="mt-16 text-center p-8 bg-gradient-to-r from-academic-light/20 to-student-light/20 rounded-2xl border border-academic/10">
          <div className="flex justify-center mb-4">
            <Award className="w-12 h-12 text-academic animate-pulse" />
          </div>
          <h3 className="text-2xl font-bold text-academic mb-2">Assignment Completed</h3>
          <p className="text-muted-foreground">
            Submitted by <strong className="text-student">Maroof Raees (215)</strong> and <strong className="text-student">Rahim (301)</strong>
          </p>
          <p className="text-sm text-muted-foreground mt-2">DBAM - Database Application Management</p>
        </div>

      </div>
    </div>
  );
};

export default Index;