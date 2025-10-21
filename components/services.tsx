"use client"

import { ShoppingBagIcon, ClockIcon, UtensilsIcon, UsersIcon } from "./icons"

const services = [
  {
    id: 1,
    icon: ShoppingBagIcon,
    title: "Online Order",
    description: "Easy and convenient online ordering system",
  },
  {
    id: 2,
    icon: ClockIcon,
    title: "24/7 Service",
    description: "Available round the clock for your cravings",
  },
  {
    id: 3,
    icon: UtensilsIcon,
    title: "Clean Kitchen",
    description: "Hygienic and sanitized food preparation",
  },
  {
    id: 4,
    icon: UsersIcon,
    title: "Super Chefs",
    description: "Expert chefs with years of experience",
  },
]

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">We Are More Than Multiple Service</h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              This is a type of restaurant which typically serves food and drinks. In addition to light refreshments
              such as baked goods or snacks, this term comes from the french word meaning food.
            </p>

            {/* Services List */}
            <div className="space-y-4">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.id} className="flex gap-4 items-start">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 text-primary">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{service.title}</h3>
                      <p className="text-sm text-muted">{service.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
              <img
                src="/placeholder.svg?height=500&width=500"
                alt="Chef in kitchen"
                className="w-full rounded-3xl shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
