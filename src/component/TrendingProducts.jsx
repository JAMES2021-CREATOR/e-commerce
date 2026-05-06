import { motion } from "framer-motion";
import { trendingProducts } from "../data/products";

export default function TrendingProducts() {
  return (
    <section className="py-16 bg-black text-white overflow-hidden">
      
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">
          🔥 <span className="text-red-500">Trending</span> Products
        </h2>
      </div>

      {/* SCROLL WRAPPER */}
      <div className="relative overflow-hidden w-full">
        
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {[...trendingProducts, ...trendingProducts].map((product, index) => (
            <div
              key={index}
              className="min-w-62.5 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={product.image}
                className="w-full h-56 object-cover"
              />

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-400">
                  ₦{product.price.toLocaleString()}
                </p>

                <button className="mt-3 w-full bg-red-600 hover:bg-red-700 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}