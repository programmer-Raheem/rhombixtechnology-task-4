"use client"

import { ChevronLeftIcon, ChevronRightIcon, StarIcon, ShoppingCartIcon } from "./icons"
import { useState } from "react"

interface PopularDishesProps {
  onAddToCart: (item: any) => void
}

const dishes = [
  {
    id: "pasta",
    name: "Pasta Carbonara",
    price: 35.0,
    rating: 4.8,
    reviews: 245,
    image: "/creamy-pasta-carbonara-with-bacon.jpg",
    description: "Authentic Italian pasta with creamy sauce",
  },
  {
    id: "fries",
    name: "Crispy French Fries",
    price: 15.0,
    rating: 4.6,
    reviews: 189,
    image: "/golden-crispy-french-fries.png",
    description: "Golden and crispy, perfectly seasoned",
  },
  {
    id: "shawarma",
    name: "Chicken Shawarma",
    price: 28.0,
    rating: 4.9,
    reviews: 312,
    image: "/chicken-shawarma-wrap-with-vegetables.jpg",
    description: "Tender chicken with aromatic spices",
  },
  {
    id: "curry",
    name: "Fish Curry",
    price: 38.0,
    rating: 4.7,
    reviews: 156,
    image: "/spicy-fish-curry-in-red-sauce.jpg",
    description: "Rich and aromatic fish curry",
  },
]

export default function PopularDishes({ onAddToCart }: PopularDishesProps) {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("dishes-scroll")
    if (container) {
      const scrollAmount = 320
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount
      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Popular Dishes</h2>
            <p className="text-muted">Our most loved dishes by customers</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-smooth text-primary"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-smooth text-primary"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* Dishes Carousel */}
        <div
          id="dishes-scroll"
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="flex-shrink-0 w-full sm:w-80 bg-surface-alt rounded-2xl overflow-hidden hover:shadow-xl transition-smooth animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={dish.image || "/placeholder.svg"}
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                  <div className="text-primary">
                    <StarIcon />
                  </div>
                  <span className="font-semibold text-sm">{dish.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{dish.name}</h3>
                <p className="text-sm text-muted mb-4">{dish.description}</p>
                <p className="text-xs text-muted mb-4">{dish.reviews} reviews</p>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-primary">${dish.price.toFixed(2)}</p>
                  <button
                    onClick={() => onAddToCart(dish)}
                    className="p-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-smooth hover:scale-110 transform"
                  >
                    <ShoppingCartIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
