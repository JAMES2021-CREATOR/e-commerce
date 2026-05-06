export default function PromoBanner() {
  return (
    <section className="py-16 px-6 bg-black">

      {/* SECTION TITLE */}
      <div className="text-center mb-8">
        <span className="text-red-500 text-sm tracking-widest uppercase">
          Limited Offer
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
          🔥 Exclusive <span className="text-red-500">Fashion Deals</span>
        </h2>

        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Don’t miss out on today’s special discounts
        </p>
      </div>

      {/* BANNER CARD */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 p-10">

          {/* LEFT TEXT */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Save Big on <span className="text-red-500">Premium Fashion</span>
            </h3>

            <p className="text-gray-400 mt-3 max-w-md">
              Get up to <span className="text-red-500 font-semibold">50% OFF</span> on selected items.
              Limited time offer — grab it before it ends.
            </p>

            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
              Shop Now
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/Trendclock.jpeg"
              alt="Promo"
              className="w-70 md:w-87.5 object-contain hover:scale-105 transition duration-500 rounded-lg"
            />
          </div>

        </div>
      </div>

    </section>
  );
}