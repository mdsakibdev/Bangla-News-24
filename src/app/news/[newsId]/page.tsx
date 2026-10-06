
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


const NewsDetail = async ({ params }: { params: { newsId: string } }) => {
    const { newsId } = await params
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`)
    const data = await res.json()
    const newsData = data.data;


    if (!newsData) {
        notFound()
    }


    const dateObj = new Date(newsData.firstPublished);
    const formattedDate = dateObj.toLocaleDateString('bn-BD', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formattedTime = dateObj.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    });



    const displayDateString = `${formattedDate} এ ${formattedTime}`;

    return (
        <div>
            <main className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
                <article className="max-w-3xl mx-auto bg-white">

                    {/* টাইটেল এবং সাব-টাইটেল অংশ */}
                    <div className="mb-6">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
                            {newsData.title}
                        </h1>

                        <p className="mt-4 text-gray-600 text-base leading-relaxed">
                            স্থানীয় সরকার প্রতিমন্ত্রীর এলাকার তিনটি ইউনিয়নের নামকরণ নিয়ে তীব্র বিতর্কের মধ্যেই বগুড়ার জেলা প্রশাসক মো. তৌহিদুর রহমান বিবিসি বাংলাকে জানিয়েছেন, প্রধানমন্ত্রী নিজেই তাকে নির্দেশনা দিয়েছেন...
                            {/* {newsData.} */}
                        </p>
                    </div>

                    <div className="py-3 my-4 border-t border-b border-gray-200 text-gray-500 text-sm flex items-center justify-between">
                        <span>{displayDateString}</span>
                        <span>শব্দ {newsData.wordCount}</span>
                    </div>

                    {/* ফিচার ইমেজ */}
                    <div className="relative w-full h-80 sm:h-105 my-6 bg-gray-100 rounded-lg overflow-hidden">
                        <Image
                            src={newsData.imageUrl}
                            alt={newsData.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* সংবাদ মূল কনটেন্ট */}
                    <div className="pt-2">
                        <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed space-y-5">
                            {newsData.text.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>

                        {/* ট্যাগসমূহ */}
                        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
                            <span className="text-sm font-medium text-gray-500 mr-2">ট্যাগ:</span>
                            {newsData.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-md transition-colors cursor-pointer"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* মূল লিংকে যাওয়ার বাটন */}
                        <div className="mt-8 pt-4">
                            <Link
                                href={newsData.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                            >
                                মূল খবরটি বিবিসি বাংলায় পড়ুন
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </article>
            </main>
        </div>
    );
};

export default NewsDetail;