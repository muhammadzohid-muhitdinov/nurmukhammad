import Link from "next/link"

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Publications", href: "#publications" },
  { name: "Awards", href: "#awards" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">

            <p className="text-muted-foreground text-pretty max-w-sm">
              Ready to collaborate on something extraordinary? I'm always excited to connect with fellow innovators,
              explore cutting-edge technologies, and build the foundations of what's possible with technology. Let's
              build the future together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Get In Touch */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Ready to work together?</p>
              <p className="text-primary font-medium">nurmukhitdin@gmail.com</p>
              <p className="text-muted-foreground">Andijan, Uzbekistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Nurmukhammad Mukhitdinov</p>
        </div>
      </div>
    </footer>
  )
}
