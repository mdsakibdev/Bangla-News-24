import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-white px-5 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">

        {/* Icon */}
        {/* <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <FaNewspaper className="text-3xl text-red-700" />
        </div> */}

        {/* 404 */}
        <h1 className="text-[100px] font-black leading-none tracking-tight text-red-700 sm:text-[140px]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          পেজটি খুঁজে পাওয়া যায়নি
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরিয়ে ফেলা হয়েছে,
          নাম পরিবর্তন করা হয়েছে অথবা এই মুহূর্তে পাওয়া যাচ্ছে না।
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-red-800 hover:shadow-md"
          >
            <FaArrowLeft className="text-xs" />
            হোম পেজে ফিরে যান
          </Link>

          <Link
            href="/latest"
            className="rounded-md border border-red-700 px-6 py-3 text-sm font-semibold text-red-700 transition duration-200 hover:bg-red-700 hover:text-white"
          >
            সর্বশেষ সংবাদ
          </Link>

        </div>

        {/* Brand */}
        <div className="mt-12 border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-red-700">
              Bangla News 24
            </span>{" "}
            — সর্বশেষ খবর, সবসময় আপনার সাথে
          </p>
        </div>

      </div>
    </main>
  );
};

export default NotFound;