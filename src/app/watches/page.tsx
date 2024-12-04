import React from 'react';

const Watches = () => {
  const watches = [
    { id: 1, name: "Tissot", price: 1400, description: "Luxury Watch (39mm)", image: "/pic9.png" },
    { id: 2, name: "Rado", price: 1200, description: "Reliable Craftsmanship (43mm)", image: "/pic7.jpg" },
    { id: 3, name: "Cartier", price: 1000, description: "Durable Quality (43mm)", image: "/pic3.webp" },
    { id: 4, name: "Tissot", price: 800, description: "Modern Eophistication (40mm)", image: "/pic4.jpg" },
    { id: 5, name: "Tag Heuer", price: 1450, description: "Precision Engineering (44mm)", image: "/pic5.jpg" },
    { id: 6, name: "Genises", price: 600, description: "Timeless Elegance (40mm)", image: "/pic6.jpg" },
    { id: 7, name: "Edifice Casio", price: 1600, description: "Modern Sophistication (50mm)", image: "/pic10.jpg" },
    { id: 8, name: "Jaeger‑LeCoultre", price: 17500, description: "Master Control (40mm)", image: "/pic11.webp" },
    { id: 9, name: "Tag Heuer", price: 1350, description: "Connected Titanium (45mm)", image: "/pic12.webp" },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mx-12">
        {watches.map((watch) => (
          <div key={watch.id} className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <img src={watch.image} alt={watch.name} className="w-full h-auto rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mt-4">{watch.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{watch.description}</p>
            <div className="text-xl font-bold text-gray-700 mt-2">${watch.price}</div>
            <button className="mt-4 py-2 px-6 border-2 border-burlywood text-burlywood rounded-md hover:bg-burlywood hover:text-white transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watches;
