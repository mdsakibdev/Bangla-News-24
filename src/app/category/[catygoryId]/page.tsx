import NewsCard from "@/components/NewsCard";
import type { ComponentProps } from "react";

interface CategoryNewsProps {
    params: Promise<{
        catygoryId: string;
    }>;
}

type NewsItem = ComponentProps<typeof NewsCard>["news"];

interface ApiResponse {
    title?: string;
    data: NewsItem[];
}

const CategoryNews = async ({ params }: CategoryNewsProps) => {

    const { catygoryId } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${catygoryId}`);
    const data: ApiResponse = await res.json();
    const categoryNews = data.data || [];

    // console.log(data);
    return (
        <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="border-b-2 border-red-700 mb-5">
                <h1 className="font-bold text-2xl  mb-3 ">
                    {data.title}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
                {categoryNews.map(news => <NewsCard key={news.id} news={news} />)}
            </div>
        </div>
    );
};

export default CategoryNews;