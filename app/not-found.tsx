"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="w-full  min-h-screen flex flex-col items-center justify-center px-6 text-center">
      {/* 404 Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <Image
          src="/logo.png"
          alt="Page Not Found"
          width={300}
          height={300}
          className="w-full max-w-[280px] sm:max-w-[340px] mx-auto"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-[42px] sm:text-[64px] font-extrabold "
      >
        404
      </motion.h1>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-2 text-[16px] sm:text-[18px]  max-w-md"
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Link
          href="/"
          className="mt-8 inline-block px-6 py-3 bg-[#55C514] text-white font-semibold rounded-full hover:bg-[#47a511] transition-all"
        >
          Go Back Home
        </Link>
      </motion.div>

      {/* Footer text */}
      <p className="mt-10 text-sm text-gray-400">
        EVOC Digital © {new Date().getFullYear()}
      </p>
    </section>
  );
}
