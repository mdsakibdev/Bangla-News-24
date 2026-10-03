import Image from "next/image";
import Link from "next/link";

interface News {
    id: string
    title: string
    description: string
    link: string
    imageUrl: string
    imageAlt: string
    category: string
    type: string
    isLive?: boolean
    firstPublished?: string
    lastPublished?: string
    source?: string
}

const MainNews = ({ news }: { news: News[] }) => {
    if (!news || news.length === 0) return null;

    const [fristNews, ...outherNews] = news;

    const formatDate = (dateString?: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('bn-BD', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }) + " এ " + date.toLocaleTimeString('bn-BD', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto bg-white mb-8">

            {/* Prodhon boro news section */}
            <Link href={`/news/${fristNews.id}`}>
                <div className="bg-base-100 border border-gray-200 shadow-sm rounded-lg flex flex-col group cursor-pointer">
                    <div className="relative w-full h-55 sm:h-75 md:h-50 mb-3 overflow-hidden rounded-t-md">
                        <Image
                            src={fristNews.imageUrl}
                            alt={fristNews.imageAlt}
                            fill
                            className="object-cover rounded-t-md transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </div>
                    <div className="flex flex-col p-3 sm:p-4">
                        <p className="text-red-600 font-semibold text-xs sm:text-sm mb-1">{fristNews.category}</p>
                        <h2 className="text-lg sm:text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-red-600 leading-snug">
                            {fristNews.title}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3">
                            {fristNews.description}
                        </p>

                        {fristNews.firstPublished && (
                            <p className="text-gray-400 text-xs mt-auto">
                                {formatDate(fristNews.firstPublished)}
                            </p>
                        )}
                    </div>
                </div>
            </Link>

            {/* Pasher onnanno news-gulo */}
            <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg">

                <div className="flex flex-col">
                    {
                        outherNews.slice(0, 5).map((otNews) => (
                            <Link href={`/news/${otNews.id}`}
                                key={otNews.id}
                                className="py-3 px-3 border-b border-b-gray-200 last:border-b-0 hover:bg-gray-100 cursor-pointer"
                            >

                                <p className="text-red-600 font-semibold text-[11px] sm:text-xs mb-1">{otNews.category}</p>
                                <h3 className="font-bold text-xs sm:text-sm hover:text-red-600">
                                    {otNews.title}
                                </h3>
                            </Link>

                        ))
                    }
                </div>

            </div>

        </div>
    );
};

export default MainNews;