"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"
import CartSidebar from "@/components/cart-sidebar"

export default function BlogPage() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<any[]>([])

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

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Perfect Pasta",
      excerpt: "Discover the secrets behind creating authentic Italian pasta from scratch.",
      content:
        "Pasta is more than just a dish; it's a culinary art form that has been perfected over centuries. In this article, we explore the techniques and traditions that make Italian pasta truly special. From selecting the right flour to mastering the perfect sauce, every step matters.",
      author: "Chef Marcus",
      date: "March 15, 2024",
      category: "Cooking Tips",
      image: "/blog-pasta.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Farm to Table: Our Sourcing Philosophy",
      excerpt: "Learn how we source the freshest ingredients directly from local farmers.",
      content:
        "At Bites Restaurant, we believe in supporting local farmers and using the freshest ingredients available. Our farm-to-table approach ensures that every dish is made with quality produce that's picked at peak ripeness. This commitment to freshness is what sets our cuisine apart.",
      author: "Sarah Johnson",
      date: "March 10, 2024",
      category: "Sustainability",
      image: "/blog-farm.jpg",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Spice Blending Secrets",
      excerpt: "Explore the world of spices and how to create the perfect flavor balance.",
      content:
        "Spices are the soul of many cuisines around the world. Understanding how to blend spices properly can transform a simple dish into something extraordinary. In this guide, we share our favorite spice combinations and techniques for achieving perfect flavor balance.",
      author: "David Lee",
      date: "March 5, 2024",
      category: "Culinary Techniques",
      image: "/blog-spices.jpg",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Wine Pairing Guide",
      excerpt: "Master the art of pairing wines with your favorite dishes.",
      content:
        "Wine pairing is an essential skill for any food enthusiast. The right wine can elevate a meal from good to unforgettable. Learn the principles of wine pairing and discover which wines complement our signature dishes perfectly.",
      author: "Emma Wilson",
      date: "February 28, 2024",
      category: "Beverages",
      image: "/blog-wine.jpg",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Dessert Trends 2024",
      excerpt: "Discover the latest trends in dessert making and plating.",
      content:
        "Desserts are evolving, and 2024 brings exciting new trends in flavors and presentation. From minimalist plating to bold flavor combinations, the dessert world is more creative than ever. Join us as we explore the trends that are shaping modern dessert culture.",
      author: "Emma Wilson",
      date: "February 20, 2024",
      category: "Desserts",
      image: "/blog-dessert.jpg",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "The History of Mediterranean Cuisine",
      excerpt: "Explore the rich history and traditions of Mediterranean cooking.",
      content:
        "Mediterranean cuisine is one of the world's most celebrated culinary traditions. With roots spanning thousands of years, it represents a perfect balance of flavors, health, and culture. Discover the stories behind the dishes that have defined this iconic cuisine.",
      author: "Chef Marcus",
      date: "February 15, 2024",
      category: "Food History",
      image: "/blog-mediterranean.jpg",
      readTime: "8 min read",
    },
  ]

  const categories = [
    "All",
    "Cooking Tips",
    "Sustainability",
    "Culinary Techniques",
    "Beverages",
    "Desserts",
    "Food History",
  ]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">Our Blog</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Culinary insights, recipes, and stories from our kitchen
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg"
                    : "bg-surface-alt text-foreground hover:bg-surface border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-smooth animate-scale-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted mb-4 line-clamp-2">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-muted mb-4 pb-4 border-b border-border">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{post.date}</span>
                    <button className="text-primary font-semibold hover:text-primary-dark transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-8 opacity-90">Get the latest recipes and culinary tips delivered to your inbox</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-surface transition-smooth"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
