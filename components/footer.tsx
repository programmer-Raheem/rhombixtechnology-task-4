"use client"

import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "./icons"

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-xl">Bites</span>
            </div>
            <p className="text-white/70">Premium dining experience with world-class cuisine and exceptional service.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>📍 123 Food Street, City</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📧 info@bites.com</li>
              <li>🕐 Open 24/7</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/10 hover:bg-primary rounded-full transition-smooth text-white">
                <FacebookIcon />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-primary rounded-full transition-smooth text-white">
                <TwitterIcon />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-primary rounded-full transition-smooth text-white">
                <InstagramIcon />
              </a>
              <a href="#" className="p-3 bg-white/10 hover:bg-primary rounded-full transition-smooth text-white">
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>&copy; 2025 Bites Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
