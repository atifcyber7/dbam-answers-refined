import { AssignmentSection } from "@/components/AssignmentSection";
import { QuestionAnswer } from "@/components/QuestionAnswer";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-academic py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            DBAM Assignment 01 
          </h1>
          <p className="text-primary-foreground/90 text-xl">
            Introduction to Dynamic Web Content
          </p>
          <Badge variant="secondary" className="mt-4">
            Student Assignment
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        
        <AssignmentSection title="Task 1.1 - Web Development Fundamentals">
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
                  <li><code className="bg-muted px-2 py-1 rounded">&lt;nav&gt;</code> - for navigation sections</li>
                  <li><code className="bg-muted px-2 py-1 rounded">&lt;footer&gt;</code> - for page footers</li>
                  <li><code className="bg-muted px-2 py-1 rounded">&lt;video&gt;</code> - for video content</li>
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

        <AssignmentSection title="Task 1.2 - PHP Frameworks">
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
                <p className="mt-4 font-medium">These frameworks save development time and guide developers with established best practices.</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.3 - Library vs Framework">
          <QuestionAnswer
            question="What's the difference between a library and a framework?"
            answer={
              <div className="space-y-2">
                <p><strong>Library:</strong> A collection of functions and tools that you can call when needed in your code.</p>
                <p><strong>Framework:</strong> Provides the overall structure and architecture, and calls your code at specific points.</p>
                <p><strong>Key difference:</strong> Libraries are optional tools you use, while frameworks control the flow and structure of your entire program.</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.4 - PHP MVC Framework">
          <QuestionAnswer
            question="What is a PHP MVC framework?"
            answer={
              <div>
                <p className="mb-3">A PHP MVC framework follows the Model-View-Controller design pattern:</p>
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>Model:</strong> Handles data processing and database operations</li>
                  <li><strong>View:</strong> Manages the user interface and presentation</li>
                  <li><strong>Controller:</strong> Acts as a bridge, connecting models and views</li>
                </ul>
                <p className="mt-3"><strong>Examples:</strong> Laravel, CodeIgniter, CakePHP</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.5 - SQL vs NoSQL">
          <QuestionAnswer
            question="What are the key differences between SQL and NoSQL databases?"
            answer={
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-academic mb-2">SQL Databases:</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Use tables with rows and columns</li>
                    <li>Have fixed schema structure</li>
                    <li>Use SQL queries for data operations</li>
                    <li>Best for transactions and strong data consistency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-academic mb-2">NoSQL Databases:</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Use flexible schema (JSON, documents, graphs)</li>
                    <li>Better scalability for large datasets</li>
                    <li>Ideal for unstructured or semi-structured data</li>
                  </ul>
                </div>
                <p><strong>Examples:</strong> SQL - MySQL, Oracle | NoSQL - MongoDB, Cassandra</p>
              </div>
            }
          />
        </AssignmentSection>

        <AssignmentSection title="Task 1.6 - Web Hosting and Domains">
          <QuestionAnswer
            question="What is web hosting and what is a domain?"
            answer={
              <div className="space-y-3">
                <p><strong>Web hosting:</strong> A service that stores your website files on servers and makes them accessible on the internet.</p>
                <p><strong>Domain:</strong> Your website's unique address or name on the internet (like google.com).</p>
                <div>
                  <p className="font-medium mb-2">Popular hosting providers:</p>
                  <div className="flex flex-wrap gap-2">
                    {["HostGator", "Bluehost", "GoDaddy", "SiteGround", "Namecheap", "Hostinger"].map((provider) => (
                      <Badge key={provider} variant="outline">{provider}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            }
          />
        </AssignmentSection>

      </div>
    </div>
  );
};

export default Index;