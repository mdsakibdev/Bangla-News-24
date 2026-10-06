import Link from "next/link";

export interface Nav {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const NavLinks = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  const data = await res.json();

  const navs: Nav[] = data.data;

  const filterNavs = navs.filter((n) => n.scrapable);

  return (
    <nav className="mt-4 w-full border-y border-gray-200 bg-white">
      <div
        className="
          mx-auto flex max-w-7xl
          items-center
          justify-start
          gap-5
          overflow-x-auto
          px-4
          py-3
          whitespace-nowrap
          scrollbar-hide
          md:justify-center
          md:gap-7
          lg:gap-8
        "
      >
        {/* Home */}
        <Link
          href="/"
          className="
            shrink-0
            text-sm
            font-medium
            text-gray-800
            transition
            hover:text-red-700
            md:text-base
          "
        >
          হোম
        </Link>

        {/* Categories */}
        {filterNavs.map((n) => (
          <Link
            key={n.slug}
            href={`/category/${n.slug}`}
            className="
              shrink-0
              text-sm
              font-medium
              text-gray-800
              transition
              hover:text-red-700
              md:text-base
            "
          >
            {n.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLinks;