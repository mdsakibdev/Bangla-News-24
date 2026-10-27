import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface NewsData {
  title: string;
  firstPublished: string;
  wordCount: number;
  imageUrl: string;
  text: string;
  tags: string[];
  link: string;
}

interface NewsApiResponse {
  success: boolean;
  data: NewsData | null;
}

interface NewsDetailProps {
  params: Promise<{
    newsId: string;
  }>;
}

const NewsDetail = async ({ params }: NewsDetailProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  if (!res.ok) {
    notFound();
  }

  const data: NewsApiResponse = await res.json();

  const newsData = data.data;

  if (!newsData) {
    notFound();
  }

  const dateObj = new Date(newsData.firstPublished);

  const formattedDate = dateObj.toLocaleDateString("bn-BD", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const displayDateString = `${formattedDate} এ ${formattedTime}`;

  return (
    <main className="min-h-screen bg-white px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl bg-white">

        {/* Title */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold leading-snug text-gray-900 sm:text-4xl">
            {newsData.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-600">
            স্থানীয় সরকার প্রতিমন্ত্রীর এলাকার তিনটি ইউনিয়নের নামকরণ নিয়ে
            তীব্র বিতর্কের মধ্যেই বগুড়ার জেলা প্রশাসক মো. তৌহিদুর রহমান
            বিবিসি বাংলাকে জানিয়েছেন, প্রধানমন্ত্রী নিজেই তাকে নির্দেশনা
            দিয়েছেন...
          </p>
        </div>

        {/* Date & Word Count */}
        <div className="my-4 flex items-center justify-between border-y border-gray-200 py-3 text-sm text-gray-500">
          <span>{displayDateString}</span>

          <span>শব্দ {newsData.wordCount}</span>
        </div>

        {/* Feature Image */}
        <div className="relative my-6 h-80 w-full overflow-hidden rounded-lg bg-gray-100 sm:h-105">
          <Image
            src={newsData.imageUrl}
            alt={newsData.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* News Content */}
        <div className="pt-2">
          <div className="space-y-5 text-lg leading-relaxed text-gray-800">
            {newsData.text.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-gray-200 pt-6">
            <span className="mr-2 text-sm font-medium text-gray-500">
              ট্যাগ:
            </span>

            {newsData.tags.map((tag, index) => (
              <span
                key={index}
                className="cursor-pointer rounded-md bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Original News Button */}
          <div className="mt-8 pt-4">
            <Link
              href={newsData.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-red-600 px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-red-700"
            >
              মূল খবরটি বিবিসি বাংলায় পড়ুন

              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default NewsDetail;