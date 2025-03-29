import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"

const teamMembers = [
  {
    name: "Abdul Jawwad",
    role: "Founder & CEO",
    bio: "Abdul founded Iron-man with a vision to revolutionize the laundry industry through technology and exceptional service.",
    image: "/abdul.png",
  },
  {
    name: "Khalid Kashmiri",
    role: "Operations Director",
    bio: "Khalid ensures that every pickup and delivery is executed flawlessly, maintaining our high standards of service.",
    image: "/khalid.png",
  },
  {
    name: "Tony Stark",
    role: "Tech Lead",
    bio: "Tony is the brain behind our innovative app and seamless user experience that makes laundry management effortless.",
    image: "/tony.png",
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            About Iron-man
          </h1>
          <div className="bg-gradient-to-br from-card/50 to-card p-8 rounded-xl text-center">
            <p className="mb-4 text-muted-foreground">
              We believe laundry should be easy and fit your schedule. Whether you need a fast pickup for an urgent clean or prefer a subscription plan, we bring the best of convenience and affordability to your doorstep.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-gradient-to-br from-card/50 to-card p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="mb-4">
            Iron-man was founded in 2022 with a simple idea: laundry shouldn't be a chore that takes up your valuable
            time. Our founder, Abdul Jawwad, experienced firsthand the frustration of balancing a busy career with
            household responsibilities.
          </p>
          <p>
            What started as a small operation serving a few neighborhoods has grown into a comprehensive laundry
            solution trusted by thousands of customers. We combine cutting-edge technology with old-fashioned quality
            and service to deliver an experience that truly feels like magic.
          </p>
        </div>

        {/* Why We Introduced On-Demand */}
        <div className="bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Why We Introduced On-Demand
              </h2>
              <p className="text-lg text-muted-foreground">
                Not everyone needs a subscription, and sometimes you need your clothes cleaned fast. Our On-Demand service connects you to trusted local laundromats for ultra-fast cleaning, without breaking the bank.
              </p>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/hero1.jpg"
                alt="On-Demand Laundry Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-600/30"></div>
            </div>
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
    </div>
  )
}

