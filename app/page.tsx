"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import PopularDishes from "@/components/popular-dishes"
import MenuSection from "@/components/menu-section"
import Testimonials from "@/components/testimonials"
import ChefProfiles from "@/components/chef-profiles"
import Services from "@/components/services"
import MobileApp from "@/components/mobile-app"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"
import Reservation from "@/components/reservation"
import ToastNotification from "@/components/toast-notification"

export default function Home() {
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
      <Hero onAddToCart={addToCart} />
      <PopularDishes onAddToCart={addToCart} />
      <MenuSection onAddToCart={addToCart} onShowToast={showNotification} />
      <Reservation />
      <Testimonials />
      <ChefProfiles />
      <Services />
      <MobileApp />
      <Footer />
      <ToastNotification message={toastMessage} isVisible={showToast} onClose={() => setShowToast(false)} />
    </main>
  )
}
