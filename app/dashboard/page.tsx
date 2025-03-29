"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Package, RefreshCw, Truck } from "lucide-react"
import { useState } from "react"
import { BookingDialog } from "@/components/booking-dialog"

// Mock order data
const orders = [
  {
    id: "ORD-1234",
    date: "2023-03-15",
    status: "Delivered",
    items: "3 Shirts, 2 Pants, 1 Jacket",
    total: "$24.99",
  },
  {
    id: "ORD-1235",
    date: "2023-03-22",
    status: "In Progress",
    items: "5 Shirts, 3 Pants",
    total: "$32.50",
  },
  {
    id: "ORD-1236",
    date: "2023-03-28",
    status: "Scheduled",
    items: "2 Suits, 4 Shirts",
    total: "$45.75",
  },
]

// Mock subscription data
const subscription = {
  plan: "Pro",
  nextBilling: "April 15, 2023",
  pickupsRemaining: 7,
  status: "Active",
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground">Manage your laundry orders and subscription</p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-glow transition-all"
            onClick={() => setIsBookingOpen(true)}
          >
            Schedule New Pickup
          </Button>
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid grid-cols-3 md:w-[400px]">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-glow-light transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Next Pickup</CardTitle>
                  <CardDescription>Scheduled for pickup</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="font-medium">March 30, 2023</span>
                    </div>
                    <Badge>Confirmed</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-light transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Active Orders</CardTitle>
                  <CardDescription>Currently processing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <RefreshCw className="h-5 w-5 text-primary" />
                      <span className="font-medium">1 Order</span>
                    </div>
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-glow-light transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Subscription</CardTitle>
                  <CardDescription>Pro Plan</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-primary" />
                      <span className="font-medium">7 Pickups Left</span>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => setActiveTab("subscription")}>
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-glow-light transition-all duration-300">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Your last 3 orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <div className="font-medium">{order.id}</div>
                        <div className="text-sm text-muted-foreground">{order.date}</div>
                      </div>
                      <div className="text-right">
                        <Badge variant={order.status === "Delivered" ? "outline" : "default"}>{order.status}</Badge>
                        <div className="text-sm mt-1">{order.total}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="hover:shadow-glow-light transition-all duration-300">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View all your past and upcoming orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="bg-gradient-to-br from-card/50 to-card p-6 rounded-lg hover:shadow-glow-light transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                        </div>
                        <Badge variant={order.status === "Delivered" ? "outline" : "default"} className="mt-2 md:mt-0">
                          {order.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium">Items</p>
                          <p className="text-muted-foreground">{order.items}</p>
                        </div>
                        <div className="md:text-right">
                          <p className="text-sm font-medium">Total</p>
                          <p className="text-lg font-semibold">{order.total}</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t flex justify-end">
                        <Button variant="outline" size="sm" className="hover:shadow-glow-light transition-all">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subscription" className="space-y-6">
            <Card className="hover:shadow-glow-light transition-all duration-300">
              <CardHeader>
                <CardTitle>Your Subscription</CardTitle>
                <CardDescription>Manage your current plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-primary/10 to-purple-600/10 p-6 rounded-lg mb-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-xl bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        {subscription.plan} Plan
                      </h3>
                      <Badge variant="outline" className="mt-2">
                        {subscription.status}
                      </Badge>
                    </div>
                    <Button variant="outline" className="mt-4 md:mt-0 hover:shadow-glow-light transition-all">
                      Change Plan
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Next Billing Date</p>
                        <p>{subscription.nextBilling}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Pickups Remaining</p>
                        <p>{subscription.pickupsRemaining} of 10 this month</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Need more pickups or want to upgrade your plan?</p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-glow transition-all"
                  >
                    <a href="/plans">View All Plans</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      </div>
    </div>
  )
}

