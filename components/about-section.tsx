import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about building transformative solutions that create real impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
           

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">About me</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With a strong foundation in medical sciences and professional experience in software engineering and data analysis, I specialize in developing AI-powered solutions that transform regulatory reporting. Over the past 3+ years, I’ve collaborated with dynamic teams across enterprise environments, delivering everything from MVPs to large-scale applications serving hundreds of users.
                </p>
                <p>
                  My journey has been defined by a commitment to creating meaningful impact through technology. From advancing accessibility and security to building wellness and compliance applications, I focus on solutions that genuinely improve lives. I believe technology should be not only powerful but also purposeful.
                </p>
                <p>
                  Outside of coding, I continue to expand my medical knowledge, contribute to research initiatives, and publish scientific and technical articles to share insights with the community. Currently, I am applying our regulation solutions in healthcare, where I find fulfillment in contributing my technical expertise to the advancement of science and research.
                </p>
                <p>
                  Above all, I genuinely believe and feel happiest when I can contribute to science and medicine in any way, work that serves the greater good and promotes the health and wellness of people.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">Clean Code</h4>
                <p className="text-sm text-muted-foreground">
                  Writing maintainable, scalable code that stands the test of time
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Staying ahead of technology trends and implementing cutting-edge solutions
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">Collaboration</h4>
                <p className="text-sm text-muted-foreground">
                  Working effectively with cross-functional teams and stakeholders
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-primary mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Optimizing applications for speed, scalability, and user experience
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">Technologies Mastered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
