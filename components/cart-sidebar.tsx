"use client"

import type React from "react"

import { XIcon, TrashIcon, PlusIcon, MinusIcon } from "./icons"
import { useState } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (itemId: string, quantity: number) => void
  onRemove: (itemId: string) => void
}

export default function CartSidebar({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartSidebarProps) {
  const [showCheckout, setShowCheckout] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose}></div>}

      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 h-screen w-full sm:w-96 bg-surface shadow-2xl z-50 transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-surface border-b border-border p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-foreground">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-surface-alt rounded-lg transition-smooth">
            <XIcon />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted text-lg mb-4">Your cart is empty</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-smooth"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-surface-alt rounded-lg hover:shadow-md transition-smooth"
                  >
                    {/* Image */}
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-primary font-bold">${item.price.toFixed(2)}</p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-surface rounded transition-smooth text-muted"
                        >
                          <MinusIcon />
                        </button>
                        <span className="w-6 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-surface rounded transition-smooth text-muted"
                        >
                          <PlusIcon />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => onRemove(item.id)}
                      className="p-2 hover:bg-surface rounded transition-smooth text-error"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div className="border-t border-border pt-6 space-y-3 mb-6">
                <div className="flex justify-between text-muted">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground pt-3 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-smooth mb-3"
              >
                Proceed to Checkout
              </button>

              {/* Checkout Modal */}
              {showCheckout && (
                <CheckoutModal
                  total={total}
                  onClose={() => setShowCheckout(false)}
                  onConfirm={() => {
                    alert("Order placed successfully! Thank you for your purchase.")
                    setShowCheckout(false)
                    onClose()
                  }}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  )
}

function CheckoutModal({
  total,
  onClose,
  onConfirm,
}: {
  total: number
  onClose: () => void
  onConfirm: () => void
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cardNumber: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-2xl max-w-md w-full p-6 animate-scale-in">
        <h3 className="text-2xl font-bold text-foreground mb-6">Checkout</h3>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            name="address"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="mb-6 p-4 bg-surface-alt rounded-lg">
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount:</span>
            <span className="text-primary">${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-surface-alt transition-smooth"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-smooth font-semibold"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
