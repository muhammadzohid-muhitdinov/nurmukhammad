import { BarChart3, Brain, ServerCog, Cloud, Clock } from "lucide-react"
import { Icon } from "@iconify/react"

const ICON_MAP: Record<string, string> = {
  Python: "simple-icons:python",
  FastAPI: "simple-icons:fastapi",
  "Node.js": "simple-icons:nodedotjs",
  Django: "simple-icons:django",
  Flask: "simple-icons:flask",
  "Spring Boot": "simple-icons:springboot",

  SQL: "mdi:database-outline",
  "Power BI": "simple-icons:powerbi",
  Pandas: "simple-icons:pandas",
  NumPy: "simple-icons:numpy",
  Tableau: "simple-icons:tableau",
  R: "simple-icons:r",

  HuggingFace: "simple-icons:huggingface",
  LangChain: "simple-icons:langchain",
  "OpenAI SDK": "simple-icons:openai",
  "Google AI": "simple-icons:googlecloud",
  "Agents SDK": "tabler:robot",
  "Arize AI": "tabler:activity",

  "Microsoft Azure": "simple-icons:microsoftazure",
  Kubernetes: "simple-icons:kubernetes",
  Docker: "simple-icons:docker",
  Redis: "simple-icons:redis",
  MongoDB: "simple-icons:mongodb",
  "Linux Systems": "simple-icons:linux",
}

const iconId = (name: string) => ICON_MAP[name] ?? "tabler:box"

// faqat sonni olish uchun helper
const getYears = (exp: string) => {
  const match = exp.match(/\d+/)
  return match ? parseInt(match[0], 10) : 0
}

const skillCategories = [
  {
    title: "Backend Development",
    icon: (
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
        <ServerCog className="h-5 w-5" />
      </div>
    ),
    skills: [
      { name: "Python", experience: "4y" },
      { name: "FastAPI", experience: "2y" },
      { name: "Django", experience: "3y" },
      { name: "Flask", experience: "3y" },
      { name: "Spring Boot", experience: "1y" },
    ],
  },
  {
    title: "Data Analysis",
    icon: (
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
        <BarChart3 className="h-5 w-5" />
      </div>
    ),
    skills: [
      { name: "SQL", experience: "4y" },
      { name: "Power BI", experience: "2y" },
      { name: "Pandas", experience: "3y" },
      { name: "NumPy", experience: "3y" },
      { name: "Tableau", experience: "2y" },
      { name: "R", experience: "1y" },
    ],
  },
  {
    title: "AI/ML Technologies",
    icon: (
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
        <Brain className="h-5 w-5" />
      </div>
    ),
    skills: [
      { name: "HuggingFace", experience: "2y" },
      { name: "LangChain", experience: "1y" },
      { name: "OpenAI SDK", experience: "2y" },
      { name: "Google AI", experience: "2y" },
      { name: "Agents SDK", experience: "1y" },
      { name: "Arize AI", experience: "1y" },
    ],
  },
  {
    title: "Cloud & Databases",
    icon: (
      <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
        <Cloud className="h-5 w-5" />
      </div>
    ),
    skills: [
      { name: "Microsoft Azure", experience: "2y" },
      { name: "Kubernetes", experience: "1y" },
      { name: "Docker", experience: "3y" },
      { name: "Redis", experience: "2y" },
      { name: "MongoDB", experience: "2y" },
      { name: "Linux Systems", experience: "4y" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Technologies I've worked with in real-world projects and professional environments
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => {
                  const years = getYears(skill.experience)
                  const highlight = years >= 3
                  return (
                    <div key={skillIndex} className="flex items-center justify-between">
                      {/* Chap: logo + nom */}
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="h-7 w-7 grid place-items-center rounded-[24px] bg-secondary ring-1 ring-border shrink-0">
                          <Icon icon={iconId(skill.name)} className="h-4 w-4" />
                        </span>
                        <span className="font-medium truncate">{skill.name}</span>
                      </div>
                      {/* O‘ng: soat ikoni + tajriba */}
                      <div
                        className={`flex items-center gap-1 text-sm shrink-0 px-1 ${highlight ? "bg-blue-500 text-white rounded-[30px]" : "text-muted-foreground"
                          }`}
                      >
                        <Clock className="h-3.5 w-3.5" />
                        <span>{skill.experience}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
