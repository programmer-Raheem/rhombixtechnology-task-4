"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import MenuSection from "@/components/menu-section"
import { useState } from "react"
import CartSidebar from "@/components/cart-sidebar"
import ToastNotification from "@/components/toast-notification"

export default function MenuPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [toastMessage, setToastMessage] = useState("")
  const [showToast, setShowToast] = useState(false)

  const addToCart = (item: any) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: (i.quantity || 1) + (item.quantity || 1) } : i))
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }]
    })
  }

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

  const showNotification = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Complete Menu</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Explore our full selection of carefully crafted dishes from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <MenuSection onAddToCart={addToCart} onShowToast={showNotification} />

      {/* Special Offers */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lunch Combo",
                description: "Get any main dish with a drink and dessert",
                discount: "20% OFF",
                color: "from-primary to-primary-light",
              },
              {
                title: "Family Bundle",
                description: "Perfect for 4 people with variety of dishes",
                discount: "25% OFF",
                color: "from-accent to-primary",
              },
              {
                title: "Happy Hour",
                description: "All appetizers and drinks at special prices",
                discount: "30% OFF",
                color: "from-primary-light to-accent",
              },
            ].map((offer, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${offer.color} text-white rounded-2xl p-8 hover:shadow-xl transition-smooth animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                <p className="mb-4 opacity-90">{offer.description}</p>
                <div className="text-4xl font-bold">{offer.discount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToastNotification message={toastMessage} isVisible={showToast} onClose={() => setShowToast(false)} />
      <Footer />
    </main>
  )
}
