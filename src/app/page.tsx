import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

// Article ebong Section er jonno TypeScript interfaces
interface Article {
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

interface NewsSection {
  curationId: string;
  title: string;
  articles: Article[];
}

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const section: NewsSection[] = data.data;

  const mainNews = section[0]?.articles || [];
  const otherSection: NewsSection[] = section.slice(1);

  return (
    <div>


      {/* Main container responsive kora holo */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 py-4">
        {/* news section */}
        <div className="lg:col-span-2 space-y-8">
          <MainNews news={mainNews} />

          <div className="grid gap-6">
            {
              otherSection.map(otNews => <div className=""
                key={otNews.curationId}>
                <div className="border-b-2 border-red-700 py-2 mb-5">
                  <h1 className="font-bold text-xl">{otNews.title}</h1>
                </div>

                {/* News card gulo ke responsive grid (mobile-e 1 column, tab-e 2, desktop-e 3) kora holo */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {
                    otNews.articles.map((news) => <NewsCard key={news.id} news={news} />)
                  }
                </div>
              </div>)
            }
          </div>
        </div>

        {/* most read section */}
        <div className="col-span-1 hidden lg:block rounded-lg">
          <MostRead />
        </div>

      </div>
    </div>
  );
}
export default Home