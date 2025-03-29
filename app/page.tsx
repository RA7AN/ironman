import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent leading-tight">
              Clothes? Ironed. Delivered Like Magic, Magic.
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium laundry and ironing services with doorstep pickup and delivery. We take care of your clothes so
              you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-glow transition-all"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary hover:border-purple-600 hover:shadow-glow-light transition-all"
              >
                <Link href="/plans">View Plans</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/hero2.jpg?"
              alt="Laundry Service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-600/30"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Why Choose Iron-man?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Doorstep Pickup & Delivery",
              description: "We collect and deliver your laundry right to your doorstep, saving you time and effort.",
              icon: "🚚",
            },
            {
              title: "Premium Quality",
              description: "Professional cleaning and ironing services that ensure your clothes look their best.",
              icon: "✨",
            },
            {
              title: "Flexible Subscriptions",
              description: "Choose from various plans that suit your needs and budget with no hidden fees.",
              icon: "📅",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card/50 to-card p-8 rounded-xl hover:shadow-glow transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* On-Demand Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-2xl">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Introducing Laundry On-Demand – Clean Clothes in 30 Minutes!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Need fresh clothes fast? Our On-Demand service connects you with nearby launderers for quick pickup and drop-off within 30 minutes. No subscriptions, no waiting – just instant convenience.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Request a Pickup",
                description: "We instantly match you with a local laundromat.",
                icon: "🚀",
              },
              {
                title: "Express Cleaning",
                description: "Your clothes are professionally cleaned and pressed.",
                icon: "⚡",
              },
              {
                title: "Rapid Drop-Off",
                description: "Your laundry is delivered back to your doorstep in 30 minutes.",
                icon: "🎯",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-card/50 to-card p-6 rounded-xl hover:shadow-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="mt-8 bg-gradient-to-r from-purple-600 to-primary hover:shadow-glow transition-all"
          >
            <Link href="/plans#on-demand" className="flex items-center gap-2">
              Try On-Demand Now <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah Johnson",
              quote:
                "Iron-man has completely changed how I handle laundry. The service is reliable and my clothes have never looked better!",
              role: "Busy Professional",
            },
            {
              name: "Michael Chen",
              quote:
                "As a student with a packed schedule, Iron-man's subscription plan is perfect. Affordable and super convenient!",
              role: "Graduate Student",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-card/50 to-card p-8 rounded-xl hover:shadow-glow-light transition-all duration-300"
            >
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-muted-foreground">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Ready for Hassle-Free Laundry?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied customers who have simplified their laundry routine with Iron-man.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-6 bg-gradient-to-r from-primary to-purple-600 hover:shadow-glow transition-all"
          >
            <Link href="/signup" className="flex items-center gap-2">
              Get Started Today <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

