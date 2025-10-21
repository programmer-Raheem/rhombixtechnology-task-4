"use client"
import { useState } from "react"
import { ShoppingCartIcon, StarIcon } from "./icons"
import FoodDetailModal from "./food-detail-modal"
interface MenuSectionProps {
  onAddToCart: (item: any) => void
  onShowToast?: (message: string) => void
}
const menuItems = [
  {
    id: "special-1",
    name: "Grilled Salmon",
    price: 52.0,
    rating: 4.9,
    category: "Special Treats",
    image: "/grilled-salmon-fillet-with-lemon.jpg",
  },
  {
    id: "special-2",
    name: "Truffle Risotto",
    price: 48.0,
    rating: 4.8,
    category: "Special Treats",
    image: "/creamy-truffle-risotto.jpg",
  },
  {
    id: "special-3",
    name: "Lobster Thermidor",
    price: 75.0,
    rating: 4.9,
    category: "Special Treats",
    image: "https://source.unsplash.com/800x600/?lobster-thermidor",
  },
  {
    id: "special-4",
    name: "Beef Wellington",
    price: 68.0,
    rating: 4.8,
    category: "Special Treats",
    image: "https://source.unsplash.com/800x600/?beef-wellington",
  },
  {
    id: "special-5",
    name: "Foie Gras",
    price: 90.0,
    rating: 4.9,
    category: "Special Treats",
    image: "https://source.unsplash.com/800x600/?foie-gras",
  },
  {
    id: "special-6",
    name: "Caviar Service",
    price: 120.0,
    rating: 4.7,
    category: "Special Treats",
    image: "https://source.unsplash.com/800x600/?caviar",
  },
  {
    id: "mezze-1",
    name: "Hummus Platter",
    price: 22.0,
    rating: 4.7,
    category: "Mezzas",
    image: "/hummus-with-pita-bread-and-vegetables.jpg",
  },
  {
    id: "mezze-2",
    name: "Falafel Mix",
    price: 18.0,
    rating: 4.6,
    category: "Mezzas",
    image: "/crispy-falafel-balls.jpg",
  },
  {
    id: "mezze-3",
    name: "Baba Ganoush",
    price: 20.0,
    rating: 4.6,
    category: "Mezzas",
    image: "https://source.unsplash.com/800x600/?baba-ganoush",
  },
  {
    id: "mezze-4",
    name: "Tabouli Salad",
    price: 16.0,
    rating: 4.7,
    category: "Mezzas",
    image: "https://source.unsplash.com/800x600/?tabouli-salad",
  },
  {
    id: "mezze-5",
    name: "Stuffed Grape Leaves",
    price: 18.0,
    rating: 4.5,
    category: "Mezzas",
    image: "https://source.unsplash.com/800x600/?stuffed-grape-leaves",
  },
  {
    id: "mezze-6",
    name: "Labneh Dip",
    price: 15.0,
    rating: 4.8,
    category: "Mezzas",
    image: "https://source.unsplash.com/800x600/?labneh",
  },
  {
    id: "sides-1",
    name: "Garlic Bread",
    price: 12.0,
    rating: 4.8,
    category: "Sides",
    image: "/crispy-garlic-bread.jpg",
  },
  {
    id: "sides-2",
    name: "Onion Rings",
    price: 14.0,
    rating: 4.7,
    category: "Sides",
    image: "/golden-onion-rings.jpg",
  },
  {
    id: "sides-3",
    name: "French Fries",
    price: 10.0,
    rating: 4.6,
    category: "Sides",
    image: "https://source.unsplash.com/800x600/?french-fries",
  },
  {
    id: "sides-4",
    name: "Greek Salad",
    price: 12.0,
    rating: 4.7,
    category: "Sides",
    image: "https://source.unsplash.com/800x600/?greek-salad",
  },
  {
    id: "sides-5",
    name: "Coleslaw",
    price: 8.0,
    rating: 4.5,
    category: "Sides",
    image: "https://source.unsplash.com/800x600/?coleslaw",
  },
  {
    id: "sides-6",
    name: "Mashed Potatoes",
    price: 11.0,
    rating: 4.8,
    category: "Sides",
    image: "https://source.unsplash.com/800x600/?mashed-potatoes",
  },
  {
    id: "app-1",
    name: "Spring Rolls",
    price: 16.0,
    rating: 4.9,
    category: "Appetizers",
    image: "/crispy-spring-rolls-with-sauce.jpg",
  },
  {
    id: "app-2",
    name: "Chicken Wings",
    price: 20.0,
    rating: 4.8,
    category: "Appetizers",
    image: "/spicy-chicken-wings.png",
  },
  {
    id: "drink-1",
    name: "Fresh Mango Juice",
    price: 8.0,
    rating: 4.7,
    category: "Drinks",
    image: "/fresh-mango-juice-in-glass.jpg",
  },
  {
    id: "drink-2",
    name: "Iced Coffee",
    price: 6.0,
    rating: 4.8,
    category: "Drinks",
    image: "/iced-coffee-cream.png",
  },
  {
    id: "lunch-1",
    name: "Lunch Combo A",
    price: 32.0,
    rating: 4.9,
    category: "Lunch",
    image: "/lunch-combo-with-rice-and-meat.jpg",
  },
  {
    id: "lunch-2",
    name: "Lunch Combo B",
    price: 35.0,
    rating: 4.8,
    category: "Lunch",
    image: "/lunch-combo-with-vegetables.jpg",
  },
]
const categories = ["Special Treats", "Mezzas", "Sides", "Appetizers", "Drinks", "Lunch", "More Items"]
export default function MenuSection({ onAddToCart, onShowToast }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState("Special Treats")
  const [selectedFood, setSelectedFood] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const filteredItems = menuItems.filter((item) => item.category === selectedCategory)
  const handleFoodClick = (food: any) => {
    setSelectedFood(food)
    setIsModalOpen(true)
  }
  const handleAddToCart = (item: any) => {
    onAddToCart(item)
    onShowToast?.(`${item.name} added to cart!`)
  }
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Regular Menu Pack</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Explore our diverse menu with carefully curated dishes from around the world
          </p>
        </div>
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-fade-in-up">
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
        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-surface rounded-2xl overflow-hidden hover:shadow-xl transition-smooth animate-scale-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleFoodClick(item)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1 shadow-lg">
                  <div className="text-primary">
                    <StarIcon />
                  </div>
                  <span className="font-semibold text-xs">{item.rating}</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleAddToCart(item)
                    }}
                    className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-smooth hover:scale-110 transform"
                  >
                    <ShoppingCartIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Food Detail Modal */}
      <FoodDetailModal
        isOpen={isModalOpen}
        food={selectedFood}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={handleAddToCart}
        onShowToast={onShowToast || (() => {})}
      />
    </section>
  )
}
