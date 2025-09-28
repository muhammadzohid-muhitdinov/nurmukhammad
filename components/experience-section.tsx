"use client"

import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    id: 1,
    title: "Software Engineer (Remote)",
    company: "Datox LTD (SaaS Startup)",
    period: "Oct 2023 - Present",
    location: "London, United Kingdom",
    type: "Full-time",
    logo: "/Logo-datox.svg",
    description:
      "Joined my sibling at the inception of a RegTech startup, contributing from the earliest stages by shaping the architecture, developing core AI-driven features, and helping scale the company to a $20M valuation.",
    achievements: [
      "Key Achievements",
      "Architected Datox Compliance, an AI-driven platform that automated regulatory reporting with LLMs and transformers, reducing report time by 86% while maintaining full accuracy.",
      "Built APIs with FastAPI and deployed on Azure with CI/CD, cutting deployment time by 40% and integrating Blob Storage for smooth file handling.",
      "Created AI agents using LangChain and GPT to let non-technical users run natural language SQL queries, improving query speed by 60% with flawless accuracy.",
      "Led development of the MVP and investor demos, helping secure $4.5M funding and a $20M valuation while driving team growth through recruiting top engineers.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI SDK",
      "PostgreSQL",
      "Azure",
      "LangChain",
      "Redis",
      "Docker",
    ],
  },
  {
    id: 2,
    title: "Data Analyst (Remote)",
    company: "Applied Labs",
    period: "Aug 2022 – Oct 2023",
    location: "Tashkent, Uzbekistan",
    type: "Full-time",
    logo: "/Apli.png",
    description:
      "Deployed tools and services in Kubernetes clusters with CI Tool balancing. Developed prototypes showcasing Singularity as vector store utilizing RAG with LangChain.",
    achievements: [
      "Key Achievements",
      "Designed OKR reports in SQL, Excel, and Power BI, automating performance tracking and boosting cross-department transparency by 80%.",
      "Built an ETL pipeline with Airflow, DBT Cloud, and Snowflake, integrating 5 data sources, ensuring 100% integrity, and improving productivity by 25%.", 
      "Developed “Data Analyst” Copilot on Azure for multi-tenancy analytics, test-launched with 3 enterprise clients and adopted by 1K+ users.", 
      "Created a TensorFlow-powered Virtual Assistant for an MSP client, automating client interactions and reducing manual workload.",
    ],
    technologies: ["SQL", "PowerBI", "Snowflake", "Tableau", "Python", "R", "OpenAI", "SDK", "Tensorflow", "Apache", "Airflow", "Azure"],
  },
]

export function ExperienceSection() {
  const [expandedItems, setExpandedItems] = useState<number[]>([1])

  const toggleExpanded = (id: number) => {
    setExpandedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From enterprise solutions to tech innovation, building scalable systems and leading AI-driven initiatives
            across diverse technology stacks
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-16">
                  <div className="bg-card border border-border rounded-lg overflow-hidden">
                    <div
                      className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleExpanded(exp.id)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                            <img
                              src={exp.logo || "/placeholder.svg"}
                              alt={`${exp.company} logo`}
                              className="w-8 h-8 object-contain"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className="text-xl font-semibold">{exp.title}</h3>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline">{exp.type}</Badge>
                                {expandedItems.includes(exp.id) ? (
                                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                                ) : (
                                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                )}
                              </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-3">
                              <span className="font-medium text-primary">{exp.company}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{exp.period}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{exp.location}</span>
                            </div>

                            <p className="text-muted-foreground text-pretty">{exp.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {expandedItems.includes(exp.id) && (
                      <div className="px-6 pb-6 border-t border-border">
                        <div className="pt-6 space-y-4">
                          <div>
                            <h4 className="font-semibold mb-3">{exp.achievements[0]}</h4>
                            <ul className="space-y-2">
                              {exp.achievements.slice(1).map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                  <span className="text-pretty">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
