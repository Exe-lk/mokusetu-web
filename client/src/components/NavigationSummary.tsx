"use client";
import Link from "next/link";

export default function NavigationSummary() {
  const sections = [
    {
      title: "About Us",
      description: "Learn about our story, mission, and expertise",
      homeAnchor: "#about",
      pageLink: "/about",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    },
    {
      title: "Services",
      description: "Explore our comprehensive business services",
      homeAnchor: "#services",
      pageLink: "/services",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    },
    {
      title: "Vision & Mission",
      description: "Understand our strategic direction and purpose",
      homeAnchor: "#vmv",
      pageLink: "/vision-mission",
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    },
    {
      title: "Why Us",
      description: "Discover what makes us your ideal partner",
      homeAnchor: "#usp",
      pageLink: "/why-us",
      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    },
    {
      title: "Blog",
      description: "Read insights and expert knowledge",
      homeAnchor: "#blog",
      pageLink: "/blog",
      icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
    },
    {
      title: "Contact",
      description: "Get in touch to start your journey",
      homeAnchor: "#contact",
      pageLink: "/contact",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-accent/5 via-white to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text-brand">Explore Our Content</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Navigate through our comprehensive content or dive deeper into specific sections
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div 
              key={section.title}
              className="floating-paper p-6 rounded-2xl group hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={section.icon} />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{section.title}</h3>
                  <p className="text-muted text-sm mb-4">{section.description}</p>
                  
                  <div className="flex gap-2">
                    <a 
                      href={section.homeAnchor}
                      className="text-xs text-primary font-medium"
                    >
                      View Section
                    </a>
                    <span className="text-muted">•</span>
                    <Link 
                      href={section.pageLink}
                      className="text-xs text-secondary font-medium"
                    >
                      Full Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
