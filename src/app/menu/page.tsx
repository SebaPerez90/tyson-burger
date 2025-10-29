// app/menu/page.tsx
import { Heart, ShoppingCart } from "lucide-react";

const mockMenuItems = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    ingredients: [
      "Carne 100% vacuna",
      "Queso cheddar",
      "Lechuga",
      "Tomate",
      "Pan artesanal",
    ],
    price: "$1200",
    // mantenida (funcionaba)
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Hamburguesa BBQ",
    ingredients: [
      "Doble carne",
      "Cebolla caramelizada",
      "Panceta",
      "Salsa BBQ",
      "Queso cheddar",
    ],
    price: "$1400",
    // URL reemplazada por una imagen estable de Unsplash (gourmet burger)
    image:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Hamburguesa Veggie",
    ingredients: [
      "Medallón de garbanzos",
      "Palta",
      "Tomate asado",
      "Lechuga",
      "Hummus",
    ],
    price: "$1300",
    // URL reemplazada por una imagen estable de Unsplash (veggie burger)
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80",
  },
];

export default function MenuPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">
        Nuestro Menú
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockMenuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            {/* Imagen */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              width={400}
              height={208}
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-6 flex flex-col justify-between grow">
              <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                  {item.name}
                </h2>

                <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
                  {item.ingredients.map((ing, idx) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              </div>

              {/* Precio + Botones */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-gray-900">
                  {item.price}
                </span>
                <div className="flex gap-2">
                  <button className="bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-1 text-sm font-medium">
                    <ShoppingCart size={16} /> Agregar
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-1 text-sm font-medium">
                    <Heart size={16} /> Favorito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
