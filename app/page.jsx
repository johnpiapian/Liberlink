"use client";

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Home = () => {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push('/login');
        }
    });

    return (
        <section className="w-full flex-center flex-col">
            {/* {status === 'loading' && <h1 className="text-center">Loading...</h1>} */}
            {session && (
                <>
                    <h1 className="text-center ">Welcome {session.user.name}</h1>
                </>
            )}
        </section>
    );
};

export default Home;
