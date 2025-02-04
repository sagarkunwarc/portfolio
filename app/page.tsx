import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./components/project-card";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center space-y-8">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                Full Stack Developer
                <br />
                <span className="text-primary">
                  Building Digital Experiences
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I craft responsive websites and web applications that deliver
                exceptional user experiences. Specialized in React, Next.js, and
                modern web technologies.
              </p>
              <div className="flex justify-center gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
                <Button variant="outline">
                  <Github className="mr-2 h-4 w-4" />
                  View Projects
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Technical Skills
            </h2>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "REST APIs",
                "GraphQL",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-1 px-3"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="E-Commerce Platform"
                description="A full-stack e-commerce solution with real-time inventory management."
                tags={["Next.js", "TypeScript", "Prisma"]}
                image="/placeholder.svg?height=200&width=400"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management tool with real-time updates."
                tags={["React", "Node.js", "Socket.IO"]}
                image="/placeholder.svg?height=200&width=400"
              />
              <ProjectCard
                title="Analytics Dashboard"
                description="A responsive dashboard with interactive data visualizations."
                tags={["React", "D3.js", "Tailwind CSS"]}
                image="/placeholder.svg?height=200&width=400"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I&apos;m always interested in hearing about new projects and
              opportunities.
            </p>
            <div className="flex justify-center gap-4">
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </Button>
              <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
