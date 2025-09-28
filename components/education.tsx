"use client"

const experiencese = [
  {
    id: 1,
    title: "Andijan State Medical Institute (Bachelor’s in Pharmacy)",
    period: "September 2020 – July 2025",
    location: "Andijan, Uzbekistan",
  },
  {
    id: 2,
    title: "Academic Lyceum under Andijan State Medical Institute",
    period: "September 2018 – June 2020",
    location: "Andijan, Uzbekistan",
  },
  {
    id: 3,
    title: "Specialized School No. 13 (Specialization in Mathematics & English)",
    period: "September 2009 – May 2018",
    location: "Andijan, Uzbekistan",
  },
]

export function Education() {


  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
           <span className="text-primary">Education</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiencese.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                <div className="md:ml-16">
                  <div className="bg-card border border-border rounded-lg overflow-hidden">
                    <div
                      className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"

                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">


                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                              <h3 className="text-xl font-semibold">{exp.title}</h3>
      
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground mb-3">
                              <span className="hidden sm:inline">•</span>
                              <span>{exp.period}</span>
                              <span className="hidden sm:inline">•</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    
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
