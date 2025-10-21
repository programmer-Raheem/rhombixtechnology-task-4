"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"
import CartSidebar from "@/components/cart-sidebar"

export default function AboutPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId)
    } else {
      setCartItems((prev) => prev.map((i) => (i.id === itemId ? { ...i, quantity } : i)))
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation cartCount={cartItems.length} onCartClick={() => setCartOpen(!cartOpen)} />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Bites Restaurant</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Discover the story behind our passion for culinary excellence and authentic flavors
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img src="/restaurant-kitchen-chef-cooking.jpg" alt="Our Kitchen" className="rounded-3xl shadow-xl" />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted mb-4 leading-relaxed">
                Founded in 2015, Bites Restaurant began as a small family-owned establishment with a big dream: to bring
                authentic, high-quality cuisine to our community. What started as a humble kitchen has grown into a
                beloved dining destination.
              </p>
              <p className="text-lg text-muted mb-4 leading-relaxed">
                Our journey has been driven by a commitment to excellence, using only the finest ingredients and
                traditional cooking methods passed down through generations. Every dish tells a story of passion,
                dedication, and love for food.
              </p>
              <p className="text-lg text-muted leading-relaxed">
                Today, we're proud to serve thousands of satisfied customers who have become part of our extended
                family. We continue to innovate while honoring the traditions that make our cuisine special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality",
                description:
                  "We never compromise on the quality of our ingredients or the care we put into every dish.",
                icon: "⭐",
              },
              {
                title: "Authenticity",
                description: "Our recipes are rooted in tradition, bringing genuine flavors from around the world.",
                icon: "🌍",
              },
              {
                title: "Customer Care",
                description: "Your satisfaction is our priority. We treat every guest like family.",
                icon: "❤️",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-surface rounded-2xl p-8 text-center hover:shadow-lg transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Chef Marcus", role: "Head Chef", image: "/chef-portrait.jpg" },
              { name: "Sarah Johnson", role: "Manager", image: "/manager-portrait.jpg" },
              { name: "David Lee", role: "Sous Chef", image: "/sous-chef-portrait.jpg" },
              { name: "Emma Wilson", role: "Pastry Chef", image: "/pastry-chef-portrait.jpg" },
            ].map((member, index) => (
              <div
                key={index}
                className="text-center animate-scale-in hover:transform hover:scale-105 transition-smooth"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-2xl mb-4 shadow-lg"
                />
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience Our Cuisine</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us for an unforgettable dining experience. Reserve your table today!
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface transition-smooth">
            Reserve a Table
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
