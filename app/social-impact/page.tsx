import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, School, Users, Sparkles, Target, TrendingUp } from "lucide-react"

export default function SocialImpactPage() {
  const initiatives = [
    {
      icon: School,
      title: "Government Schools",
      description:
        "Motivational sessions and soft skills training for students in government schools to inspire and empower the next generation.",
      impact: "500+ students reached",
    },
    {
      icon: Heart,
      title: "Social Welfare Institutions",
      description: "Life coaching and confidence-building programs for individuals in social welfare organizations.",
      impact: "200+ individuals impacted",
    },
  ]

  const focuses = [
    {
      icon: Sparkles,
      title: "Confidence Building",
      description: "Helping students discover their inner strength and build self-confidence",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Teaching the power of setting and achieving meaningful goals",
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Providing insights into career paths and opportunities",
    },
    {
      icon: Users,
      title: "Communication Skills",
      description: "Developing essential communication and interpersonal abilities",
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Heart className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">Social Impact</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Giving back to the community through transformative training and motivational sessions
            </p>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary mb-6 text-balance">Our Commitment to Society</h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                At Pranaras Academy, we believe in the power of education to transform lives. Our social responsibility
                initiatives focus on bringing quality training and motivational sessions to government schools and
                social welfare institutions, ensuring that everyone has access to the tools they need to succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Initiatives */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 text-balance">Our Initiatives</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {initiatives.map((initiative) => (
                <Card key={initiative.title} className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                      <initiative.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{initiative.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{initiative.description}</p>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {initiative.impact}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 text-balance">What We Focus On</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Our social impact programs cover essential life skills and motivation
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focuses.map((focus) => (
                <Card key={focus.title} className="border-2 hover:border-accent/50 transition-colors">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <focus.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">{focus.title}</h3>
                    <p className="text-sm text-muted-foreground">{focus.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Partner With Us</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              If you represent a government school or social welfare institution and would like to bring our programs to
              your community, we'd love to hear from you.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
