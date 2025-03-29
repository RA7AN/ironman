import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "$10",
    description: "Perfect for occasional laundry needs",
    features: ["5 pickups per month", "48-hour turnaround", "Standard cleaning", "Email support"],
    recommended: false,
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    name: "Pro",
    price: "$20",
    description: "Our most popular plan for regular users",
    features: [
      "10 pickups per month",
      "24-hour turnaround",
      "Premium cleaning & ironing",
      "Priority support",
      "Stain treatment included",
    ],
    recommended: true,
    gradient: "from-primary to-purple-600",
  },
  {
    name: "Premium",
    price: "$35",
    description: "The ultimate laundry experience",
    features: [
      "Unlimited pickups",
      "Same-day turnaround",
      "Premium cleaning & ironing",
      "24/7 priority support",
      "Stain treatment included",
      "Garment repairs included",
    ],
    recommended: false,
    gradient: "from-purple-600 to-pink-500",
  },
]

export default function PlansPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Subscription Plans
        </h1>
        <p className="text-lg text-muted-foreground">
          Choose the perfect plan that fits your laundry needs. All plans include free pickup and delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-glow ${
              plan.recommended ? "border-2 border-primary shadow-glow-light" : ""
            }`}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
            )}
            <div className={`absolute h-1 top-0 left-0 right-0 bg-gradient-to-r ${plan.gradient}`}></div>
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-glow transition-all`}>
                <Link href="/signup">Subscribe</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* On-Demand Service Card */}
      <div className="mt-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                On-Demand Laundry
              </h2>
              <p className="text-lg text-muted-foreground">
                Perfect for urgent needs – pay as you go and get laundry picked up and delivered in just 30 minutes.
              </p>
              <ul className="space-y-4">
                {[
                  "Instant pickup & delivery",
                  "Pay only per use",
                  "No commitment",
                  "Connected to trusted local laundromats",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <p className="text-2xl font-bold text-primary">$5 per pickup</p>
                <p className="text-sm text-muted-foreground">Includes pickup, cleaning, and delivery</p>
              </div>
              <Button
                asChild
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-primary hover:shadow-glow transition-all"
              >
                <Link href="/signup" className="flex items-center gap-2">
                  Book a Pickup Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/beta1.jpg"
                alt="On-Demand Laundry Service"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-purple-600/30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

