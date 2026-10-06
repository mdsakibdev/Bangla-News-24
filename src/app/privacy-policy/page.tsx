import Link from "next/link";
import { FaArrowLeft, FaShieldAlt } from "react-icons/fa";

const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <section className="bg-red-700 px-5 py-14 text-white">
        <div className="mx-auto max-w-5xl">

          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-red-700">
              <FaShieldAlt className="text-xl" />
            </div>

            <span className="text-sm font-medium text-white/80">
              Bangla News 24
            </span>
          </div>

          <h1 className="text-3xl font-bold md:text-4xl">
            গোপনীয়তা নীতি
          </h1>

          <p className="mt-3 text-sm text-white/80">
            আপনার ব্যক্তিগত তথ্য ও গোপনীয়তা সুরক্ষায় আমাদের প্রতিশ্রুতি।
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="px-5 py-10 md:py-14">
        <div className="mx-auto max-w-5xl rounded-xl bg-white p-6 shadow-sm md:p-10">

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              আমাদের গোপনীয়তা নীতি
            </h2>

            <p className="leading-8 text-gray-600">
              Bangla News 24 আপনার গোপনীয়তাকে সম্মান করে। এই গোপনীয়তা
              নীতির মাধ্যমে আমরা আমাদের ওয়েবসাইট ব্যবহার করার সময় আপনার
              তথ্য কীভাবে সংগ্রহ, ব্যবহার এবং সুরক্ষিত করি তা ব্যাখ্যা করছি।
            </p>
          </div>

          {/* Information Collection */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ১. আমরা কী ধরনের তথ্য সংগ্রহ করি?
            </h2>

            <p className="mb-3 leading-8 text-gray-600">
              আমাদের ওয়েবসাইট ব্যবহার করার সময় কিছু সাধারণ তথ্য
              স্বয়ংক্রিয়ভাবে সংগ্রহ হতে পারে। যেমন:
            </p>

            <ul className="list-disc space-y-2 pl-6 leading-7 text-gray-600">
              <li>ব্রাউজারের ধরন ও ডিভাইস সম্পর্কিত তথ্য।</li>
              <li>ওয়েবসাইটে প্রবেশের সময় ও ব্যবহারের তথ্য।</li>
              <li>IP address এবং সাধারণ অবস্থান সম্পর্কিত তথ্য।</li>
              <li>আপনি কোন পেজগুলো ভিজিট করেছেন তার তথ্য।</li>
            </ul>
          </div>

          {/* Use of Information */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ২. তথ্য কীভাবে ব্যবহার করা হয়?
            </h2>

            <p className="leading-8 text-gray-600">
              সংগৃহীত তথ্য আমাদের ওয়েবসাইটের কার্যকারিতা উন্নত করতে,
              ব্যবহারকারীর অভিজ্ঞতা আরও ভালো করতে এবং আমাদের সংবাদ ও
              পরিষেবাগুলো উন্নত করতে ব্যবহার করা হতে পারে।
            </p>
          </div>

          {/* Cookies */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৩. Cookies
            </h2>

            <p className="leading-8 text-gray-600">
              আমাদের ওয়েবসাইট ব্যবহারকারীর অভিজ্ঞতা উন্নত করার জন্য
              cookies বা অনুরূপ প্রযুক্তি ব্যবহার করতে পারে। Cookies
              আপনার ব্রাউজারে সংরক্ষিত ছোট কিছু তথ্য, যা ওয়েবসাইটকে
              আপনার পছন্দ ও ব্যবহার বুঝতে সাহায্য করে।
            </p>
          </div>

          {/* Third Party */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৪. তৃতীয় পক্ষের পরিষেবা
            </h2>

            <p className="leading-8 text-gray-600">
              আমাদের ওয়েবসাইটে কিছু তৃতীয় পক্ষের পরিষেবা, analytics
              অথবা advertising service থাকতে পারে। এসব পরিষেবার নিজস্ব
              privacy policy থাকতে পারে এবং তাদের তথ্য ব্যবহারের নিয়ম
              তাদের নিজস্ব নীতিমালা দ্বারা পরিচালিত হয়।
            </p>
          </div>

          {/* Security */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৫. তথ্যের নিরাপত্তা
            </h2>

            <p className="leading-8 text-gray-600">
              ব্যবহারকারীর তথ্য সুরক্ষিত রাখার জন্য আমরা যুক্তিসঙ্গত
              নিরাপত্তা ব্যবস্থা গ্রহণ করার চেষ্টা করি। তবে ইন্টারনেটের
              মাধ্যমে কোনো তথ্য আদান-প্রদান শতভাগ নিরাপদ হওয়ার নিশ্চয়তা
              দেওয়া সম্ভব নয়।
            </p>
          </div>

          {/* Changes */}
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৬. নীতিমালায় পরিবর্তন
            </h2>

            <p className="leading-8 text-gray-600">
              প্রয়োজন অনুযায়ী আমরা এই গোপনীয়তা নীতিতে পরিবর্তন করতে
              পারি। পরিবর্তন করা হলে এই পেজে নতুন নীতিমালা প্রকাশ করা হবে।
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              ৭. যোগাযোগ
            </h2>

            <p className="leading-8 text-gray-600">
              আমাদের গোপনীয়তা নীতি সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের
              সাথে যোগাযোগ করতে পারেন।
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

export default PrivacyPolicyPage;