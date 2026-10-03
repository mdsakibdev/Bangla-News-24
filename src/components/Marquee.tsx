
import Link from "next/link"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

export interface HeadlineType {
    id: string
    title: string
    description: string
    link: string
    imageUrl: string
    imageAlt: string
    category: string
    type: string
    isLive: boolean
    firstPublished: string
    lastPublished: string
    source: string
}

const Marquee = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json()
    const headlines: HeadlineType[] = data.data

    return (
        <div className="bg-red-700 text-white mb-5">
            <div className="flex max-w-7xl mx-auto">
                <div className="bg-red-800 py-1 px-5 font-bold">সর্বশেষ</div>
                <MarqueeText className="py-1" direction="right" duration={10}>
                    {
                        headlines.map(h => <Link href={`/news/${h.id}`} key={h.id} className="hover:underline">
                            <span>{h.title}</span>
                            <span className="mx-5">•</span>
                        </Link>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;