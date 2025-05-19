import { Coffee, Croissant, Sandwich, Cake, Clock } from 'lucide-react'

const Index = () => {
  const menuItems = [
    {
      name: "Artisan Coffee",
      description: "Handcrafted with premium beans from local roasters",
      icon: <Coffee className="w-8 h-8" />,
      price: "$4.50"
    },
    {
      name: "Fresh Croissants",
      description: "Buttery, flaky pastries baked fresh daily",
      icon: <Croissant className="w-8 h-8" />,
      price: "$3.75"
    },
    {
      name: "Gourmet Sandwiches",
      description: "Made with artisanal bread and premium ingredients",
      icon: <Sandwich className="w-8 h-8" />,
      price: "$8.50"
    },
    {
      name: "Homemade Cakes",
      description: "Delicious desserts made in-house daily",
      icon: <Cake className="w-8 h-8" />,
      price: "$5.00"
    }
  ]

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-amber-900 text-amber-50">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container relative z-10 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Brew & Bites</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            A cozy cafe serving artisanal coffee and fresh pastries in the heart of the city
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-medium">
              View Menu
            </button>
            <button className="px-6 py-3 border-2 border-amber-50 hover:bg-amber-50/10 rounded-lg font-medium">
              Reserve a Table
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-amber-900">Our Story</h2>
          <p className="text-lg text-amber-800 mb-8">
            Founded in 2010, Brew & Bites started as a small coffee cart and has grown into a beloved neighborhood cafe. 
            We're passionate about quality ingredients, warm hospitality, and creating a welcoming space for everyone.
          </p>
          <div className="flex items-center justify-center gap-2 text-amber-700">
            <Clock className="w-5 h-5" />
            <span>Open daily from 7am to 7pm</span>
          </div>
        </div>
      </div>

      {/* Menu Highlights */}
      <div className="py-20 bg-amber-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center text-amber-900">Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-amber-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-amber-900">{item.name}</h3>
                <p className="text-amber-700 mb-4">{item.description}</p>
                <p className="font-bold text-amber-900">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-amber-900 text-amber-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Brew & Bites</h3>
              <p>123 Coffee Street, Beanville</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-300">Instagram</a>
              <a href="#" className="hover:text-amber-300">Facebook</a>
              <a href="#" className="hover:text-amber-300">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-amber-800 text-center">
            <p>© {new Date().getFullYear()} Brew & Bites Cafe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;