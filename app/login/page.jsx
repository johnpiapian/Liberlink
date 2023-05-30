"use client";

import { useEffect, useState } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [providers, setProviders] = useState(null);

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    useEffect(() => {
        const fetchProviders = async () => {
            const res = await getProviders();
            setProviders(res);
        };

        fetchProviders();
    }, []);

    useEffect(() => {
        if (session?.user) router.push('/');
    }, [session, router]);

    // Fix flicker when user is already logged in
    if (status === 'loading' || session?.user) return null;

    return (
        <section className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-[350px] mx-auto">
                <h1 className="text-3xl font-bold text-center mb-4 p-4">Login</h1>
                {providers &&
                    Object.values(providers).map((provider) => (
                        <button
                            key={provider.id}
                            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors mb-2"
                            onClick={() => signIn(provider.id, { callbackUrl: callbackUrl })}
                        >
                            Sign In with {provider.name}
                        </button>
                    ))}
            </div>
        </section>
    );

};

export default Login;

