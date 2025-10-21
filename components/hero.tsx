"use client"

import { SearchIcon } from "./icons"

interface HeroProps {
  onAddToCart: (item: any) => void
}

export default function Hero({ onAddToCart }: HeroProps) {
  const handleAddToCart = () => {
    onAddToCart({
      id: "hero-special",
      name: "Chef's Special Salad",
      price: 45.0,
      image: "/fresh-salad-with-grilled-chicken.jpg",
      description: "Fresh seasonal greens with grilled chicken breast",
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              We Serve The Test You <span className="text-primary">Love</span>
            </h1>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              This is a type of restaurant which typically serves food and drinks. In addition to light refreshments
              such as baked goods or snacks, this term comes from the french word meaning food.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-smooth hover:scale-105 transform">
                Explore Food
              </button>
              <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-smooth flex items-center justify-center gap-2">
                <SearchIcon />
                Search
              </button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-primary">500+</p>
                <p className="text-muted">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-muted">Menu Items</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
              <img
                src="/gourmet-salad-with-fresh-vegetables-and-grilled-ch.jpg"
                alt="Chef's Special Dish"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-lg p-4 animate-float">
              <p className="text-sm font-semibold text-foreground">⭐ 4.9 Rating</p>
              <p className="text-xs text-muted">From 1000+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
