import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink } from "lucide-react"

const awards = [
  {
    id: 1,
    title: "Client Excellence Appreciation",
    organization: "Datox & Centralis",
    date: "2024",
    description:
      "Received direct appreciation from clients for enabling ESMA compliance (expanding beyond FCA) and implementing reporting solutions across 25+ countries. This achievement not only broadened the client base but also contributed to securing $2.5 million in new investments.",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Winner – Ministry of Health’s Excellence Award",
    organization: "Ministry of Health & Andijan State Medical Institute",
    date: "2025",
    description:
      "Awarded 1st place out of 1,500 participants for outstanding contributions at the intersection of healthcare and technology, recognizing innovation and excellence in digital health solutions.",
    icon: "⭐",
  },
  {
    id: 3,
    title: "FIFA Appreciation Award",
    organization: "FIFA Futsal World Cup",
    date: "2024",
    description:
      "Volunteered as IT Support Supervisor, leading a 7-person team to ensure uninterrupted technical operations throughout the tournament. Awarded an official FIFA Appreciation Certification for excellence in service and leadership.",
    icon: "🥇",
  },
]

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Awards & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Recognition for excellence in innovation and professional contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{award.icon}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-balance leading-tight">{award.title}</h3>
                  </div>
                  <p className="text-primary font-medium text-sm mb-1">{award.organization}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{award.date}</span>
                    </div>

                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 text-pretty">{award.description}</p>


            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
