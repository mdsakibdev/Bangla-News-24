import Image from "next/image";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    description: string;
    link: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    type: string;
    isLive?: boolean;
    firstPublished?: string;
    lastPublished?: string;
    source?: string;
}

const NewsCard = ({ news }: { news: News }) => {

    // Date formatting helper function
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
        <Link href={`/news/${news.id}`}>

            <div className="card bg-base-100 border border-gray-200 shadow-sm rounded-lg flex flex-col h-full group cursor-pointer overflow-hidden">
                {/* Image section fix: fixed height use kora holo jate image theek thak dekhay */}
                <div className="relative w-full h-45 sm:h-40 overflow-hidden bg-gray-100">
                    <Image
                        src={news.imageUrl}
                        alt={news.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Card Body */}
                <div className="card-body p-4 flex flex-col justify-between grow">
                    <div>
                        <p className="text-red-600 font-semibold text-xs mb-1">
                            {news.category}
                        </p>
                        <h2 className="card-title text-sm sm:text-base font-bold mb-2 transition-colors duration-300 group-hover:text-red-600 leading-snug">
                            {news.title}
                        </h2>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3">
                            {news.description}
                        </p>
                    </div>

                    {/* Published Date */}
                    {news.firstPublished && (
                        <p className="text-gray-400 text-[11px] mt-auto pt-2 border-t border-gray-100">
                            {formatDate(news.firstPublished)}
                        </p>
                    )}
                </div>
            </div>

        </Link>
    );
};

export default NewsCard;