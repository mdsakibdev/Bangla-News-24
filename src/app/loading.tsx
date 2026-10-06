import { FaNewspaper } from "react-icons/fa";

const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-white px-5">
      <div className="flex flex-col items-center text-center">

        {/* Spinner */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-red-100 border-t-red-700" />

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
            <FaNewspaper className="text-xl text-red-700" />
          </div>
        </div>

        {/* Text */}
        <h2 className="mt-6 text-xl font-bold text-gray-800">
          সংবাদ লোড হচ্ছে...
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          অনুগ্রহ করে একটু অপেক্ষা করুন
        </p>

        {/* Brand */}
        <p className="mt-5 text-sm font-semibold text-red-700">
          Bangla News 24
        </p>

      </div>
    </main>
  );
};

export default Loading;