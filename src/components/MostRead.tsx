import Link from "next/link";

interface NewsItem {
    id: string;
    title: string;
}

const MostRead = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const news: NewsItem[] = data.data;
    return (
        <div className="card p-4 bg-base-100 border border-gray-300">
            <h1 className="font-bold text-xl mb-3">সর্বাধিক পঠিত</h1>

            <div className="grid gap-4">
                {
                    news.map((n, i) => <Link href={`/news/${n.id}`} className="flex gap-3 cursor-pointer hover:text-red-800" key={n.id}>

                        <p className="text-xl font-bold text-red-500 ">{i + 1}</p>
                        <h2 className=" cursor-pointer text-xl">{n.title}</h2>

                    </Link>)
                }
            </div>
        </div>
    );
};

export default MostRead;