"use client";

import Link from "next/link";


const Footer = () => {
    return (
    <footer className="mt-16 bg-red-700 text-white">

      {/* Bottom Footer */}
      <div className="border-t border-white/20 bg-red-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-sm md:flex-row md:px-8">

          <p className="text-white/80">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-white">
              Bangla News 24
            </span>{" "}
            — সর্বস্বত্ব সংরক্ষিত।
          </p>

          <div className="flex gap-5">

            <Link
              href="/privacy-policy"
              className="text-white/80 transition hover:text-yellow-300"
            >
              গোপনীয়তা নীতি
            </Link>

            <Link
              href="/terms"
              className="text-white/80 transition hover:text-yellow-300"
            >
              শর্তাবলী
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

