import { useState } from "react";

export default function Navbar1() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [active, setActive] = useState("home");

  const handleSelect = (item) => {
    setActive(item);
    setOpen(false);
    setShopOpen(false);
  };

  return (
    <header className="bg-black text-white border-b border-red-600 fixed top-0 z-50 w-full ">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 ">

        {/* LOGO */}
        <h1 className="text-red-600 font-bold text-2xl tracking-[4px]">
          DAHUNSI
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 text-sm relative">

          <span
            onClick={() => handleSelect("home")}
            className={`cursor-pointer hover:text-red-500 ${
              active === "home" ? "text-red-500" : ""
            }`}
          >
            Home
          </span>

          {/* SHOP DROPDOWN */}
          <div className="relative">
            
            <span
              onClick={() => setShopOpen(!shopOpen)}
              className="cursor-pointer hover:text-red-500"
            >
              Shop ▾
            </span>

            {/* DROPDOWN MENU */}
            {shopOpen && (
              <div className="absolute top-8 left-0 bg-gray-900 border border-red-600 w-44 flex flex-col">

                <span
                  onClick={() => handleSelect("men")}
                  className="px-4 py-2 hover:bg-red-600 cursor-pointer"
                >
                  Men Wears
                </span>

                <span
                  onClick={() => handleSelect("women")}
                  className="px-4 py-2 hover:bg-red-600 cursor-pointer"
                >
                  Women Wears
                </span>

                <span
                  onClick={() => handleSelect("watch")}
                  className="px-4 py-2 hover:bg-red-600 cursor-pointer"
                >
                  Wrist Watches
                </span>

              </div>
            )}
          </div>

          <span
            onClick={() => handleSelect("contact")}
            className="cursor-pointer hover:text-red-500"
          >
            Contact
          </span>

          <span className="text-red-500 cursor-pointer">
            🛒
          </span>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-5 border-t border-red-600 bg-black">

          <span onClick={() => handleSelect("home")}>Home</span>

          {/* SHOP MOBILE */}
          <div>
            <p
              onClick={() => setShopOpen(!shopOpen)}
              className="cursor-pointer"
            >
              Shop ▾
            </p>

            {shopOpen && (
              <div className="flex flex-col ml-4 mt-2 gap-2 text-sm">

                <span onClick={() => handleSelect("men")}>
                  Men Wears
                </span>

                <span onClick={() => handleSelect("women")}>
                  Women Wears
                </span>

                <span onClick={() => handleSelect("watch")}>
                  Wrist Watches
                </span>

              </div>
            )}
          </div>

          <span onClick={() => handleSelect("contact")}>
            Contact
          </span>

          <span className="text-red-500">Cart 🛒</span>
        </div>
      )}
    </header>
  );
}