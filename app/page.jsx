"use client";

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Nav from '@components/Nav';

const Home = () => {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        }
    });

    if (status === "loading") return null;

    return (
        <>
            <Nav />
            <section className="w-full flex-center flex-col p-5">
                {/* {status === 'loading' && <h1 className="text-center">Loading...</h1>} */}
                {session?.user && (
                    <>
                        <h1 className="text-center ">Welcome {session.user.name}</h1>
                    </>
                )}
            </section>
        </>
    );
};

export default Home;
