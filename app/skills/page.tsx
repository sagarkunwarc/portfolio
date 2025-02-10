import { Badge } from "../components/ui/badge";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#","SQL"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "Sass", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "Spring Boot", "Spring WebFlux", "Spring MVC"],
  },
  { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Oracle", "DB2", "Couchbase", "SQL Server"] },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI"],
  },
  { category: "Cloud", items: ["AWS", "Google Cloud", "Azure", "Heroku"] },
];

export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>
      <div className="space-y-6">
        {skills.map((skillCategory) => (
          <div key={skillCategory.category}>
            <h2 className="text-xl font-semibold mb-2">
              {skillCategory.category}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
