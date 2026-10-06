import Link from "next/link";
import { FaArrowLeft, FaFileContract } from "react-icons/fa";

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-red-700 px-5 py-14 text-white">
        <div className="mx-auto max-w-5xl">

          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-700">
              <FaFileContract className="text-xl" />
            </div>

            <span className="text-sm font-medium text-white/80">
              Bangla News 24
            </span>
          </div>

          <h1 className="text-3xl font-bold md:text-4xl">
            শর্তাবলী
          </h1>

          <p className="mt-3 text-sm text-white/80">
            আমাদের ওয়েবসাইট ব্যবহারের নিয়ম ও শর্তাবলী।
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-sm md:p-10">

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              শর্তাবলীতে সম্মতি
            </h2>

            <p className="leading-8 text-gray-600">
              Bangla News 24 ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি এই
              শর্তাবলী মেনে চলতে সম্মত হচ্ছেন। আপনি যদি এই শর্তাবলীর
              কোনো অংশের সাথে একমত না হন, তাহলে অনুগ্রহ করে আমাদের
              ওয়েবসাইট ব্যবহার থেকে বিরত থাকুন।
            </p>
          </div>

          {/* Content Usage */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ১. সংবাদ ও কনটেন্ট
            </h2>

            <p className="leading-8 text-gray-600">
              আমাদের ওয়েবসাইটে প্রকাশিত সংবাদ, লেখা, ছবি, গ্রাফিক্স এবং
              অন্যান্য কনটেন্ট তথ্য ও সংবাদভিত্তিক উদ্দেশ্যে প্রকাশ করা হয়।
              কোনো তথ্য ব্যবহারের ক্ষেত্রে প্রযোজ্য কপিরাইট ও মেধাস্বত্ব
              আইন অনুসরণ করতে হবে।
            </p>
          </div>

          {/* Accuracy */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ২. তথ্যের নির্ভুলতা
            </h2>

            <p className="leading-8 text-gray-600">
              আমরা প্রকাশিত সংবাদ ও তথ্য যথাসম্ভব নির্ভুল রাখার চেষ্টা করি।
              তবে কোনো সংবাদ বা তথ্য সব সময় সম্পূর্ণ নির্ভুল, সম্পূর্ণ
              বা সর্বশেষ হবে—এমন নিশ্চয়তা দেওয়া হয় না।
            </p>
          </div>

          {/* User Responsibility */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৩. ব্যবহারকারীর দায়িত্ব
            </h2>

            <p className="mb-3 leading-8 text-gray-600">
              ওয়েবসাইট ব্যবহার করার সময় ব্যবহারকারীকে:
            </p>

            <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-600">
              <li>প্রযোজ্য আইন ও নিয়ম মেনে চলতে হবে।</li>
              <li>ওয়েবসাইটের নিরাপত্তা নষ্ট করার চেষ্টা করা যাবে না।</li>
              <li>অন্য ব্যবহারকারীর অধিকার ক্ষুণ্ন করা যাবে না।</li>
              <li>ভুল বা বিভ্রান্তিকর তথ্য ছড়ানো থেকে বিরত থাকতে হবে।</li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৪. কপিরাইট
            </h2>

            <p className="leading-8 text-gray-600">
              Bangla News 24-এর নিজস্ব কনটেন্ট, ডিজাইন, লোগো এবং অন্যান্য
              সৃজনশীল উপাদান প্রযোজ্য কপিরাইট ও মেধাস্বত্ব আইনের অধীনে
              সুরক্ষিত হতে পারে। অনুমতি ছাড়া এসব কনটেন্ট পুনঃপ্রকাশ বা
              বাণিজ্যিকভাবে ব্যবহার করা উচিত নয়।
            </p>
          </div>

          {/* External Links */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৫. তৃতীয় পক্ষের লিংক
            </h2>

            <p className="leading-8 text-gray-600">
              আমাদের ওয়েবসাইটে তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকতে পারে।
              এসব ওয়েবসাইটের কনটেন্ট, নিরাপত্তা বা privacy policy-এর
              জন্য Bangla News 24 দায়ী নয়।
            </p>
          </div>

          {/* Changes */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৬. শর্তাবলী পরিবর্তন
            </h2>

            <p className="leading-8 text-gray-600">
              প্রয়োজন অনুযায়ী আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন বা
              আপডেট করতে পারি। পরিবর্তিত শর্তাবলী এই পেজে প্রকাশ করার
              পর থেকে কার্যকর হবে।
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৭. যোগাযোগ
            </h2>

            <p className="leading-8 text-gray-600">
              এই শর্তাবলী সম্পর্কে আপনার কোনো প্রশ্ন বা মতামত থাকলে
              আমাদের সাথে যোগাযোগ করতে পারেন।
            </p>

            <p className="mt-3 font-medium text-red-700">
              Email: info@banglanews24.com
            </p>
          </div>

          {/* Back */}
          <div className="mt-10 border-t pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-medium text-red-700 transition hover:text-red-900"
            >
              <FaArrowLeft />
              হোম পেজে ফিরে যান
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default TermsPage;