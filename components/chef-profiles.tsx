"use client"

const chefs = [
  {
    id: 1,
    name: "Samantha Nguyen",
    role: "Head Chef",
    image: "/chef1.webp",
  },
  {
    id: 2,
    name: "Esther Howard",
    role: "Pastry Chef",
    image: "/chef2.webp",
  },
  {
    id: 3,
    name: "Marvin McKinney",
    role: "Sous Chef",
    image: "/chef3.webp",
  },
  {
    id: 4,
    name: "Albert Flores",
    role: "Executive Chef",
    image: "/chef4.webp",
  },
]

export default function ChefProfiles() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Chefs</h2>
          <p className="text-muted">Talented culinary experts behind every dish</p>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div key={chef.id} className="group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={chef.image || "/placeholder.svg"}
                  alt={chef.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold text-foreground text-center">{chef.name}</h3>
              <p className="text-center text-muted">{chef.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
