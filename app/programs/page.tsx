import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, Users, Code, Award, Brain } from "lucide-react"

export default function ProgramsPage() {
  const programs = [
    {
      icon: MessageCircle,
      category: "Soft Skills (SS)",
      title: "Communication & Interpersonal Excellence",
      duration: "8-12 weeks",
      description: "Master effective communication, active listening, emotional intelligence, and workplace etiquette.",
      topics: [
        "Professional Communication",
        "Active Listening",
        "Emotional Intelligence",
        "Workplace Etiquette",
        "Conflict Resolution",
      ],
    },
    {
      icon: Users,
      category: "Managerial Skills (MS)",
      title: "Leadership & Management Essentials",
      duration: "10-14 weeks",
      description:
        "Develop critical managerial capabilities including team management, decision-making, and strategic thinking.",
      topics: [
        "Team Management",
        "Decision Making",
        "Strategic Planning",
        "Performance Management",
        "Change Management",
      ],
    },
    {
      icon: Code,
      category: "Technical Training (TT)",
      title: "Industry-Specific Technical Skills",
      duration: "12-16 weeks",
      description: "Gain hands-on technical expertise aligned with industry standards and market demands.",
      topics: [
        "Industry Tools & Technologies",
        "Best Practices",
        "Quality Standards",
        "Innovation Techniques",
        "Project Implementation",
      ],
    },
    {
      icon: Award,
      category: "Leadership Development",
      title: "Executive & Leadership Coaching",
      duration: "6-12 months",
      description: "Transform into an inspiring leader with advanced leadership principles and executive presence.",
      topics: [
        "Visionary Leadership",
        "Executive Presence",
        "Strategic Communication",
        "Organizational Impact",
        "Coaching & Mentoring",
      ],
    },
    {
      icon: Brain,
      category: "Life Coaching",
      title: "Personal Transformation Programs",
      duration: "3-6 months",
      description:
        "Unlock your full potential through mindset coaching, goal setting, and personal development strategies.",
      topics: [
        "Goal Setting & Achievement",
        "Mindset Transformation",
        "Work-Life Balance",
        "Manifestation Techniques",
        "Personal Branding",
      ],
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Training Programs</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Comprehensive learning pathways designed to accelerate your professional growth
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {programs.map((program, index) => (
                <Card key={program.title} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div
                      className={`p-6 ${index % 2 === 0 ? "bg-primary/5" : "bg-accent/5"} flex flex-col justify-center`}
                    >
                      <div className="w-14 h-14 rounded-xl bg-background shadow-md flex items-center justify-center mb-4">
                        <program.icon className={`w-7 h-7 ${index % 2 === 0 ? "text-primary" : "text-accent"}`} />
                      </div>
                      <div className="text-sm font-semibold text-muted-foreground mb-2">{program.category}</div>
                      <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                      <div className="text-sm text-muted-foreground">
                        <span className="font-semibold">Duration:</span> {program.duration}
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <CardDescription className="text-base mb-4">{program.description}</CardDescription>
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold mb-3 text-foreground">Key Topics Covered:</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.topics.map((topic) => (
                              <span key={topic} className="px-3 py-1 bg-muted text-xs font-medium rounded-full">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button
                          variant="default"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                          asChild
                        >
                          <Link href="/contact">Enroll Now</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Programs */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-4 text-balance">Custom Corporate Programs</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                We design bespoke training programs tailored to your organization's specific needs and objectives. From
                onboarding to leadership development, we've got you covered.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Request Custom Program</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
