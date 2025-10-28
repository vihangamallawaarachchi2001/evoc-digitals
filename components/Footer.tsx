"use client";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black mt-20 text-gray-300 border-t border-gray-800 py-12 px-6 flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-6">
        {/* Left - Logo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Image
            src="/logo.png"
            alt="EVOC Digital Logo"
            width={300}
            height={150}
            className="w-auto h-20 object-contain"
          />
          <p className="text-sm text-gray-400 mt-2 italic">
            — Where Ideas Evoke Experiences —
          </p>
        </div>

        {/* Middle - Columns */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-12 lg:gap-20">
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#55C514]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#55C514]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-[#55C514]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase">
              Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-[#55C514]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#55C514]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#55C514]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#55C514]">
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-[#55C514]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-[#55C514]">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-[#55C514]">
                  API Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right - Contact & Map */}
        <div className="flex flex-col items-center lg:items-end gap-6 w-full lg:w-auto">
          <div>
            <h3 className="font-semibold text-white mb-3 text-sm uppercase">
              Contact Us
            </h3>
            <div className="flex gap-5">
              <Link href="tel:+94770000000" aria-label="Phone">
                <Phone size={20} className="text-[#55C514] hover:scale-110 transition" />
              </Link>
              <Link href="mailto:info@evoc.lk" aria-label="Email">
                <Mail size={20} className="text-[#55C514] hover:scale-110 transition" />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                <Facebook size={20} className="text-[#55C514] hover:scale-110 transition" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                <Instagram size={20} className="text-[#55C514] hover:scale-110 transition" />
              </Link>
            </div>
          </div>

          {/* Real Map */}
          <div className="relative w-[200px] h-[180px] overflow-hidden rounded-lg border border-gray-800">
            <iframe
              title="EVOC Digital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63327.25931624964!2d79.8149796!3d6.9218375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25965c9f0d3df%3A0x8d8d6b20e0f6b76!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1730123900000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="grayscale"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="w-full mt-10 border-t border-gray-800 pt-6 text-center space-y-2">
        <p className="text-xs text-gray-500">
          <span className="text-[#55C514]">©</span> 2025 EVOC Digital. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">
          Designed & Developed by{" "}
          <Link
            href="https://maximumeffortlk.site"
            target="_blank"
            className="text-[#55C514] font-medium hover:underline"
          >
            Maximum Effort LK
          </Link>
        </p>
      </div>
    </footer>
  );
}
