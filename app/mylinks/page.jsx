"use client";

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Nav from '@components/Nav';
import CreateLinkForm from '@components/CreateLinkForm';

const MyLinks = () => {
    const router = useRouter();
    const { data: session, status } = useSession({ required: true});

    if (status === "loading") return null;

    return (
        <>
            <Nav />
            <section className="w-full flex-center flex-col p-5">
                <CreateLinkForm />
            </section>
        </>
    );
};

export default MyLinks;
