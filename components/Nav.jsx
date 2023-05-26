"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";


const Nav = () => {
    const router = useRouter();
    const currentPath = usePathname();

    const isActive = (pathname) => {
        return currentPath === pathname ? "text-white font-bold" : "text-gray-300";
    };

    return (
        <nav className="bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-end h-16">
                    <div className="mr-auto">
                        <Link href="/">
                            <span className={`text-white font-bold cursor-pointer tracking-widest`}>
                                {`<Libralink/>`}
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link href="/">
                            <span className={`ml-6 cursor-pointer ${isActive("/")}`}>
                                Home
                            </span>
                        </Link>
                        <Link href="/profile">
                            <span className={`ml-6 cursor-pointer ${isActive("/profile")}`}>
                                Profile
                            </span>
                        </Link>
                        <Link href="/logout">
                            <span className={`ml-6 cursor-pointer ${isActive("/logout")}`}>
                                Logout
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
