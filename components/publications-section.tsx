"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, FileText, Calendar, Users } from "lucide-react"
import { useState } from "react"

const publicationCategories = ["Publications"]

const publications = [
  {
    id: 1,
    title: "The Impact of Obesity on Cardiac Function and Analysis of Treatment Outcomes Using Modern Surgical Methods",
    type: "Publications",
    venue: "Comprehensive study",
    date: "Sep 2025",
    authors: ["Nurmukhammad Mukhitdinov", "Co-authors"],
    status: "Published",
    description:
      "Comprehensive study on the impact of obesity on cardiac function. Focuses on evaluating treatment outcomes through modern surgical methods and analyzing their effectiveness in improving patient health.",
    tags: ["Cardiology", "Obesity", "Data Analysis", "HealthTech"],
  },
  {
    id: 2,
    title: "Neural Networks in the Prediction of Cardiovascular Disease: A Data-Driven Approach.",
    type: "Publications",
    venue: "Comprehensive study on the use of neural networks for predicting cardiovascular disease. ",
    date: "Oct 2025",
    authors: ["Nurmukhammad Mukhitdinov", "Co-authors"],
    status: "Published",
    description:
      "Comprehensive study on the use of neural networks for predicting cardiovascular disease. Focuses on applying machine learning models to patient data to improve diagnostic accuracy and support early intervention.",
    tags: ["Cardiology", "Neural Networks", "Predictive Analytics", "HealthTech", " AI/ML"],
    links: {
      paper: "#",
      code: "#",
    },
  },
]

export function PublicationsSection() {
  const [activeCategory, setActiveCategory] = useState("All Publications")

  const filteredPublications =
    activeCategory === "All Publications" ? publications : publications.filter((pub) => pub.type === activeCategory)

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Publications & <span className="text-primary">Writing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Research contributions and technical insights
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-12">
          {publicationCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((publication) => (
            <div
              key={publication.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-balance">{publication.title}</h3>
                      <p className="text-muted-foreground mb-2">{publication.venue}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{publication.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{publication.authors.join(", ")}</span>
                        </div>
                        <Badge variant="secondary">{publication.status}</Badge>
                      </div>
                    </div>

                   { /* <div className="flex gap-2">
                      {publication.links.paper && (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      )}
                      {publication.links.article && (
                        <Button size="sm" variant="outline">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View
                        </Button>
                      )}
                    </div>*/}
                  </div>

                  <p className="text-muted-foreground mb-4 text-pretty">{publication.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {publication.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
