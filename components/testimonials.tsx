"use client"

import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Samantha Nguyen",
    role: "Food Blogger",
    content:
      "The food quality is exceptional! Atmosphere is still and cool but the staff is also really friendly. They have a great main priority.",
    rating: 5,
    image: "/professional-woman-headshot.png",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "Chef",
    content:
      "Outstanding culinary experience. The presentation and taste of every dish exceeded my expectations. Highly recommended!",
    rating: 5,
    image: "/professional-man-headshot.png",
  },
  {
    id: 3,
    name: "Marvin McKinney",
    role: "Restaurant Owner",
    content:
      "Best dining experience I have had in years. The service was impeccable and the food was absolutely delicious.",
    rating: 5,
    image: "/older-man-headshot.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say?</h2>
          <p className="text-muted">Real experiences from our valued guests</p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`p-6 rounded-2xl transition-all duration-500 ${
                  index === currentIndex
                    ? "bg-primary text-white scale-105 shadow-xl"
                    : "bg-surface-alt text-foreground"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className={`${index === currentIndex ? "text-white" : "text-primary"}`}>
                      <StarIcon />
                    </div>
                  ))}
                </div>
                <p className="mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className={`text-sm ${index === currentIndex ? "text-white/80" : "text-muted"}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-smooth text-primary"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={next}
              className="p-3 bg-primary/10 hover:bg-primary/20 rounded-full transition-smooth text-primary"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
