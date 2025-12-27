import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, BookOpen, Heart, Users } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every training session and program we deliver",
    },
    {
      icon: Heart,
      title: "Empowerment",
      description: "We empower individuals to unlock their full potential and achieve their dreams",
    },
    {
      icon: Users,
      title: "Human-Centered",
      description: "We put people first, understanding that every learner has unique needs and goals",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "We believe in lifelong learning and constantly updating our methodologies",
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">About Pranaras Academy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Transforming lives through world-class training and coaching
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To provide transformative learning experiences that empower individuals and organizations to reach
                  their highest potential through expert-led training in soft skills, leadership, and personal
                  development.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading training academy that shapes futures by building essential skills, fostering
                  leadership, and creating lasting positive impact across all sectors of society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <div className="grid md:grid-cols-5 gap-8">
                  <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center p-8">
                    <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                      P
                    </div>
                  </div>
                  <CardContent className="md:col-span-3 p-8 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-primary mb-2">Pranathi</h2>
                    <p className="text-lg text-accent font-semibold mb-4">Head Coach & Founder</p>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        With years of experience in corporate training, life coaching, and leadership development,
                        Pranathi has transformed the lives of hundreds of individuals and organizations.
                      </p>
                      <p>
                        Her expertise spans across soft skills training, motivational speaking, and personal
                        transformation, making her a sought-after coach for students, professionals, and corporates
                        alike.
                      </p>
                      <blockquote className="border-l-4 border-accent pl-4 italic text-foreground mt-6">
                        "Every individual has unlimited potential. My mission is to help you discover and unleash
                        yours."
                      </blockquote>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4 text-balance">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card key={value.title} className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Join Our Community</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-pretty">
              Become part of a growing community of learners and leaders who are committed to continuous growth.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <Link href="/contact">Connect With Us</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
