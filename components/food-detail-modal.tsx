"use client"

import { useState } from "react"
import { CloseIcon, StarIcon, ShoppingCartIcon } from "./icons"

interface FoodDetailModalProps {
  isOpen: boolean
  food: any
  onClose: () => void
  onAddToCart: (item: any) => void
  onShowToast: (message: string) => void
}

export default function FoodDetailModal({ isOpen, food, onClose, onAddToCart, onShowToast }: FoodDetailModalProps) {
  const [quantity, setQuantity] = useState(1)

  if (!isOpen || !food) return null

  const handleAddToCart = () => {
    onAddToCart({ ...food, quantity })
    onShowToast(`${food.name} added to cart!`)
    setQuantity(1)
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="bg-surface rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-surface-alt rounded-full transition-smooth z-10"
          >
            <CloseIcon />
          </button>

          {/* Image */}
          <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
            <img src={food.image || "/placeholder.svg"} alt={food.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 bg-primary text-white px-4 py-2 rounded-full font-semibold">
              {food.category}
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Title and Rating */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-foreground mb-3">{food.name}</h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={i < Math.floor(food.rating) ? "text-primary" : "text-muted"}>
                      <StarIcon />
                    </div>
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">{food.rating}</span>
                <span className="text-muted">(128 reviews)</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted text-lg mb-6 leading-relaxed">
              Indulge in our exquisite {food.name}, carefully prepared with the finest ingredients. This dish combines
              traditional flavors with modern culinary techniques to create an unforgettable dining experience.
            </p>

            {/* Price and Quantity */}
            <div className="bg-surface-alt rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <span className="text-muted text-lg">Price per item</span>
                <p className="text-4xl font-bold text-primary">${food.price.toFixed(2)}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4">
                <span className="text-foreground font-semibold">Quantity:</span>
                <div className="flex items-center gap-3 bg-white rounded-lg border border-border p-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 flex items-center justify-center hover:bg-surface-alt rounded transition-smooth"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 flex items-center justify-center hover:bg-surface-alt rounded transition-smooth"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-surface-alt rounded-xl">
                <div className="text-2xl mb-2">⏱️</div>
                <p className="text-sm text-muted">15-20 min</p>
                <p className="text-xs text-foreground font-semibold">Prep Time</p>
              </div>
              <div className="text-center p-4 bg-surface-alt rounded-xl">
                <div className="text-2xl mb-2">🌶️</div>
                <p className="text-sm text-muted">Medium</p>
                <p className="text-xs text-foreground font-semibold">Spice Level</p>
              </div>
              <div className="text-center p-4 bg-surface-alt rounded-xl">
                <div className="text-2xl mb-2">🥗</div>
                <p className="text-sm text-muted">Vegetarian</p>
                <p className="text-xs text-foreground font-semibold">Type</p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-dark transition-smooth flex items-center justify-center gap-3 group"
            >
              <ShoppingCartIcon />
              Add {quantity} to Cart - ${(food.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
