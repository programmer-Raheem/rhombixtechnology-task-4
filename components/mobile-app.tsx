"use client"

import { DownloadIcon } from "./icons"

export default function MobileApp() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="animate-slide-in-left">
            <img src="/mobile.webp" alt="Mobile App" className="w-full max-w-sm mx-auto" />
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Never Feel Hungry! Download Our Mobile App
            </h2>
            <p className="text-lg text-muted mb-8 leading-relaxed">
              Enjoy delicious foods on the go. Download our mobile app and get exclusive deals and faster ordering.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-foreground text-white rounded-full font-semibold hover:bg-foreground/90 transition-smooth flex items-center justify-center gap-2">
                <DownloadIcon />
                App Store
              </button>
              <button className="px-8 py-3 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground/10 transition-smooth flex items-center justify-center gap-2">
                <DownloadIcon />
                Play Store
              </button>
            </div>

            {/* Features */}
            <div className="mt-12 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">Fast and easy ordering</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">Real-time order tracking</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <p className="text-foreground">Exclusive app-only deals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
