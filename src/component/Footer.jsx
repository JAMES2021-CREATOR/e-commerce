import { Mail, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 pt-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold">
            Trend<span className="text-red-500">Store</span>
          </h2>

          <p className="text-gray-400 text-sm mt-3">
            Your number one fashion store for premium clothing, watches, and
            accessories.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-red-500 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#shop" className="hover:text-red-500 transition">
                Shop
              </a>
            </li>

            <li>
              <a href="#categories" className="hover:text-red-500 transition">
                Categories
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-red-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-white">Contact</h3>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Mail size={16} /> support@trendstore.com
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Phone size={16} /> +234 000 000 0000
          </div>

          {/* SOCIALS */}
          <div className="flex gap-4 text-gray-400">
            <FaFacebook className="hover:text-red-500 cursor-pointer" />
            <FaInstagram className="hover:text-red-500 cursor-pointer" />
            <FaTwitter className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-800 mt-12 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} TrendStore. All rights reserved.
      </div>
    </footer>
  );
}
