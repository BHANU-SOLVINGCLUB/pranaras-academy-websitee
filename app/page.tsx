import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Users, Target, Briefcase, GraduationCap, Heart, TrendingUp, Award, Sparkles } from "lucide-react"

export default function HomePage() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Soft skills, life coaching, motivational sessions, and mindset coaching to help students excel.",
      href: "/services#students",
    },
    {
      icon: Users,
      title: "Working Professionals",
      description: "Communication, confidence, managerial skills, and career growth coaching for professionals.",
      href: "/services#professionals",
    },
    {
      icon: Briefcase,
      title: "Corporates",
      description: "Technical training, leadership development, team building, and hire & deploy programs.",
      href: "/services#corporates",
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Motivational sessions for government schools and social welfare institutions.",
      href: "/social-impact",
    },
  ]

  const features = [
    {
      icon: Target,
      title: "Live Sessions & Workshops",
      description: "Interactive training sessions with real-world applications",
    },
    {
      icon: TrendingUp,
      title: "Skill Development Programs",
      description: "Comprehensive programs designed for career advancement",
    },
    {
      icon: Award,
      title: "Expert-Led Training",
      description: "Learn from experienced coaches and industry professionals",
    },
    {
      icon: Sparkles,
      title: "Hire & Deploy Programs",
      description: "Corporate solutions for talent development and deployment",
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Build Skills. <span className="text-primary">Shape Futures.</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Professional training academy offering transformative learning experiences in soft skills, leadership,
                and corporate excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/programs">
                    Explore Trainings <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Join Live Sessions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="py-16 sm:py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-balance">Who We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Empowering diverse audiences with tailored training solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((audience) => (
                <Link key={audience.title} href={audience.href}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 space-y-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <audience.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{audience.title}</h3>
                      <p className="text-sm text-muted-foreground">{audience.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 text-balance">What We Offer</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Comprehensive training solutions designed to accelerate your growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Ready to Transform Your Skills?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Join hundreds of individuals and organizations who have transformed their capabilities with Pranaras
              Academy.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/contact">
                Get Started Today <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
