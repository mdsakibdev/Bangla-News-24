import Link from "next/link";
export interface Nav {
    slug: string
    title: string
    topicId: string | null
    url: string
    scrapable: boolean
}

const NavLinks = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/categories")
    const data = await res.json()
    const navs: Nav[] = data.data
    const filterNavs = navs.filter(n => n.scrapable)

    return (
        <div className="flex gap-4 justify-center mt-5">

            <Link className="hover:text-red-700" href={"/"}>হোম</Link>
            {
                filterNavs.map((n, i) =>
                    <Link key={i} href={`/category/${n.slug}`} className="hover:text-red-700">{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;