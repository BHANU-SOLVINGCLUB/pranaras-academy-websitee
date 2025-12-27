import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  GraduationCap,
  Users,
  Briefcase,
  Lightbulb,
  Target,
  TrendingUp,
  Award,
  MessageCircle,
  Brain,
  Heart,
} from "lucide-react"

export default function ServicesPage() {
  const studentServices = [
    {
      icon: Lightbulb,
      name: "Soft Skills Training",
      description: "Communication, confidence, and interpersonal skills",
    },
    { icon: Heart, name: "Life Coaching", description: "Personal growth and self-discovery sessions" },
    { icon: Target, name: "Motivational Sessions", description: "Inspiring talks to boost motivation and drive" },
    { icon: Brain, name: "Manifestation & Mindset", description: "Transform your mindset for success" },
    { icon: MessageCircle, name: "Counseling Sessions", description: "One-on-one guidance and support" },
    { icon: Award, name: "Leadership Training", description: "Develop leadership qualities early" },
  ]

  const professionalServices = [
    { icon: MessageCircle, name: "Communication Skills", description: "Professional communication and presentation" },
    { icon: TrendingUp, name: "Managerial Skills", description: "Essential management and leadership abilities" },
    { icon: Award, name: "Technical Training", description: "Industry-specific technical expertise" },
    { icon: Target, name: "Career Growth Coaching", description: "Strategic career development planning" },
  ]

  const corporateServices = [
    { icon: Lightbulb, name: "Soft Skills Training (SS)", description: "Team communication and collaboration" },
    { icon: Award, name: "Technical Training (TT)", description: "Upskilling your workforce" },
    { icon: Users, name: "Leadership & Executive Coaching", description: "Develop strong organizational leaders" },
    { icon: Target, name: "Team Building Sessions", description: "Strengthen team dynamics and motivation" },
    { icon: Briefcase, name: "Hire & Deploy Programs", description: "End-to-end talent solutions" },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tailored training solutions for every stage of your journey
            </p>
          </div>
        </section>

        {/* Students Section */}
        <section id="students" className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">For Students</h2>
                <p className="text-muted-foreground">Building foundational skills for future success</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studentServices.map((service) => (
                <Card key={service.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Professionals Section */}
        <section id="professionals" className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">For Working Professionals</h2>
                <p className="text-muted-foreground">Accelerate your career with advanced skills</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {professionalServices.map((service) => (
                <Card key={service.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-3">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Corporates Section */}
        <section id="corporates" className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary">For Corporates</h2>
                <p className="text-muted-foreground">Comprehensive workforce development solutions</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateServices.map((service) => (
                <Card key={service.name} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Contact us today to discuss your training needs and transform your skills.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/contact">Contact Us Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
