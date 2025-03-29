import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Alex founded Iron-man with a vision to revolutionize the laundry industry through technology and exceptional service.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Williams",
    role: "Operations Director",
    bio: "Sarah ensures that every pickup and delivery is executed flawlessly, maintaining our high standards of service.",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    bio: "Michael is the brain behind our innovative app and seamless user experience that makes laundry management effortless.",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          About Iron-man
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          We're on a mission to revolutionize how people handle their laundry, combining technology with exceptional
          service to give you back your time.
        </p>
        <div className="bg-gradient-to-br from-card/50 to-card p-8 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Iron-man was founded in 2022 with a simple idea: laundry shouldn't be a chore that takes up your valuable
            time. Our founder, Alex Johnson, experienced firsthand the frustration of balancing a busy career with
            household responsibilities.
          </p>
          <p>
            What started as a small operation serving a few neighborhoods has grown into a comprehensive laundry
            solution trusted by thousands of customers. We combine cutting-edge technology with old-fashioned quality
            and service to deliver an experience that truly feels like magic.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-gradient hover:shadow-glow-light transition-all duration-300"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 border-gradient hover:shadow-glow-light transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-primary h-5 w-5" />
                <span>123 Laundry Lane, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary h-5 w-5" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary h-5 w-5" />
                <span>hello@ironmanlaundry.com</span>
              </div>
            </div>
            <div className="mt-6">
              <Button asChild className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-glow transition-all">
                <Link href="/signup">Become a Customer</Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6 border-gradient hover:shadow-glow-light transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>9:00 AM - 5:00 PM</span>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t">
              <p className="text-muted-foreground">
                Pickups and deliveries are available during business hours. For special arrangements, please contact our
                customer service.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

