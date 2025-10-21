"use client"

import { useEffect } from "react"

interface ToastNotificationProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export default function ToastNotification({ message, isVisible, onClose }: ToastNotificationProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      <div className="bg-primary text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 max-w-sm">
        <div className="text-xl">✓</div>
        <p className="font-medium">{message}</p>
      </div>
    </div>
  )
}
