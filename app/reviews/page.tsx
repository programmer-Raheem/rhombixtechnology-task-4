"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"
import CartSidebar from "@/components/cart-sidebar"
import { StarIcon } from "@/components/icons"

export default function ReviewsPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])
  const [newReview, setNewReview] = useState({ name: "", email: "", rating: 5, comment: "" })
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Absolutely amazing experience! The food was delicious and the service was impeccable. Highly recommend!",
      image: "/reviewer-1.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4.5,
      date: "1 month ago",
      comment: "Great restaurant with authentic flavors. The ambiance is perfect for a romantic dinner.",
      image: "/reviewer-2.jpg",
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      date: "1 month ago",
      comment:
        "Best dining experience I've had in years. Every dish was perfectly prepared. Will definitely come back!",
      image: "/reviewer-3.jpg",
    },
    {
      id: 4,
      name: "David Martinez",
      rating: 4,
      date: "2 months ago",
      comment: "Good food and friendly staff. A bit pricey but worth it for the quality.",
      image: "/reviewer-4.jpg",
    },
  ])

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

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (newReview.name && newReview.comment) {
      setReviews([
        {
          id: reviews.length + 1,
          name: newReview.name,
          rating: newReview.rating,
          date: "Just now",
          comment: newReview.comment,
          image: "/placeholder.svg",
        },
        ...reviews,
      ])
      setNewReview({ name: "", email: "", rating: 5, comment: "" })
    }
  }

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)

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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Customer Reviews</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              See what our guests have to say about their dining experience
            </p>
          </div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface rounded-3xl p-8 md:p-12 text-center mb-12 shadow-lg">
            <div className="text-6xl font-bold text-primary mb-4">{averageRating}</div>
            <div className="flex justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="text-primary text-2xl">
                  <StarIcon />
                </div>
              ))}
            </div>
            <p className="text-muted text-lg">Based on {reviews.length} reviews</p>
          </div>
        </div>
      </section>

      {/* Write Review Form */}
      <section className="py-16 md:py-24 bg-surface-alt">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Share Your Experience</h2>
          <form onSubmit={handleSubmitReview} className="bg-surface rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={newReview.email}
                onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-foreground font-semibold mb-3">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className={`text-3xl transition-smooth ${star <= newReview.rating ? "text-primary" : "text-muted"}`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-foreground font-semibold mb-3">Your Review</label>
              <textarea
                placeholder="Share your dining experience..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-dark transition-smooth"
            >
              Submit Review
            </button>
          </form>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Recent Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-surface rounded-2xl p-6 md:p-8 hover:shadow-lg transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={i < Math.floor(review.rating) ? "text-primary" : "text-muted"}>
                      ★
                    </div>
                  ))}
                </div>

                <p className="text-muted leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
