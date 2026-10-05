import Image from "next/image";
import NavLinks from "./NavLinks";
import UserInpo from "./UserInpo";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="py-4 border-b border-gray-200 ">
            <div className="max-w-7xl mx-auto px-4 relative flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Spacer div to balance flex layout on desktop so logo stays exact center */}
                <div className="hidden md:block w-28"></div>

                {/* Logo, Title & Date (Centered) */}
                <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                    <Image height={50} width={50} src={'/logo.webp'} alt="Logo Image" className="object-contain" />
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-red-700">Bangla News 24</h1>
                        <p className="text-sm text-gray-500 font-medium">{date}</p>
                    </div>
                </div>

                {/* Authentication Buttons (Right side) */}
                <UserInpo/>
            </div>

            <NavLinks />
        </header>
    );
};

export default Header;