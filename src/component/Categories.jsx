
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    title: "Men Wears",
    image: "/catmen2.jpeg",
  },
  {
    id: 2,
    title: "Women Wears",
    image: "/catwomen.png",
  },
  {
    id: 3,
    title: "Watches",
    image: "/catclock.jpeg",
  },
];

// animation variants
const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i === 0 ? -100 : i === 2 ? 100 : 0,
    y: i === 1 ? 80 : 0,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Categories() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-10">

      {/* TITLE */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        SHOP <span className="text-red-600">CATEGORIES</span>
      </h1>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative h-[400px] rounded-xl overflow-hidden group cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>

            {/* TEXT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold mb-3">
                {cat.title}
              </h2>

              <button className="px-5 py-2 border border-red-600 text-red-500 rounded-full text-sm hover:bg-red-600 hover:text-white transition">
                Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}