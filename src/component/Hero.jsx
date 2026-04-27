import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[90vh] relative flex items-center justify-center text-center overflow-hidden bg-black text-whitept-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Animated floating glow effect */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-red-600/20 blur-[120px] rounded-full"
        animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 max-w-3xl"
      >
        <motion.h1
          initial={{ letterSpacing: "10px", opacity: 0 }}
          animate={{ letterSpacing: "4px", opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-red-600"
        >
          Power Meets Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mt-4 text-base md:text-lg"
        >
         Don't miss out on exclusive offers and top-rated items. Shop confidently with secure payments, fast delivery, and customer
         satisfaction at the heart of everything we do.
          
        </motion.p>
         {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mt-4 text-base md:text-lg"
        >
          Elevate your style with premium men’s wear, women’s fashion, and luxury wrist watches.
        </motion.p> */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 mt-2 text-sm"
        >
          Minimal. Bold. Timeless Fashion.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-red-600 px-8 py-3 rounded-full font-medium tracking-wide shadow-lg shadow-red-600/30"
        >
          Explore Collection
        </motion.button>
      </motion.div>

    </section>
  );
}