export default function Newsletter() {
  return (
    <section className="py-20 px-6 bg-black text-white">

      <div className="max-w-5xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-10">
          <span className="text-red-500 text-sm tracking-widest uppercase">
            Stay Connected
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Get <span className="text-red-500">Exclusive Deals</span> & Updates
          </h2>

          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Be the first to know about new arrivals, discounts, and flash sales
          </p>
        </div>

        {/* MAIN CONTAINER */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 px-6 md:px-12 py-14">

          {/* subtle glow */}
          <div className="absolute inset-0 bg-linear-to-r from-red-600/10 via-transparent to-transparent"></div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT TEXT */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                Never Miss a <span className="text-red-500">Drop</span>
              </h3>

              <p className="text-gray-400 mt-4 text-sm md:text-base">
                Join our newsletter and get updates on trending fashion,
                exclusive discounts, and special offers.
              </p>

              <p className="text-gray-500 text-xs mt-4">
                No spam. You can unsubscribe anytime.
              </p>
            </div>

            {/* RIGHT INPUT */}
            <div className="md:w-1/2 w-full">

              <div className="flex flex-col sm:flex-row gap-3">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-black border border-zinc-700 text-white focus:outline-none focus:border-red-500"
                />

                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition">
                  Subscribe
                </button>

              </div>

              {/* trust line */}
              <p className="text-gray-500 text-xs mt-3 text-center sm:text-left">
                Join 10,000+ fashion shoppers already subscribed
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}