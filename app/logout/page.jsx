"use client";

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session?.user) signOut({ redirect: false});
        router.push("/login");
    }, [session, router]);

    return (
        <section className="w-full h-screen flex items-center justify-center bg-gray-100"></section>
    );
};

export default Home;
